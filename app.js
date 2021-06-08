/**
 * React does not create real DOM nodes
 * (elements like h1, div, span, etc)
 * Instead, React creates plain JS objects that describe DOM nodes
 */
//-------------------------------------------------------------------------------------


/**
 * JSX: A syntax extension to JS that is used 
 * with React to describe elements in the UI
 * (rather than using React.createElement repeatedly)
 * Babel script tag for browser to read it
 */

const description = 'I just learned how to create a React node and render it to the DOM!';
const myTitleID = 'main-title';
const myName = 'Anne';

const header = (
    <header>
        <h1 id={ myTitleID }>{ myName }'s First React Element!</h1>
        <p className="main-desc">{ description }</p>

        {/* Can do math, too: {10 * 20} // Result: 200 */}
    </header>
);
//  Using curly braces in JSX is called
//  a JSX Expression
// Can be placed between JSX tags (as above)
// or as the value of an attribute in a JSX tag (like id)
// You exit JSX and enter back to JS with curly braces

ReactDOM.render(
    header,
    document.getElementById('root')
);

