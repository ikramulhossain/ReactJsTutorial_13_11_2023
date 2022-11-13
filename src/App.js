import React from 'react'
import Card from "./component/Card"

function App()
{

  return  <div>
        <h1 className='handalingStyle'>Todo app</h1>
        <Card todo_app="Call Mother" todo_des="This is Description One of the Most Helpfull"/>
        <Card todo_app="Call Father" todo_des="This is Description One of the Most Helpfull"/>
        <Card todo_app="Call Sister" todo_des="This is Description One of the Most Helpfull"/>
        <Card todo_app="Call Brather" todo_des="This is Description One of the Most Helpfull"/>

    </div>

}

export default App;
