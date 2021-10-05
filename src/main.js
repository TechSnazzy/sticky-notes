/*
Declare some things.
*/
const notesContainer = document.getElementById('app');
const addNoteButton = notesContainer.querySelector('.add-note');

getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener('click', () => addNote());

/*
Get all the existing notes
from the local storage of the client browser.
*/
function getNotes() {
  return JSON.parse(localStorage.getItem('stickynotes-notes') || '[]');
}

/*
This will take in an array of notes
and will save the local notes in the
storage of the clients browser.
*/
function saveNotes(notes) {
  localStorage.setItem('stickynotes-notes', JSON.stringify(notes));
}

/*
Build a new element to represent a note element.
The element is an html element.
*/
function createNoteElement(id, content) {
  const element = document.createElement('textarea');

  element.classList.add('note');
  element.value = content;
  element.placeholder = 'Empty Sticky Note';

  element.addEventListener('change', () => {
    updateNote(id, element.value);
  });

  element.addEventListener('dblclick', () => {
    const doDelete = confirm(
      'Are you sure you wish to delete this sticky note?'
    );

    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}

/*
Adding a new note not only to the HTML but
also saving it to the local storage of the client browser.
*/
function addNote() {
  const notes = getNotes();
  const noteObject = {
    id: Math.floor(Math.random() * 100000),
    content: '',
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  notesContainer.insertBefore(noteElement, addNoteButton);

  notes.push(noteObject);
  saveNotes(notes);
}

/*
This will update your note instead of adding a new one.
*/
function updateNote(id, newContent) {
  console.log('Updating Note...');
  console.log(id, newContent);
}

/*
Delete a note.
*/
function deleteNote(id, element) {
  console.log('Deleting Note...');
  console.log(id);
}
