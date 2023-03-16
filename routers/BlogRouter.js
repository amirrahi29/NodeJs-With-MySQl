const express = require('express');
const blog_router = express();

//body parser
const bodyParser = require('body-parser');
blog_router.use(bodyParser.json());
blog_router.use(bodyParser.urlencoded({urlencoded:true}));

//controller
const blogController = require("../controllers/BlogController");

//routes
blog_router.get('/blogs',blogController.getBlogs);
blog_router.get('/blogs/:blog_id',blogController.getSingleBlog);
blog_router.post('/addBlog',blogController.addBlog);
blog_router.post('/updateBlog/:blog_id',blogController.updateBlog);
blog_router.get('/deleteBlog/:blog_id',blogController.deleteBlog);

module.exports = blog_router;