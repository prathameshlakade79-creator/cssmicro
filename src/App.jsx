// React Notes App with iPhone-style glassmorphism UI
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load notes from localStorage when app starts
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addOrUpdateNote = () => {
    if (noteTitle.trim() === "" || noteContent.trim() === "") return;

    if (editIndex !== null) {
      // Update existing note
      const updatedNotes = notes.map((n, i) =>
        i === editIndex ? { title: noteTitle, content: noteContent } : n
      );
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      // Add new note
      setNotes([...notes, { title: noteTitle, content: noteContent }]);
    }

    setNoteTitle("");
    setNoteContent("");
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  const startEdit = (index) => {
    setNoteTitle(notes[index].title);
    setNoteContent(notes[index].content);
    setEditIndex(index);
  };

  return (
    <div className="App">
      <h1>My Notes</h1>
      <div className="input-area">
        <input
          type="text"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          placeholder="Enter file name..."
        />
        <textarea
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          placeholder="Enter note content..."
        />
        <button onClick={addOrUpdateNote}>
          {editIndex !== null ? "Update Note" : "Add Note"}
        </button>
      </div>


      {/* Notes Table */}
      <h2>Notes Table</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>File Name</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((n, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{n.title}</td>
              <td>{n.content}</td>
              <td>
                <button onClick={() => startEdit(index)}>Edit</button>
                <button className="deleteBtn" onClick={() => deleteNote(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
