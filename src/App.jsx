import './App.css'
import { useEffect, useState } from 'react';

function LifecycleExample() {
  useEffect(() => {
    console.log("Opened");
  }, []);

  return <div>Showing</div>;
}

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? <LifecycleExample /> : null}
      <button onClick={() => setOpen(!open)}>Show</button>
    </>
  );
}

export default App;