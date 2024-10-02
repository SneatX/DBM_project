const passport = require('passport');

exports.googleAuthCallback = (req, res, next) => {
    passport.authenticate('google', async (err, user, info) => {
        if (err) {
            console.error('Error en la autenticación:', err);
            if (err.code === 11000) {
                return res.redirect('/?error=El email ya está en uso');
            }
            return next(err);
        }
        if (!user) {
            console.log('Autenticación fallida o cancelada:', info);
            return res.redirect('/');
        }
        req.logIn(user, (err) => {
            if (err) {
                console.error('Error al iniciar sesión:', err);
                return next(err);
            }
            return res.redirect(`http://localhost:${process.env.VITE_PORT}`);
        });
    })(req, res, next);
}; 