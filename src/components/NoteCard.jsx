/* eslint-disable react/prop-types */

const NoteCard = ({ note }) => {
    const body = JSON.parse(note.body);
    const position = JSON.parse(note.position);
    const colors = JSON.parse(note.colors);
    return (
        <div className='card' style={{ backgroundColor: colors.colorBody }}>
            <div className="note-header" style={{ backgroundColor: colors.colorHeader }}></div>
            <div className="note-body">
                <textarea style={{ color: colors.colorText }} defaultValue={body}></textarea>
            </div>
        </div>
    )
}

export default NoteCard