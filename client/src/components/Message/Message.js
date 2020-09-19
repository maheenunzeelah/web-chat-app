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
          <div style={{left:'65%', position:'relative', height:'30px', backgroundColor:'blue', padding:'8px',width:'30%', marginTop:'30px'}}>

          <div style={{color:'white'}}>{text}
         
          </div>  
          <br />   
          </div>
          <p className="float-right" style={{textAlign:'right'}}>{trimmedName}</p>
          </div>
      ):
      (
          <div>
          <div style={{left:'5% ', position:'relative',backgroundColor:'gray' ,padding:'8px',width:'30%' ,marginTop:'6px'}}>
          

          <div style={{color:'white'}}>{text}
         
          </div>
        
          </div>
          <p >{user}</p>
          </div>
          
      )

  )

}

export default Message;