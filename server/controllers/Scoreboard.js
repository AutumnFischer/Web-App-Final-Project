const getHighscorePage = (req, res) => {
    res.render('highscores');
}

const submitHighscore = async (req, res) => {
    // try {
    //     const { score } = req.body;
    //     return res.status(201).json({ message: 'High score successfully submitted!' });
    // } catch (err) {
    //     return res.status(500).json({ error: 'Couldn\'t save score' });
    // }
}

const getHighscores = async (req, res) => {
    // const topScores = [];
    // return res.json({ scores: topScores });
}

module.exports = { getHighscores, submitHighscore, getHighscorePage };