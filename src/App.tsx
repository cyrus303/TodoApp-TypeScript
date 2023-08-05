import {KeyboardEventHandler, useState} from 'react';
import './App.css';
import SingleTodo from './components/SingleTodo';

function App() {
  interface note {
    id: number;
    noteText: string;
    status: boolean;
  }

  const [inputText, setInputText] = useState<string>('');
  const [notes, setNotes] = useState<note[]>([
    {
      id: 1,
      noteText: 'hello',
      status: true,
    },
    {
      id: 2,
      noteText: 'TS',
      status: false,
    },
    {
      id: 3,
      noteText: 'World',
      status: false,
    },
  ]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputText(e.target.value);
  };

  const handleBtnClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const re = /[a-zA-Z0-9!@#$%^&*()-_+=]/g;
    const found = re.test(inputText);
    if (!found) return;
    setInputText('');
    const len = notes.length;
    const newNote = {
      id: len + 1,
      noteText: inputText,
      status: false,
    };
    const newNotesContent = [...notes, newNote];
    setNotes(newNotesContent);
    console.log(notes);
  };

  const handleStatus = (id: number): void => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {...note, status: !note.status};
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const handleDelete = (id: number): void => {
    const updatedNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(updatedNotes);
  };

  return (
    <div id="body">
      <div className="container">
        <header>
          <h1>Todo App</h1>
        </header>
        <main>
          <div className="input-container">
            <input
              type="text"
              id="todoInput"
              placeholder="Add a new task"
              value={inputText}
              onChange={handleInputChange}
            />
            <button id="addButton" onClick={handleBtnClick}>
              Add
            </button>
          </div>
          <ul id="todoList"></ul>
        </main>
      </div>
      <SingleTodo
        notes={notes}
        handleStatus={handleStatus}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
