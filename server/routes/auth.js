const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/login', (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            return res.status(400).json({ errors: 'No user found' });
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            return res.status(200).json({ success: `logged in ${user.id}` });

        });
    })(req, res, next);
});

router.post('/signup', (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            return res.status(400).json({ errors: 'No user found' });
        }
        req.signUp(user, function(err) {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            return res.status(200).json({ success: `logged in ${user.id}` });

        });
    })(req, res, next);
});

router.get('/signup', (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            return res.status(400).json({ errors: 'No user found' });
        }
        req.signup(user, function(err) {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            return res.status(200).json({ success: `logged in ${user.id}` });

        });
    })(req, res, next);
});

router.get('/sign-out', (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            return res.status(400).json({ errors: 'No user found' });
        }
        req.signOut(user, function(err) {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            return res.status(200).json({ success: `logged in ${user.id}` });

        });
    })(req, res, next);
});

module.exports = router;