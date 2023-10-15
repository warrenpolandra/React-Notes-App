import React from 'react'

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ''
    }

    this.onSearchQueryChangeHandler = this.onSearchQueryChangeHandler.bind(this);
  }

  onSearchQueryChangeHandler(e) {
    this.setState({ searchQuery: e.target.value }, () => {
      return this.props.searchNote({ newQuery: this.state.searchQuery });
    });
  }

  render() {
    return (
      <nav className='note-app__header'>
          <h1>Notes App</h1>
          <div className="note-search">
            <input type="text" placeholder='Search notes...' value={this.state.searchQuery} onChange={this.onSearchQueryChangeHandler}/>
          </div>
      </nav>
    )
  }
}

export default Navbar;