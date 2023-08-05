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
}

const SingleTodo: React.FC<Props> = ({
  notes,
  handleStatus,
  handleDelete,
  handleEdit,
}) => {
  const [editText, setEditText] = useState<string>('second');

  const handleEditText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
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
                  onChange={handleEditText}
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
