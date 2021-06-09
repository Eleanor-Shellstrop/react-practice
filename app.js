//  Often see components defined as arrow functions.
//  If writing a simple function that just returns JSX,
//  you can use an implicit return.
//  Parenthesis optional
const  Header = () => (
    <header>
        <h1>Scoreboard</h1>
        <span className="stats">Players: 1</span>
    </header>
);

ReactDOM.render(
    <Header />,
    document.getElementById('root')
);

