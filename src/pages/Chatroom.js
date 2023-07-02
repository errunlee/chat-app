import React from 'react'
import { useAuth } from '../firebase'
import Chats from '../components/Chats';

const Chatroom = () => {
    const currentUser=useAuth();
    if(!currentUser){
        return;
    }
    document.title='KuraGaram | Chatroom'
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Chats/>
      </div>
    </div>
  )
}

export default Chatroom
