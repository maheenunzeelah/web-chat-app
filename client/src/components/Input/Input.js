import React from 'react';

const Input = ({ sendMessage, setMessage, message }) => (

    <form  className="d-flex">
        <input type="text" value={message} className="form-control"
            style={{ marginRight: '20px' , width:'400px'}}
            placeholder="Type a message" 
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null} />
        <button type="submit" className="btn btn-md btn-primary " onClick={(e)=>sendMessage(e)}>Send</button>
    </form>

)

export default Input