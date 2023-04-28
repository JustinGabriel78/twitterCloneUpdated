const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    postContent:{
        type: String
    },
    likeCount:{
        type:Number
    },
    commentCount:{
        type:Number
    },
    userId:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }],
    name : {
        type:String,
        required:true
    },
    image:{
        data: Buffer,
        contentType: String 
    }


})

postSchema.statics.postCreate = async function(postContent, name,data,contentType) {
    const post = await this.create({postContent, name,image:{data,contentType}})
    return post 
}

const Post = mongoose.model('Post',postSchema);

module.exports = Post;