const fs = require('fs');
const path = require('path');

const authenticate = (data) => {
    console.log('---data', data);
    return new Promise((resolve, reject) => {
        try{
        let users = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '/userData.json'), 'utf8')).users;
        console.log('----users', users);
        let user = users.find((u) => u.email === data.email && u.password === data.password);
        console.log('----ddd', user)
        if(user && user.id){
            user.password = "";
            resolve(user);
        }
        else reject(new Error({ message: 'User not find, username or password incorrect!'}));
        } catch(error){
            console.log('----err', error)
        }
    })
   
}

module.exports = {
    authenticate
}