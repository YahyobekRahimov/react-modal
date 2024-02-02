import "./Modal.css";
import CloseIcon from "/src/assets/close.svg?react";

export default function Modal({ setOpen, open }) {
   function handleModalClick(e) {
      e.stopPropagation();
      console.log("clicked");
   }
   return (
      <div
         className={`modal-wrapper ${open ? "index" : ""}`}
         onClick={() => setOpen(false)}
      >
         <div className={`modal ${open ? "fade" : ""}`}>
            <div
               className={`modal-content`}
               onClick={handleModalClick}
            >
               Lorem ipsum dolor sit amet consectetur adipisicing
               elit. Aperiam, voluptates natus cupiditate quaerat
               cumque minus alias dignissimos distinctio at aut.
               <button>{<CloseIcon />}</button>
            </div>
         </div>
      </div>
   );
}
