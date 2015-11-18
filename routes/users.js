var express 	= require('express'),
	passport 	= require('passport'),
	userRouter 	= express.Router()

userRouter.route('/login')
	.get(function(req, res) {
		res.render('login', {message: req.flash('loginMessage')})
	})
	.post(function(req, res) {
		// create a session with passport
	})

userRouter.route('/signup')
	.get(function(req, res) {
		res.render('signup', {message: req.flash('signupMessage')})
	})
	.post(function(req, res) {
		// create an account with passport
	})

userRouter.get('/profile', isLoggedIn, function(req, res) {
	// render user profile when signed in
})

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next()
	res.redirect('/')
}

module.exports = userRouter