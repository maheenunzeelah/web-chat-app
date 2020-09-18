const express=require('express');
const http=require('http');
const socketIO=require('socket.io');
const router=require('./router')
const {addUsers,getUser,getUserInRoom,removeUser}=require('./users')

const PORT=process.env.PORT || 5000
const app=express();
const server=http.createServer(app)
const io=socketIO(server);

//When any user connects

io.on('connection',(socket)=>{
    console.log('User connected');

    // Will wait for event `join` from client
    socket.on('join',({name,room},callback)=>{
      const {error, user}=addUsers({id:socket.id,name,room})
       
      // if error that means user already exists in that room
      if(error) return callback(error) 
      
      //emitting message event from backend to the front end
      socket.emit('message',{user:'admin',text:`${user.name} has joined room ${user.room}`})

      //will tell everyone accept the user that has joined about his joining
      socket.broadcast.to(user.room).emit('message',{user:'admin', text:`${user.name} has joined`})
      socket.join(user.room)
      callback()
    })

    socket.on('sendMessage',(message,callback)=>{
        const user=getUser(socket.id)
        console.log(user)
        if(!user) return 
        io.to(user.room).emit('message',{user:user.name, text:message})
        callback();
    })
    //when user disconnects
    socket.on('disconnect',()=>{
        console.log('User has left')
    })
})
app.use(router)
server.listen(PORT,()=>console.log(`Server running on port ${PORT}`));