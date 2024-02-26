const blogService = require("../services/blogService");

async function createBlog(req,res){
    const title = req.body.title;
        const content = req.body.content;
    try{
        const data = await blogService.createBlog({title, content})
        res.send(data);
    }catch(error){
        res.status(500).send({message: "error" + error})
    }
    
};


async function getAllBlog(req,res){

    try{
        const data = await blogService.getAllBlog()
        res.send(data);
    }catch(error){
        res.status(500).send({message: "error" + error})
    }

}

async function getById(req,res){
    const id = req.params.id;
    try{
        const data = await blogService.getById(id);
        res.send(data);
    }catch(error){
        res.status(500).send({message: "error" + error})
    }

}

async function update(req,res){
    const title = req.body.title;
    const content = req.body.content;
    const id = req.params.id
    try{
        const data = await blogService.update(id, {title, content});
        res.send(data);
    }catch(error){
        res.status(500).send({message: "error" + error})
    }

}

async function deleteBlog(req,res){
    const id = req.params.id;
    try{
        const data = await blogService.deleteBlog(id);
        res.send(data);
    }catch(error){
        res.status(500).send({message: "error" + error})
    }

}

module.exports = {createBlog, getAllBlog, getById, update, deleteBlog};
