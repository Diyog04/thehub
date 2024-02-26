const blogModel = require("../models/blog");

async function createBlog(data){
    try{
        const newBlog = await blogModel.create(data);
        return newBlog;
    }catch(error){
        throw error;
    }
}

async function getAllBlog(){
    try{
        return await blogModel.find();
    }catch(error){
        throw error;
    }
}

async function getById(id){
    try{
        return await blogModel.findById();
    }catch(error){
        throw error;
    }
}

async function update(id, data){
    try{
        return await blogModel.findByIdAndUpdate(id, data, {new: true});
    }catch(error){
        throw error;
    }
}

async function deleteBlog(id){
    try{
        return await blogModel.findByIdAndDelete(id);
    }catch(error){
        throw error;
    }
}




module.exports = { createBlog, getAllBlog, getById, update, deleteBlog };