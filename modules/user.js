const userList = [
    {id: Date.now(), name: 'Name1', surname: 'Surname1'}
]

function User (name, surname) {
    this.name = name;
    this.surname = surname;
}

User.prototype.addNewUser = function() {
    let newUser = {
        id: Date.now(),
        name: this.name,
        surname: this.surname
    }
    return [...userList, newUser]
}

export {User};