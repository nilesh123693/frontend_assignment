import React from "react";
import './App.css';
import Child from './child.js';
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            show: false
            
        };
    }
   

    componentDidMount() {
        fetch(
"https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                });
            })
    }
    render() {
        const {items } = this.state;
        

        return (
            <>
             <button onClick = {() =>this.setState({show:true})} > click to display </button>
              {
                 this.state.show && <Child userdata = {items} />
             }
           </>
    );
}
}

export default App;
