const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
    // app.get('/scoreboard', mid.requiresLogin, controllers.Game.getScores);

    app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
    app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);

    app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);

    app.get('/logout', mid.requiresLogin, controllers.Account.logout);

    app.get('/game', mid.requiresLogin, controllers.Game.gamePage);
    // app.post('/game', mid.requiresLogin, controllers.Game.makeGame);

    app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};

module.exports = router;
