const mongoose = require('mongoose');

module.exports.isAuthorized = function (req, res, next) {
    const Model = mongoose.model('user');

    Model
        .findOne({ id: req.body.userID })
        .then(user => {
            if (user) {
                res.status(200).json({ status: 'ok' });
            } else {
                res.status(404).json({ status: 'err' });
            }
        })
} 

module.exports.isAuth = function (req, res, next) {
    if (!req.body.email || !req.body.password) {
        return res.redirect('/?msg=Fill in all the fields&isAuthorized=false');
    }

    const Model = mongoose.model('user');

    Model
        .findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                res.redirect('/?msg=User not found&isAuthorized=false');
            }
            if (!user.validPassword(req.body.password)) {
                res.redirect('/?msg=Invalid password&isAuthorized=false');
            } 
            req.session.isAuthorized = true;
            res.redirect(`/main?msg=Authorized&userID=${user.id}`); 
        }).catch(e => {
            res.redirect('/?msg=Something went wrong. Refresh the page and try again.&isAuthorized=false');
        });
} 

module.exports.isReg = function (req, res) {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.redirect('/?msg=Fill in all the fields&isAuthorized=false');
    }

    const Model = mongoose.model('user');

    Model
        .findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                res.redirect('/?msg=User is already registered&isAuthorized=false');
            }
        })

    let user = new Model({
        name: req.body.name,
        email: req.body.email,
    });

    user.setPassword(req.body.password);

    user
        .save()
        .then(user => { 
            req.session.isAuthorized = true;
            res.redirect(`/main?msg=You have registered successfully&userID=${user.id}`); 
        })
        .catch(err => {
            res.redirect('/?msg=Something went wrong. Refresh the page and try again.&isAuthorized=false');
        });
} 