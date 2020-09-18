import React, { useState } from 'react';
import { Link } from "react-router-dom";
const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="container p-3 rounded-sm" style={{ width: '40%', marginTop: '150px' ,backgroundColor:'white',color:'#4285F4'}}>
        <center><h3 className="font-weight-bold mb-4">Join</h3></center>
            <form>
                <div class="form-group">
                    <label for="exampleInputText1">Name</label>
                    <input type="text" className="form-control" id="exampleInputText1" onChange={(e) => setName(e.target.value)} />

                </div>
                <div class="form-group">
                    <label for="exampleInputText2">Room</label>
                    <input type="text" class="form-control" id="exampleInputText2" onChange={(e) => setRoom(e.target.value)} />
                </div>
                <Link onClick={(e) => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button type="submit" class="btn btn-primary">Sign In</button>
                </Link>
            </form>
        </div>
    )
}
export default Join