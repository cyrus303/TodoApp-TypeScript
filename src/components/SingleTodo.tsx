import React, {useState} from 'react';
import {FiCheck, FiDelete, FiEdit3} from 'react-icons/fi';

interface Note {
  id: number;
  noteText: string;
  status: boolean;
  editable: boolean;
}

interface Props {
  notes: Note[];
  handleStatus: (id: number) => void;
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
  setNotes: () => void;
}

const SingleTodo: React.FC<Props> = ({
  notes,
  handleStatus,
  handleDelete,
  handleEdit,
  setNotes,
}) => {
  const [editText, setEditText] = useState();

  const handleEditText = (event: any, id: number, setNotes: any) => {
    setEditText(event.target.value);
  };

  return (
    <div className="note-container">
      {notes.map((note) => {
        return (
          <div className="note" key={note.id}>
            {note.status === false ? (
              note.editable ? (
                <input
                  type="text"
                  value={editText}
                  id="note-input"
                  onChange={(event) => {
                    handleEditText(event, note.id, setNotes);
                  }}
                />
              ) : (
                note.noteText
              )
            ) : (
              <span
                style={{
                  textDecoration: 'line-through',
                  color: '#444',
                }}
              >
                {note.noteText}
              </span>
            )}
            <div className="icons">
              <button
                className="icon-btn"
                onClick={() => {
                  handleEdit(note.id);
                }}
              >
                <FiEdit3 />
              </button>
              <button
                className="icon-btn"
                onClick={() => {
                  handleStatus(note.id);
                }}
              >
                <FiCheck />
              </button>
              <button
                className="icon-btn"
                onClick={() => {
                  handleDelete(note.id);
                }}
              >
                <FiDelete />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleTodo;
