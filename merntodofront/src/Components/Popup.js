import React from 'react';

const Popup = (props) => {
    return <div>

{props.popupActive ? (
				<div className="popup">
					<div className="closePopup" onClick={() => props.setPopupActive(false)}>X</div>
					<div className="content">
						<h3>Add Task </h3>
						<input type="text" className="add-todo-input" onChange={props.shoot} value={props.newTodo}   />

                         { props.values ?
						(<div className="content">
						<p style={{marginTop:"5px" ,color:"red" }}>Please Enter Valid Task</p>
						 </div>)	
						:( 	"")}
					
								<div className="button" onClick={props.addTodo}>Create Task</div>
					</div>
				</div>
			) : ''}
    </div>;
}



export default Popup;