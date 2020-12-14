import React from 'react';
import '../App.css';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: 'Enter a title...', text: 'Enter your note description...', status: 'inactive'};
  }
  /*
  handleSubmit will:
    0. prevent default submit
    1. take current state and then send title and text data up to Dashboard 
    2. clear or reset the current data in the form
    3. toggle the class from 'active' to 'inactive' so the form is not visible 
  handleChanges will:
    1. keep track of any changes to text and title by modifying internal state
  */
  handleSubmit = (e) => {
    this.props.addNote(this.state);
    this.setState({title:'Enter a title...',text: 'Enter your note description...',status:'inactive'});
    e.preventDefault();
  }
  handleChange = (e) => {
    let note = e.target.value;
    this.setState({...this.state,[e.target.name]: note});
  }
  render() {
    return (
      <div className= {`form-container ${this.props.formStatus}`} >
        <h4>Add a New Note</h4>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-element">
            <input type="text" id="title" name="title" onChange={this.handleChange} value={this.state.title}></input>
          </div>
          <div className="form-element">
            <textarea rows="7" cols="40" name="text" id="text" onChange={this.handleChange} value={this.state.text}></textarea>
          </div>
          <button type="submit" className="form-button">Submit</button>
        </form>
    </div>
    );
  }
}


export default NoteForm;