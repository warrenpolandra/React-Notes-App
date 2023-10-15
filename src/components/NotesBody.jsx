import React from 'react'
import NotesInput from './NotesInput';
import NoteList from './NoteList';

function NotesBody({ notes, onAddNote, onDelete, onArchive, searchQuery }) {
    return (
        <div className="note-app__body">
            <NotesInput addNote={onAddNote}/>
            <h2>Active Notes</h2>
            {
                notes.filter(note => note.archived === false).length > 0 ? 
                    <NoteList notes={notes.filter(note => note.archived === false && note.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))} onDelete={onDelete} onArchive={onArchive}/>
                 : <p className='notes-list__empty-message'>There are no Active Notes</p>
            }
            <h2>Archived Notes</h2>
            {
                notes.filter(note => note.archived === true).length > 0 ? 
                    <NoteList notes={notes.filter(note => note.archived === true && note.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))} onDelete={onDelete} onArchive={onArchive}/>
                : <p className='notes-list__empty-message'>There are no Archived Notes</p>
            }
        </div>
    );
}

export default NotesBody;