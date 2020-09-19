import React from 'react';
import ReactEmoji from 'react-emoji';
const Message=({message:{user,text},name})=>{
  let trimmedName=name.trim().toLowerCase();
  let isSentByCurrentUser;
  if(trimmedName===user){
    isSentByCurrentUser=true;
  }
  return(
      isSentByCurrentUser
      ?(
          <div style={{marginBottom:'6%'}}>
          <div style={{left:'65%', position:'relative',height:'40px', backgroundColor:'blue', padding:'8px',width:'30%'}}>

          <div  style={{color:'white' }}>
          {ReactEmoji.emojify(text)}
          </div>  
          <br />   
          </div>
          <p className="float-right " >{trimmedName}</p>
          </div>
      ):
      (
          <div>
          <div style={{left:'5% ', position:'relative',backgroundColor:'gray' ,padding:'8px',width:'30%' ,marginTop:'6px'}}>
          

          <div style={{color:'white'}}>
           {ReactEmoji.emojify(text)}
          </div>
        
          </div>
          <p >{user}</p>
          </div>
          
      )

  )

}

export default Message;