const users = [];

const addUsers = ({ id, name, room }) => {
    //triming whitespaces and converting into lower Case
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const isExisting = users.find(user => user.name === name && user.room === room)
    console.log(isExisting)
    if (isExisting)
        return { error: 'User already exists' }
    const user = { id, name, room }
    users.push(user);
    return { user }
}
const removeUser = () => {

}
const getUser = () => {

}

const getUserInRoom = () => {

}

module.exports = { addUsers, removeUser, getUser, getUserInRoom };