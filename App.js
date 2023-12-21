// const heading = React.createElement("h1", { id: "heading" }, 'hello man')
// console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root)
// root.render(heading);

//div id =parnet
// div id child
// h1
//h2
//React element {}=>data

const data = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" },

       [ React.createElement("h1", { id: "head" },
            'helllo akjshalks ak'

        ),React.createElement("h2", { id: "head2" },
        'hesahdds'

    )]
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(data);