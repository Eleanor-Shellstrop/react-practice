const  Header = () => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    ); 
}

//  Nest components: 
//  When a component countains another component, it's called composition
const Player = () => {
    return (
        <div className="player">
            <span className="player-name">Anne</span>
            <Counter />            
        </div>
    );
}

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = () => {
    return(
        <div className="scoreboard">
            <Header />

            {/* Players list*/}
            <Player />
        </div>
    );
}

//  Usually renders your top level element into the DOM,
//  So change to "App"
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

