const express=require('express');
const http=require('http');
const socketIO=require('socket.io');
const router=require('./router')

const PORT=process.env.PORT || 5000
const app=express();
const server=http.createServer(app)
const io=socketIO(server);
io.on('connection',(socket)=>{
    console.log('User connected');

    socket.on('join',({name,room},callback)=>{
      console.log(name,room)
    //   let error=true;
    //   if(error){
    //       callback({error:'this is a error'})
    //   }
    })
    socket.on('disconnect',()=>{
        console.log('User has left')
    })
})
app.use(router)
server.listen(PORT,()=>console.log(`Server running on port ${PORT}`));