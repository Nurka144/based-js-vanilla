const posts = require('./posts.json');
const users = require('./users.json');

function userInfo(id) {

    const findUser =  users
        .map( i => {
            if(i.id == id) {
                return i
            }
        }).filter(e => e);
    
    const findUserPost = posts
        .map( el => {
            if(el.userId == findUser[0].id) {
                return el;
            }
        }).filter(e => e);
    
    const fullCountPost = findUserPost.reduce((res, el) => res += el.userId, 0);

}

userInfo(1);