//  Add unique key, should not be reused
//  This is a static list, so we add them here
//  In API or other source, will likely have a unique ID
//  We can also auto-generate

//  Not all items need key props
//  Pass a key prop anytime you are iterating over an array of items
//  that will be rearranged, added or delted in your UI
//  A key will help identify with was changed, added, deleted from DOM

const players = [
    {
        name: "Guil",
        score: 50, 
        id: 1
      },
      {
        name: "Treasure",
        score: 85, 
        id: 2
      },
      {
        name: "Ashley",
        score: 95,
        id: 3
      },
      {
        name: "James",
        score: 80, 
        id: 4
      }
]

const  Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    ); 
}

//  Nest components: 
//  When a component countains another component, it's called composition
const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                { props.name }
            </span>
            <Counter score={ props.score } />            
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">
                { props.score }
            </span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = (props) => {
    return(
        <div className="scoreboard">
            <Header 
                title="Scoreboard" 
                totalPlayers={ props.initialPlayers.length } />

            {/* Players list*/}
            {props.initialPlayers.map( player =>
            // Implicit return here
                <Player 
                    name={ player.name }
                    score={ player.score }
                    key={ player.id.toString() } 
                />
            )}
            
        </div>
    );
}

//  Usually renders your top level element into the DOM,
//  So change to "App"
ReactDOM.render(
    <App initialPlayers={ players }/>,
    document.getElementById('root')
);

