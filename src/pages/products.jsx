import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function products() {
  const state = useState(0)

  let number = state[0]
  let alterNumber = state[1]

  console.log(state)
  
  function increase() {
    alterNumber(number + 1)
  }

    return(
        <div>
            <Header title= "Products"> 
            <div>{number}</div>
            <button onClick={increase}>increase</button>            
            </Header>
            <Footer />
        </div>
             
        
    )
}