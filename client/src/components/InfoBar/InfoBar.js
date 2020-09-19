import React from 'react';
import {Link} from 'react-router-dom';
import './InfoBar.css'
const InfoBar=({room})=>(
      
            <div className="infoBar">
              <div className="leftInnerContainer">
              <i className="fa fa-circle"></i>
                <h5 className="heading">{room}</h5>
              </div>
              <div className="rightInnerContainer">
              <a href="/"  className="link"> <i className="fa fa-times"></i></a>
              </div>
            </div>
   
      // <div className="row info" >
      // <div className="col-md-2 col-sm-2">
      // <i className="fa fa-circle"></i>
      // </div>
      // <div className="col-md-9 col-sm-9">
      //  {room}
      // </div>
      // <div className="col-md-1 col-sm-1">
      //  <a href="/"  className="link"> <i className="fa fa-times"></i></a>
      // </div>
      // </div>
    
)
export default InfoBar