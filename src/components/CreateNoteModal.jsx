import React, { useState } from "react";
import notes from "../notes";
import Note from "./Note";

export default function CreateNoteModal(props) {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  function createNote() {
    let noteTitle = title;
    let noteContent = content;
    console.log(noteTitle, noteContent);
    notes.push({ key: notes.length + 1, title: noteTitle, content: noteContent });
    console.log(notes);
    console.log(notes[notes.length - 1].title);

    return !props.show ? null : (
      <div className="container-modal">
        <div className="modal-content">
          <p>close</p>
          <input className="note-input title" type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          <textarea className="note-input content" type="text" value={content} placeholder="Take a note.." onChange={(e) => setContent(e.target.value)} />
          {/* <button className="create-note" onClick={createNote}>
            Create Note
          </button> */}
        </div>
      </div>
    );
  }
}
