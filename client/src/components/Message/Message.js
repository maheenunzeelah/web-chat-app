import React from 'react';

const Message=({message:{user,text},name})=>{
  let trimmedName=name.trim().toLowerCase();
  let isSentByCurrentUser;
  if(trimmedName===user){
    isSentByCurrentUser=true;
  }
  return(
      isSentByCurrentUser
      ?(
          <div>
          <div style={{left:'65%', position:'relative',backgroundColor:'blue', padding:'5px',width:'30%', marginTop:'5px'}}>

          <div style={{color:'white'}}>{text}
         
          </div>  
          <br />   
          </div>
          <p>{trimmedName}</p>
          </div>
      ):
      (
          <div>
          <div style={{left:'5% ', position:'relative',backgroundColor:'gray' ,padding:'5px',width:'30%' ,marginTop:'5px'}}>
          

          <div style={{color:'white'}}>{text}
         
          </div>
        
          </div>
          <p >{user}</p>
          </div>
          
      )

  )

}

export default Message;