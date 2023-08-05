import React from 'react';
import {FiCheck, FiDelete, FiEdit3} from 'react-icons/fi';

interface Note {
  id: number;
  noteText: string;
  status: boolean;
  dueDate?: Date;
}

interface Props {
  notes: Note[];
  handleStatus: (id: number) => void;
  handleDelete: (id: number) => void;
}

const SingleTodo: React.FC<Props> = ({
  notes,
  handleStatus,
  handleDelete,
}) => {
  return (
    <div className="note-container">
      {notes.map((note) => {
        return (
          <div className="note" key={note.id}>
            {note.status === false ? (
              note.noteText + ' : due date - ' + note.dueDate
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
              <button className="icon-btn">
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
