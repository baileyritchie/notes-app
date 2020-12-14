import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import NoteForm from './NoteForm';
import Note from './Note';

const element = <FontAwesomeIcon icon={faPlusCircle} />

class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notes: [{title: 'Hi There',text: 'This is some text'},{title: 'Second Title',text: 'Moreeeee text'}],
            formStatus: 'inactive'
        }
    }
    addNote = (note) => {
        // this function adds a new note, and will be passed as a prop to NoteForm for use
        //console.log(note);
        this.setState({notes: [...this.state.notes,note]});
        //console.log(this.state);
    }
    changeFormStatus = () => {
        this.state.formStatus === 'inactive' ? this.setState({...this.state,formStatus:'active'}) : this.setState({...this.state,formStatus:'inactive'});
    }
    render(){
        return (
            <div className="dashboard-container">
                <h1 className="header"> Notes App</h1>
                <span className="add-note" onClick={this.changeFormStatus}>{element}</span>
                <div className="notes-container">
                    {this.state.notes.map((note,index) => <Note title={note.title} text={note.text} key={index}/>)}
                </div>
                <NoteForm addNote={this.addNote} formStatus={this.state.formStatus}/>
            </div>
        );
    };  
}


export default Dashboard;