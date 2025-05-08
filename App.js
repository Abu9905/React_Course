/* 
  <div>
      <div>
          <h1 id="heading">Hello world from react</h1>
          <h2>I am h2 tage</h2>
      </div>
  </div>

  RactElement(Object) => HTML(Browser Understands)
*/


const parent = React.createElement(
    "div", 
    {id:"parent"},
    [
        React.createElement("div", 
            {id:"child"},
            [React.createElement("h1", 
                {id:"heading"}, 
                "i am h1 tag"
            ),
            React.createElement("h2", 
                {id:"heading"}, 
                "i am h2 tag"
            )
            ]
        ),

        React.createElement("div", 
            {id:"child2"},
            [React.createElement("h1", 
                {id:"heading"}, 
                "i am h1 tag"
            ),
            React.createElement("h2", 
                {id:"heading"}, 
                "i am h2 tag"
            )
            ]
        )
    ]
)

// jsx

// const heading = React.createElement(
//     'h1', 
//     {id:"heading"}, 
//     'Hello world from react'
// );

console.log(parent);// object

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);