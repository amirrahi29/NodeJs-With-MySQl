const pool = require('../db/index');

const getBlogs=async(req,res)=>{
    try {
        const [rows,fileds] = await pool.query("select * from blogs");
        res.status(200).send({success:true, msg: 'All blogs', data: rows});
    } catch (error) {
        res.status(400).send({success:false,msg: error.message});
    }
}

const getSingleBlog=async(req,res)=>{
    try {
        const {blog_id} = req.params;
        const [rows,fileds] = await pool.query("select * from blogs where blog_id = ?",[blog_id]);
        res.status(200).send({success:true, msg: 'Blog details', data: rows});
    } catch (error) {
        res.status(400).send({success:false,msg: error.message});
    }
}

const addBlog = async(req,res)=>{
    try {
        const {blog_title,blog_desc,blog_date} = req.body;
        const sql = "insert into blogs(blog_title,blog_desc,blog_date) values(?, ?, ?)";
        const [row,fileds] = await pool.query(sql,[blog_title,blog_desc,blog_date]);
        res.status(200).send({success:true, msg: 'Blog added successfully.', data: row});
    } catch (error) {
        res.status(400).send({success:false,msg: error.message});
    }
}

const updateBlog = async(req,res)=>{
    try {
        const {blog_id} = req.params;
        const {blog_title,blog_desc,blog_date} = req.body;
        const sql = "update blogs set blog_title = ?, blog_desc = ?, blog_date = ? where blog_id = ?";
        const [row,fileds] = await pool.query(sql,[blog_title,blog_desc,blog_date,blog_id]);
        res.status(200).send({success:true, msg: 'Blog updated successfully.', data: row});
    } catch (error) {
        res.status(400).send({success:false,msg: error.message});
    }
}

const deleteBlog = async(req,res)=>{
    try {
        const {blog_id} = req.params;
        const sql = "delete from blogs where blog_id = ?";
        const [row,fileds] = await pool.query(sql,[blog_id]);
        res.status(200).send({success:true, msg: 'Blog deleted successfully.', data: row});
    } catch (error) {
        res.status(400).send({success:false,msg: error.message});
    }
}

module.exports = {
    getBlogs,
    getSingleBlog,
    addBlog,
    updateBlog,
    deleteBlog
}
