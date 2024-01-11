import { useEffect, useState } from 'react';
import Add from '../../Components/Add';
import  './home.css'
import Popup from '../../Components/Popup';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
const api_base = 'http://localhost:3001';

function Home(props) {
	const [todos, setTodos] = useState([]);
	const [popupActive, setPopupActive] = useState(false);
	const [newTodo, setNewTodo] = useState("");
const [values, setvalues] = useState(false);

const [blur, setblur] = useState("noblur")
    const [loading, setloading] = useState("noloader")


	useEffect(() => {
		GetTodos();
	}, []);
	const history = useNavigate();
	
	const GetTodos = async () => { 
		
	try{
	const response = await fetch(api_base + '/todos' ,{
		method: "POST",
		headers: {
			"Content-Type": "application/json" 
		},
		body: JSON.stringify({
			userId: localStorage.getItem("user_login")
		})
	});
				const movies = await response.json();
			     
				//  console.log(JSON.stringify({userId: props.user}))
				 setTodos(movies);}

				 catch(err){
                            // console.log(err);
				 }
			  
	}

	const completeTodo = async id => {
		const data = await fetch(api_base + '/todo/complete/' + id).then(res => res.json());

		setTodos(todos => todos.map(todo => {
			if (todo._id === data._id) {
				todo.complete = data.complete;
			}

			return todo;
		}));
		
	}

	const addTodo = async () => {
	
		setblur("blur");
		setloading("loader");
		 if(newTodo)
		{const data = await fetch(api_base + "/todo/new", {
			method: "POST",
			headers: {
				"Content-Type": "application/json" 
			},
		
			body: JSON.stringify({
				userId: localStorage.getItem("user_login"),
				text: newTodo
			})
		
		}
		).then(res => res.json());

		setTodos([...todos, data]);
		setblur("noblur");
		setloading("noloader")

		setPopupActive(false);
		setNewTodo(""); 
		setvalues(false);}
		else{
			setvalues(true);
			setblur("noblur");
		setloading("noloader")
		}
		
	}

	const deleteTodo = async id => {
		setblur("blur");
		setloading("loader");
		const data = await fetch(api_base + '/todo/delete/' + id, { method: "DELETE" }).then(res => res.json()
		);
		setblur("noblur");
		setloading("noloader");
		setTodos(todos => todos.filter(todo => todo._id !== data.result._id));
	}

	const shoot = (e) => {
	
		setNewTodo(e.target.value);
		setvalues(false);
	
	  }
	
	  const [click, setClick] = useState(false);
  const [close, setclose] = useState("on");

  const handleClick = () => {setClick(!click);
    if(close=="on")
   setclose("off")
   else 
   setclose("on")
  }



	return (
		<>
		

		<Navbar click={click} setClick={setClick} handleClick={handleClick} name={props.name}/>
		<div className={close} >
		
			
			<div className=" col-md-6 offset-md-3"> 	<h4>Your tasks</h4></div>
		 

			<div className="todos col-md-6 offset-md-3">
			<Add  deleteTodo={deleteTodo}  completeTodo={completeTodo} todos={todos} />
			</div>
			{localStorage.getItem("user_login")?
			(<div className="addPopup" onClick={() => setPopupActive(true)}>+</div>) :""}

			
			<Popup  shoot={shoot}  popupActive={popupActive} addTodo={addTodo}  setPopupActive={setPopupActive}  newTodo={newTodo}  values={values}/>
			<div className={blur}>
        <div className={loading}></div>
        </div>
		</div>
		</>
		
	);
}

export default Home;
