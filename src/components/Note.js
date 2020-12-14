import '../App.css';

const Note = ({title,text}) => {
  return (
    <div className="note-container">
      <div className="note-title">{title}</div>
      <div className="note-text">{text}</div>
    </div>
  )
}

export default Note;