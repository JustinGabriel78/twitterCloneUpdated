const upload = require('../middlewares/postMiddleware');
const Post = require('../models/postModels')


const post = async(req,res) => {

    upload(req,res,async (error) =>{
        const {postContent, name} = req.body;
        const data = req.file.filename;
        const contentType = "image/png";
        if(error) {
            res.status(400).json({data: null, message: error.message, sucess: false})
        } else {
            const postText = await Post.postCreate(postContent,name,data,contentType)
            res.status(200).json({data: postText,message: "post created", sucess: true})
        }
    })
}

module.exports = {
    post
}

    // try {
    //    const postText = await Post.postCreate(postContent)
    //    res.status(200).json({data: postText,message: "post created", sucess: true})
    // } catch (error){
    //     res.status(400).json({data: null, message: error.message, sucess: false})
    // }