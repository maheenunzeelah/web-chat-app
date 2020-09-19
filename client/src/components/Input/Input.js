import React from 'react';

const Input = ({ sendMessage, setMessage, message }) => (

    <form  className="d-flex">
        <input type="text" value={message}
            style={{ marginRight: '50px' ,width:'400px'}}
            placeholder="Type a message" 
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null} />
        <button type="submit" onClick={(e)=>sendMessage(e)}>Send</button>
    </form>

)

export default Input