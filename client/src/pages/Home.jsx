import React, {useCallback, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSocket } from '../context/SocketProvider';

const Homepage = () => {
  const [email, setEmail] = useState("");
  const [meet, setMeet] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();



  const handleSubmitForm = useCallback((e) => {
    e.preventDefault();
    socket.emit('meet:join', {email, meet});
  
  },
     [email, meet, socket]
) ;

const handleJoinRoom = useCallback(
  (data) => {
    const { email, meet } = data;
    navigate(`/meet/${meet}`);
  },
  [navigate]
);

useEffect(() => {
  socket.on("meet:join", handleJoinRoom);
  return () => {
    socket.off("meet:join", handleJoinRoom);
  };
}, [socket, handleJoinRoom]);

  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor='email'>Email ID</label>
        <input type="email"
         id="email" 
         value={email}
         onChange={(e) => setEmail(e.target.value)}  />
        <br />
        <label htmlFor="meet">Meet ID</label>
        <input type="meet" 
        id='meet ID'
        value={meet}
        onChange={(e) => setMeet(e.target.value)} />
         <br />
        <button>join</button>
      </form>
    </div>
  )
}

export default Homepage;