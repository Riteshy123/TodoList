import React from 'react';
import tick from './tick.png'
import { useState } from 'react';



const Add = (props) => {

	

    return <div>
		
{localStorage.getItem("user_login")?
 	(<>{props.todos.length > 0 ? props.todos.map(todo => (
					<div className={
						"todo" + (todo.complete ? " is-complete" : "")
					} key={todo._id} onClick={()=>props.completeTodo(todo._id)}>
						
                        
                {      todo.complete ?    (<span > <img  style={{ marginLeft:"1vh", marginRight:"2vh",
                            width:"30px" , height:"30px"}} src={tick}></img></span>)  :

                            (<div className="checkbox"></div>) }

						<div className="text">{todo.text}  </div>
						<div className='bell'>
						{todo.complete ? "":(<i className="fa fa-bell fa-flip"></i>)}
						</div>
						<div className="delete-todo" onClick={()=>props.deleteTodo(todo._id)}>
					
							x</div>
					</div>
				)) : (
					<p>You currently have no tasks</p>
				)}</>)
				:(<p>Login to see  your tasks</p>)
				}


    </div>;
}



export default Add;
