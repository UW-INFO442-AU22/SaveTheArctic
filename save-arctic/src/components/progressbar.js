import { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { getAuth } from "firebase/auth";

function Bar() {
  const [myPoint, setMyPoint] = useState([]);
  let user = getAuth().currentUser;

  const now = 60;

  return (
    <div class='container'>
      <ProgressBar now={now} label={`${now}%`} />
      <p id="pointNotification">points to your next free donation!</p>
      <p>{user.email}</p>
    </div>
  );
}

export default Bar;