// Starting new phase: Making a scoreboard app

// React UI is a composition of functions
// React components are required to start with an upper case letter
function Header() {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
}

// Add self closing tag if no children present
ReactDOM.render(
    <Header />,
    document.getElementById('root')
);

