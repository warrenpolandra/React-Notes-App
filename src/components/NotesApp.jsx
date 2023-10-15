import React from "react";
import Navbar from "./Navbar";
import NotesBody from "./NotesBody";
import { getInitialData } from '../utils/index';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            searchQuery: ''
        }
        
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this)
    }

    onAddNoteHandler({ title, body }) {
        this.setState((previousState) =>{
            return {
                notes: [
                    ...previousState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: +new Date(),
                        archived: false
                    }
                ]
            };
        });
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes })
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map((note) => {
            if (note.id === id) {
                return {...note, archived: !note.archived}
            }
            return note;
        });

        this.setState({ notes });
    }

    onSearchNoteHandler({ newQuery }) {
        this.setState(() => {
            return {
                searchQuery: newQuery
            };
        });
    }

    render() {
        return(
            <div className="note-app">
                <Navbar searchNote={this.onSearchNoteHandler}/>
                <NotesBody onAddNote={this.onAddNoteHandler} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} notes={this.state.notes} searchQuery={this.state.searchQuery}/>
            </div>
        )
    }
}

export default NotesApp;