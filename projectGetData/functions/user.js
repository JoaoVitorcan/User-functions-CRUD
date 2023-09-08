function createUser(users, user) {
    if (!users) {
        return "Data does not exist"
    }
    if (!Array.isArray(users)) {
        return "Array does not exist"
    }
    

    const { name, email, password } = user;
    if (!name) {
        return "Name does not exist"
    }
    if (!email) {
        return "Email does not exist"
    }
    if (!password) {
        return "Password does not exist"
    }


    const newId = users.length + 1
    const newUser = {
        id: newId,
        ...user
    }
    users.push(newUser)
    return newUser
}

function updateUser(users, id, userUpdate) {
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if (element.id === id) {
            return users[index] = {
                id,
                ...userUpdate
            }

        }

    }
    return "No user with this id found"
}

function deleteById(users, id) {
    const newUsers = []
    for (let index = 0; index < users.length; index++) {
        const element = users[index];

        if (element.id !== id) {
            newUsers.push(element)
        }
    }
    users.length = 0
    users.push = [...newUsers]
    return 'user removed'
}


module.exports = { createUser, updateUser, deleteById }