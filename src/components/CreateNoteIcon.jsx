import React, { useState } from "react";
import CreateNoteModal from "./CreateNoteModal";

export default function CreateNoteIcon() {
  let [show, setShow] = useState(false);
  return (
    <div>
      <div onClick={() => setShow(!show)} className="create-noteIcon-container">
        <i className="fas fa-pen custom-fas-pen"></i>
      </div>

      {show && <CreateNoteModal show={show} />}
    </div>
  );
}
