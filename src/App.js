import React from "react";
import "./styles.css";

var shoppingList=["milk","egg","bread","flowers"];
var shoppingList2=["bread","pakoda","tea","puff"];

export default function App() {
  return (
    <div className="App">
      <h1>Print my Shopping List</h1>
      <ul>{
        shoppingList.map(function (item){
          return <li>{item} </li>;
        })}
      

      </ul>
     <h2>Print new ShoppingList</h2>
     <ul>
       {
         shoppingList2.map(function(thing){
           return <li>{thing}</li>
         })
       }
     </ul>

     
      {/* <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
