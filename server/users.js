const users = [];

const addUsers = ({ id, name, room }) => {
    //triming whitespaces and converting into lower Case
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    //if same user tries to join the same room
    const isExisting = users.find(user => user.name === name && user.room === room)
    console.log(isExisting)

    if (isExisting)
        return { error: 'User already exists' }

    const user = { id, name, room }
    users.push(user);

    return { user }
}
const removeUser = (id) => {
      const index=users.findIndex((user)=>user.id===id)

      //if user exists
      if(index !== -1){
          users.splice(index,1)[0]
      }
}
const getUser = (id) => users.find(user=>user.id===id)

const getUserInRoom = (room) => users.filter(user=>user.room===room)

module.exports = { addUsers, removeUser, getUser, getUserInRoom };