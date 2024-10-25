const Todo = require('../models/todo');
exports.getTodos = async (req,res,next)=>{
try {
    const todos = await Todo.find();
    res.status(200).json({message:'Fetched sucessfully',todos});
} catch (err) {
    next(err);
}
}

exports.getTodo=async (req,res,next) => {
    
    const todoId = req.params.id;    
    try {
        const todo = await Todo.findById(todoId);
        if(!todo){
            const error = new Error("Could not find todo");
            error.statusCode = 404;
            throw error;
        }
    res.status(200).json({message:'Fetched todo with id send successfully',todo})
} catch (err) {
    next(err)
}   
}


exports.createTodo=async(req,res,next)=>{
    
    const title = req.body.title;
    const description = req.body.description;
    const completed =req.body.completed;
    
    try {
        const todo = new Todo({title:title,description:description,completed:completed});
        const result = await todo.save();
        res.status(201).json({message:'created successfully' , todo:result})
    } catch (err) {
        next(err)
    }
}

exports.updateTodo = async(req,res,next)=>{
    const todoId = req.params.id;
    const updatedTitle=req.body.title ;
    const updatedDescription = req.body.description;
    const updatedCompleted = req.body.completed;

    try {
        const UpdatedTodo = await Todo.findById(todoId);
        if (!UpdatedTodo) {
            const error = new Error("Could not find todo");
            error.statusCode = 404;
            throw error;
        }
        UpdatedTodo.title = updatedTitle;
        UpdatedTodo.description = updatedDescription;
        UpdatedTodo.completed = updatedCompleted;
        const result = await UpdatedTodo.save();
        res.status(200).json({message:'updated successfully',todo:result})
    } catch (error) {
        next(error)
    }
}



exports.deleteTodo = async(req,res,next)=>{
    const todoId = req.params.id;
    try {
        const result = await Todo.findByIdAndDelete(todoId);
        if(!result){
            const error = new Error("Could not find todo");
            error.statusCode = 404;
            throw error;
        } 
        res.status(200).json({message:'Deleted successfully'});
    } catch (error) {
        next(error);
    }
}

