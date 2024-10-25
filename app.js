const express = require('express');
const mongoose = require('mongoose');
const todosRouter = require('./routes/todos');
const app = express();
app.use(express.json());
app.use(todosRouter);
app.listen(3000,() => {
    console.log('Server is running on port 3000');
});


mongoose.connect("mongodb+srv://OmarAhmed:oa3wF3ea5WpncUM1@cluster1.6ywul.mongodb.net/todo")
.then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});;



