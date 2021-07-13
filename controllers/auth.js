const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: req.session.isLoggedIn
    });
};
exports.postLogin = (req, res, next) => {
        User.findById("60ec58b7790d49104cd1446a")
        .then(user => {
                req.session.isLoggedIn = true;
                req.session.user = user;
                res.redirect('/');
            })
            .catch(err => console.log(err));
};