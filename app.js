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
const title = <h1>'My First React Element'</h1>
const description = <p>'I just learned how to create a React node and render it to the DOM!'</p>

const header = React.createElement(
    'header',
    null,
    title,
    description
);

ReactDOM.render(
    header,
    document.getElementById('root')
);

