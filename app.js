//  Since props are static, we use states to make the page dynamic
//  In React, state is the data you want to track in your app
//  It's the only data that changes over time

//  State itself is a regular JS object with properties
//  that deinfe the pieces of data that change

//  Only available in class components, not function components
//  Data through state is distributed through props

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

//  Counter is maintaining its own score state now, delete from Counter component
const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                { props.name }
            </span>
            <Counter />             
        </div>
    );
}

//  Change Counter from function to class, add "this" and constructor, 
//  change this.props.score to this.state.score
/**
 * Could use constructor below or "state = {}"
 * While not supported by all browsers (at time of tutorial?)
 * 
 *  constructor() {
 *       super()
 *       this.state = {
 *           score: 0
 *       };
 *   }
 * 
 */

class Counter extends React.Component {
    
    state = {
        score: 0
    }
    render() {
     return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{ this.state.score }</span>
            <button className="counter-action increment"> + </button>
        </div>
        );   
    }
}

//  Delete score from here, too
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

