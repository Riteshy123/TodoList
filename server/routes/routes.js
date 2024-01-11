const router = require("express").Router();
// Models
const Todo = require('../models/Todo');






router.post('/todos', async (req, res) => {
	      const x= req.body.userId
			 const todos = await  Todo.find({userId:x });
			res.json(todos);
          
       
	

	
});

router.post('/todo/new', async (req, res) => {
try{const todo =  await new Todo({
	userId: req.body.userId,
		text: req.body.text })

	const xyz =   await todo.save();

	res.json(xyz);}

	catch (error) {
		console.error("Something bad in new add");
		console.error(error);
		res.send(error);
	  }
});

router.delete('/todo/delete/:id', async (req, res) => {
	try{const result = await Todo.findByIdAndDelete(req.params.id);

	res.json({result});}
	catch (error) {
		console.error("Something bad in delete");
		console.error(error);
		res.send(error);
	  }
});

router.get('/todo/complete/:id', async (req, res) => {
	try{const todo = await Todo.findById(req.params.id);
	(todo!=null)
	{todo.complete = !todo.complete;}
	
	

	await todo.save();

	res.json(todo);}
	catch (error) {
		console.error("Something bad hrouterened");
		console.error(error);
		res.send(error);
	  }
})

router.put('/todo/update/:id', async (req, res) => {
	const todo = await Todo.findById(req.params.id);

	todo.text = req.body.text;

	 const fprdo = await todo.save();

	res.json(fpr);
});


module.exports =router;