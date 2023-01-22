import React, { Component } from 'react'; 
// Accessing the props value using this.props
class Child extends Component {
  render() {
    return (
        <>
        <h1> child component </h1>
    	<table border  = "1"> 
         <tr>
             <th> id </th>
             <th> title </th>
             <th> body </th>
         </tr>
         {
         	this.props.userdata.map((data) =>
         	<tr>
             <th>{data.id}</th>
             <th>{data.title}</th>
             <th>{data.body}</th>
            </tr>
           )
         	
         }
       </table>
       </>
    );
  }
}
  
export default Child;