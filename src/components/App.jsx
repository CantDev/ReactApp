import React from 'react';


//let App = (props) => {
//   let element = <h1>{props.words}</h1>;
//   return element;
//}

class App extends React.Component {
    constructor(props) {
        super(props)
    
           
    }
    render() {return <h1>{this.props.words}</h1> }
 
}


export default App