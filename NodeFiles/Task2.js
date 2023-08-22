const express = require('express');

const app = express();

// app.use(express.json());
// app.use(express.urlencoded());
app.use(express.json());

let posts = [
    {id:100,
    name:"Darshan"}
];

app.post('/api',(req,res)=>{
 const data = req.body
 posts.push(data);
 res.json(data)
})

app.get('/api',(req,res)=>{
    res.json(posts)
})

// app.put(`/api/posts/:id`,(req,res)=>{
//     const post = posts.find(g => g.id === parseInt(req.params.id));
//     if (!post) return res.status(404).send('The game with the given ID was not found.');
   

//     res.json(post)
// })
app.put('/api/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = req.body;

    posts = posts.map(item => (item.id === id ? { ...item, ...data } : item));

    res.json(data);
});

app.delete('/api/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    posts = posts.filter(item=>(item.id!==id));
    res.send("Item deleted successfully");
})

// app.get('/number',(req,res)=>{
//     res.send("This is about page")
// });

// app.post('/number',(req,res)=>{
//     res.send("This is the post of the number")
// })




app.listen(3000,()=>{
    console.log('running')
});