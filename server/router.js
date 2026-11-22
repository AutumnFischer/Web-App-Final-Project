const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {

    app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
    app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);

    app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);

    app.get('/logout', mid.requiresLogin, controllers.Account.logout);

    app.get('/game', mid.requiresLogin, controllers.Game.gamePage);

    app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);

    app.get('/highscores', mid.requiresLogin, controllers.Scoreboard.getHighscorePage);
    app.post('/highscores', mid.requiresLogin, controllers.Scoreboard.submitHighscore);
    app.get('/api/scores', mid.requiresLogin, controllers.Scoreboard.getHighscores);
};

module.exports = router;
