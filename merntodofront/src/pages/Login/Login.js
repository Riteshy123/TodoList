import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Login = (props) => {

    const [blur, setblur] = useState("noblur")
    const [loading, setloading] = useState("noloader")

    
  
    const history = useNavigate();
    const [ user, setUser] = useState({
        email:"",
        password:""
    })

   

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
   
    const login = () => {
        setblur("blur");
		setloading("loader");
        axios.post("http://localhost:3001/todo/login", user)
        .then(res => {
            alert(res.data.message)
            setblur("noblur");
            setloading("noloader");
            if(typeof(res.data.userId)!="undefined" )
          {  localStorage.setItem("user_login", res.data.userId)
          localStorage.setItem("user_name", res.data.name)
          props.setLoginUser(res.data.userId)
          history("/")}
            props.setname(res.data.name)
        //   console.log(res.data.name);
          
        })
    }

    return (
        <>
        <div className={blur}>
        <div className={loading}></div>
        </div>
		
        <div className="container">
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div style={{color:"black"}}> or </div>
            <div style={{color:"black"}}>  Create an account <span className="xyz"  onClick={() => history("/register")}> Register </span></div>
        </div>
        </div>
        </>
    )
}

export default Login