import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateNoteIcon from "./CreateNoteIcon";
// import CreateNoteModal from "./CreateNoteModal";

function App() {
  return (
    <div>
      <Header />
      {/* <Note title={notes[0].title} content={notes[0].content} /> */}
      <CreateNoteIcon />
      <div className="notes-container">
        {notes.map((note) => (
          <Note key={note.key} title={note.title} content={note.content} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
