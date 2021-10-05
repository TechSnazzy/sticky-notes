/*
Declare some things.
*/
const notesContainer = document.getElementById('app');
const addNoteButton = notesContainer.querySelector('.add-note');

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
function createNoteElement(id, content) {}

/*
Adding a new note not only to the HTML but
also saving it to the local storage of the client browser.
*/
function addNote() {}

/*
This will update your note instead of adding a new one.
*/
function updateNote(id, newContent) {}

/*
Delete a note.
*/
function deleteNote(id, element) {}
