// client/highscores.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

//Render highscore page and buttons to navigate between pages
const HighscoresPage = () => {
    const handleBackToGame = () => {
        window.location.assign('/game');
    };

    const handleLogout = () => {
        window.location.assign('/logout');
    };

    return (
        <main className="highscores-page">
            <header>
                <h1>Highscores</h1>
                <div>
                    <button type="button" onClick={handleBackToGame}>
                        Back to Game
                    </button>
                    <button type="button" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </header>

            <section>
            </section>
        </main>
    );
};


const init = () => {
    const root = createRoot(document.getElementById('highscores'));
    root.render(<HighscoresPage />);
}

window.onload = init();