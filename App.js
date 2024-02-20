const root = ReactDOM.createRoot(document.getElementById("root"));



const pageLayoutReactElement = React.createElement("div",{id:"parent"},
React.createElement("h1",{},
"Hello World from REACT!")
);


root.render(pageLayoutReactElement);