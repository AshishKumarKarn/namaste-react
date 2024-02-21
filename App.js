import ReactDOM from 'react-dom/client';
import React from 'react';
const root = ReactDOM.createRoot(document.getElementById("root"));



const pageLayoutReactElement = React.createElement("div",{id:"parent"},
React.createElement("h1",{},
"Hello World from REACT!")
);


root.render(pageLayoutReactElement);