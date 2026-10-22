const parent = React.createElement ( 
    "div" , {id :"parent"},
    [React.createElement (
        "div" , {id :"child"},
        [React.createElement("h1",{},"I am h1 tag"),
         React.createElement("h2",{},"I am h2 tag")
        ]
    ),
    React.createElement (
        "div" , {id :"child2"},
        [React.createElement("h1",{},"I am h1 tag"),
         React.createElement("h2",{},"I am h2 tag")
        ]
    )
]);


const heading = React.createElement
("h1",
    {id :"heading"}, 
    "hello world!" );

// hello world is props 
/// {} refers to objects or attributes of the element.///
/// React.createElement is a method to create react elements in three arguments.

console.log(parent); // createElement is js object not an h1 tag. 


const root = ReactDOM.createRoot(document.getElementById("root"));
/// ReactDOM.createRoot is a method to create root for rendering react element in DOM.
/// document.getElementById is a method to get the element by id from the DOM.

root.render(parent);
/// root.render is a method to render the react element in the root.