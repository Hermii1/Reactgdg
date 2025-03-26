import React, { useState } from 'react';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const addNote = () => {
        if (editIndex !== null) {
            const updatedNotes = notes.map((n, index) => (index === editIndex ? note : n));
            setNotes(updatedNotes);
            setEditIndex(null);
        } else {
            setNotes([...notes, note]);
        }
        setNote('');
    };

    const deleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
    };

    const editNote = (index) => {
        setNote(notes[index]);
        setEditIndex(index);
    };

    return (
        <div>
            <h1>Notes</h1>
            <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Enter a note"
            />
            <button onClick={addNote}>{editIndex !== null ? 'Update Note' : 'Add Note'}</button>
            <ul>
                {notes.map((n, index) => (
                    <li key={index}>
                        {n}
                        <button onClick={() => editNote(index)}>Edit</button>
                        <button onClick={() => deleteNote(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notes;