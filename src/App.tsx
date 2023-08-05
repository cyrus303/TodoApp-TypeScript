import {useState} from 'react';
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
    let currentNote = notes.filter((note) => note.id === id);
    let currentNoteObj = currentNote[0];
    currentNoteObj = {
      ...currentNoteObj,
      status: !currentNoteObj.status,
    };
    const updatedStatus = {...notes, currentNoteObj};
    setNotes(updatedStatus);
    console.log(notes);
  };

  return (
    <body>
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
      <SingleTodo notes={notes} handleStatus={handleStatus} />
    </body>
  );
}

export default App;
