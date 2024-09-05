const todoModel = require('../models/tracker/model')

const defaultController = async (req , res) =>{
    let data = await todoModel.find({});
    res.render('index',{todos:data});
}

const addTodoController = async(req , res) => {
    console.log(req.body);
    const data = {
        type: req.body.type,
        amount: req.body.amount,
        category: req.body.category,
        date: req.body.date,
        description: req.body.description
    }
    let todo = new todoModel(data);
    await todo.save();
    console.log("todo",todo);
    
    res.redirect('/');
}
const readTodoController =async (req , res) => {
    console.log("read page");
    let data =await todoModel.find({});
    res.redirect('/',{todos:data});
}
const editTodoController =async (req , res)=> {
    console.log("edit controller");
    const id = req.params.id;
    let data =await todoModel.findOne({_id:id});
    console.log('SingleRec',data);
    console.log("edit controller");
    res.render('edit',{data});
    
}
const updateTodoController =async (req , res) => {
    console.log("updatedRec",req.params.id);
    let updatedTodo = await todoModel.findByIdAndUpdate(req.params.id,req.body,{name:true})
    console.log("updated todo",updatedTodo);
    res.redirect('/');     
}
const deleteTodoController =async (req , res) => {
    console.log("delete controller");
    let DeletTodo = await todoModel.findByIdAndDelete(req.params.id);
    console.log("delet todo >>" , DeletTodo);
    res.redirect('/');
}
module.exports = {defaultController, addTodoController,editTodoController,updateTodoController,deleteTodoController,readTodoController};