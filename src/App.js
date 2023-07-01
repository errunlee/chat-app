import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { useAuth } from './firebase';
import Chatroom from './pages/Chatroom';

function App() {
  const currentUser=useAuth();
  return (
    <>
    {currentUser?<Chatroom/>:<Login/>}
    </>
  );
}

export default App;
