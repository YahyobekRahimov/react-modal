import { useEffect } from "react";
import "./Modal.css";
import CloseIcon from "/src/assets/close.svg?react";

export default function Modal({ setOpen, open }) {
   function closeOnEscape(e) {
      if (e.key === "Escape") {
         setOpen(false);
      }
   }

   useEffect(() => {
      if (open) {
         document.addEventListener("keyup", closeOnEscape);
      } else {
         document.removeEventListener("keyup", closeOnEscape);
      }
   }, [open]);

   function handleModalClick(e) {
      e.stopPropagation();
   }
   return (
      <div
         className={`modal-wrapper ${open ? "index" : ""}`}
         onClick={() => setOpen(false)}
      >
         <div className={`modal ${open ? "fade" : ""}`}>
            <div
               onClick={handleModalClick}
               className={`modal-content ${open ? "index-more" : ""}`}
            >
               Click escape or the close button on top or Click
               anything but the modal to close the modal
               <button onClick={() => setOpen(false)}>
                  {<CloseIcon />}
               </button>
            </div>
         </div>
      </div>
   );
}
