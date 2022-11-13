

const todo_app="Call your family";
const todo_des="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam omnis consectetur temporibus totam consequuntur reiciendis suscipit ratione voluptates, tempore animi ad sit ea earum harum saepe consequatur voluptate ipsam? Exercitationem?";
const date=new Date();
const Ndate=date.getDate();
const month=date.getMonth();
const year=date.getFullYear();




function Card(props){
      const {todo_app,todo_des}=props;
      return  <div className='card'>
       <h3 className='cardTittle'>{todo_app}</h3>
        <p className='cardDesc'>{todo_des}</p>
        <p className='cardFooter' >{year+"/"+Ndate+"/"+month}</p>
       </div>


}

export default Card;