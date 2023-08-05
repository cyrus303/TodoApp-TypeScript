import React from 'react';
import {FiCheck, FiDelete, FiEdit3} from 'react-icons/fi';

interface Note {
  id: number;
  noteText: string;
}

interface Props {
  notes: Note[];
  handleStatus: (id: number) => void;
}

const SingleTodo: React.FC<Props> = ({notes, handleStatus}) => {
  const handleTick = (id: number) => {
    handleStatus(id);
  };
  console.log('inside todo ' + notes);
  return (
    <div className="note-container">
      {notes.map((note) => {
        console.log('inside map' + note);
        return (
          <div className="note" key={note.id}>
            {note.noteText}
            <div className="icons">
              <button className="icon-btn">
                <FiEdit3 />
              </button>
              <button
                className="icon-btn"
                onClick={() => {
                  handleTick(note.id);
                }}
              >
                <FiCheck />
              </button>
              <button className="icon-btn">
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
