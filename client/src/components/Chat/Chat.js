import React, { useState, useEffect } from 'react';
import querystring from 'querystring';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';
import './Chat.css';

let socket;
const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users,setUsers]=useState('')
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const endpoint = 'https://vast-citadel-30861.herokuapp.com/';
    useEffect(() => {
        // getting query param and parsing them in object
        const { name, room } = querystring.parse(location.search.substring(1));

        //connecting to server
        socket = io(endpoint);
        setName(name);
        setRoom(room);

        //will call event listener at the server
        socket.emit('join', { name, room }, () => {

            //closing connection on unmounting 
            return () => {
                socket.emit('disconnect')
                socket.off(); //close this instance of socket
            }
        })
    }, [endpoint, location.search])  // only when either endpoint or params in urls changes

    const sendMessage=(e)=>{
      e.preventDefault();  
      if(message){
          socket.emit('sendMessage',message,()=>setMessage(''))
      }
    }
    useEffect(()=>{
      socket.on('message',(message)=>{
       setMessages([...messages,message])
      })
    //   socket.on("roomData", ({ users }) => {
    //     setUsers(users);
    //   });
    },[messages])

    console.log("message  "+message)
    console.log(messages)
    return (
        <div className="d-flex flex-column container chat mt-5 bg-white" style={{height:"520px", width:'500px'}}>
    
        
        <div >
        <InfoBar room={room} />
        </div>
        <div className="mt-3">
        <Messages messages={messages} name={name} />
        </div>
        <div className="mt-auto">
        <Input message={message} sendMessage={sendMessage} setMessage={setMessage}/>
        {/* <TextContainer users={users}/> */}
        </div>

        </div>
    )
}
export default Chat;