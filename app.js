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

// Cannot add increment equations in React like JS 
// (ex: "this.score += 1") Use "setState"
/**
 * Also, "this" loses binding when extended from class
 * Use the bind() method to fix 
 * Or use arrow function  onClick={() => this.incrementScore()}
 * Arrow functions use a LEXICAL THIS BINDING which automatically binds
 * them to the scope in which they are defined.
 * 
 * Can also write method as arrow function (bound to component instance)
 * incrementScore = () => {}
 * and call onClick={this.incrementScore}
 */
class Counter extends React.Component {
    state = {
        score: 0
    };
    incrementScore() {
        this.setState({
            score: this.state.score + 1
        });
    }
    render() {
     return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{ this.state.score }</span>
            <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
        </div>
        );   
    }
}

const App = (props) => {
    return(
        <div className="scoreboard">
            <Header 
                title="Scoreboard" 
                totalPlayers={ props.initialPlayers.length } />

            {/* Players list*/}
            {props.initialPlayers.map( player =>
                <Player 
                    name={ player.name }
                    key={ player.id.toString() } 
                />
            )}
            
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={ players }/>,
    document.getElementById('root')
);

