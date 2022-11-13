import React from 'react'
import Card from "./component/Card"
import data from "./Data.json"

function App() {

    let items=[];
    for (let x=0 ; x < data.length; x++){
        items.push(<Card todo_app = {data[x].Tittle} todo_des = {data[x].Description}/>)
    }




    return <div >
        <h1 className = 'handalingStyle' > Todo app </h1>
        {items}
        </div>

}

export default App;