const fs = require('fs');
const path = require('path');

const getAllPosts = () => {
    return new Promise((resolve, reject) => {
        let posts = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '/post.json'), 'utf8')).posts;
        let users = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '/userData.json'), 'utf8')).users;
        posts.forEach((post) => {
            post.userDetails = users.find((u) => u.id === post.user);
        })
        if(posts && posts.length)
            resolve(posts);
        else reject(new Error({ message: 'User not find, username or password incorrect!'}));
    })
   
}

const addPost = (data) => {
    return new Promise((resolve, reject) => {
        let id = new Date().valueOf();
        let post = { id, ...data };
        console.log('----post', post);
        let postData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '/post.json'), 'utf8'));
        let users = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '/userData.json'), 'utf8')).users;
        postData.posts.push(post);
        fs.writeFileSync(path.join(__dirname, '..', '/post.json'), JSON.stringify(postData));
        post.userDetails = users.find((u) => u.id === post.user);
        resolve(post);
    })
   
}

module.exports = {
    getAllPosts,
    addPost
}