import React from 'react';
import {Link} from 'react-router-dom'
const InfoBar=({room})=>(
    
      <div className="row" style={{backgroundColor:'#33b5e5', marginTop:'120px'}}>
      <div className="col-md-2">
      <i className="fa fa-circle"></i>
      </div>
      <div className="col-md-9">
       {room}
      </div>
      <div className="col-md-1">
       <a href="/" style={{textDecoration:"none"}}> <i className="fa fa-times"></i></a>
      </div>
      </div>
    
)
export default InfoBar