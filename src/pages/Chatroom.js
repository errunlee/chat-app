import React from 'react'
import { useAuth } from '../firebase'
import Chats from '../components/Chats';

const Chatroom = () => {
    const currentUser=useAuth();
    if(!currentUser){
        return;
    }
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Chats/>
      </div>
    </div>
  )
}

export default Chatroom
