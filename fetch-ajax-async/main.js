// use jsonplaceholder. with api
// use axios, fetch

const fetch = require('node-fetch');
const axios = require('axios').default;

async function asyncFetch() {
    try {
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => console.log(data));
    } catch (e) {
        console.log(e.message);
    }
}

async function asyncAxios(id) {
    try {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/users', {
            params: {
                id
            }
        })
        console.log(responce.data)
    } catch (e) {
        console.log(e.message);
    }
}

// asyncFetch();
// asyncAxios(1);