import { useState } from "react";
import "./App.css";
import Modal from "./components/modal/Modal";

function App() {
   const [open, setOpen] = useState(false);
   return (
      <div>
         <button
            className="btn"
            onClick={() => setOpen((prev) => !prev)}
         >
            Open Modal
         </button>
         <Modal open={open} setOpen={setOpen} />
      </div>
   );
}

export default App;
