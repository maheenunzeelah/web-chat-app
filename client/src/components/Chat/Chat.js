import React, { useState, useEffect } from 'react';
import querystring from 'querystring';
import io from 'socket.io-client';

let socket;
const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const endpoint = 'localhost:5000'
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
         return ()=>{
             socket.emit('disconnect')
             socket.off(); //close this instance of socket
         }   
        })
    }, [endpoint, location.search])  // only when either endpoint or params in urls changes
    return (
        <div>

        </div>
    )
}
export default Chat;