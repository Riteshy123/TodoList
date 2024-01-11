import React from 'react';
import Homepage from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
const App = () => {

  const [ user, setLoginUser] = useState("")
  const [ name, setname] = useState("")

  
	return <div>

<Router>
        <Routes>
          {/* { localStorage.getItem("user_login") ? */}
          < Route  exact path="/"
            element= {
              <Homepage user={user}  name={name} />
            }
          />
        
      
		  <Route path="login" element={<Login setLoginUser={setLoginUser} setname={setname}  />} />
		  <Route path="register" element={<Register/>} />
        </Routes>

      </Router>
     
	</div>;
}


export default App;