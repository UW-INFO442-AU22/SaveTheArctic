import ProgressBar from 'react-bootstrap/ProgressBar';

function Bar() {
  const now = 60;
  return (
    <div class='container'>
      <ProgressBar now={now} label={`${now}%`} />
      <p id="pointNotification">points to your next free donation!</p>
    </div>
  );
}

export default Bar;