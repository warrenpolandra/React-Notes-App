import React from 'react'

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            characterLeft: 50,
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    }

    onTitleChangeHandler(e) {
        const { value } = e.target;
        const charLeft = 50 - value.length;

        if (charLeft >= 0) {
            this.setState({
                title: value,
                characterLeft: charLeft
            });
        } 
    }

    onBodyChangeHandler(e) {
        this.setState(() => {
            return {
                body: e.target.value
            };
        });
    }

    onSubmitHandler(e) {
        e.preventDefault();
        this.setState(() => {
            return {
                title: '',
                body: '',
                characterLeft: 50
            };
        });
        this.props.addNote(this.state);
    }

    render() {
        return (
            <div className="note-input">
                <h2>Create a New Note</h2>
                <form onSubmit={this.onSubmitHandler}>
                <p className='note-input__title__char-limit'>Characters left: {this.state.characterLeft}</p>
                <input className='note-input__title' type="text" value={this.state.title} onChange={this.onTitleChangeHandler} required placeholder='Type your title here' />
                <textarea className='note-input__body' type="text" value={this.state.body} onChange={this.onBodyChangeHandler} required placeholder='Type your note here' cols="30" rows="10"></textarea>
                <button type='submit'>Create</button>
            </form>
            </div>
        );
    }
}

export default NotesInput;