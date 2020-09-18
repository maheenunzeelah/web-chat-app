import React from 'react';

const Input = ({ sendMessage, setMessage, message }) => (

    <form style={{ marginTop: '343px' }}>
        <input type="text" value={message}
            style={{ width: '80%', marginRight: '50px' }}
            placeholder="Type a message" 
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null} />
        <button type="submit" onClick={(e)=>sendMessage(e)}>Send</button>
    </form>

)

export default Input