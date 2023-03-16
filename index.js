const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

require('dotenv').config();

const PORT = process.env.PORT || 5000;

//routes
const blogRouter = require('./routers/BlogRouter');
app.use("/api",blogRouter);

app.listen(PORT,()=>{
    console.log(`program running.....................on ${PORT}`);
});