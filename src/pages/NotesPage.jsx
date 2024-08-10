import { mockData as notes } from '../assets/mockData.js'
import NoteCard from "../components/NoteCard"

const NotesPage = () => {

  return (
    <div>
      {notes.map(note => (
        <NoteCard key={note.$id} note={note} />
      ))}
    </div>
  )
}

export default NotesPage