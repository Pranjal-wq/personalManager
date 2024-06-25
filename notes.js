document.addEventListener('DOMContentLoaded', () => {
    const inputNote = document.querySelector('.textarea');
    const buttonAdd = document.querySelector('.buttoninput');
    const listNotes = document.querySelector('.notelist');

    function addNote() {
        const noteText = inputNote.value.trim();

        if (noteText === '') {
            alert('Please enter a note.');
            return;
        }

        const noteItem = document.createElement('div');
        noteItem.classList.add('noteitem');

        const note = document.createElement('p');
        note.classList.add('note');
        note.innerText = noteText;
        noteItem.appendChild(note);

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.classList.add("delete-button");
        noteItem.appendChild(deleteButton);

        listNotes.appendChild(noteItem);
        inputNote.value = '';

        deleteButton.addEventListener('click', () => {
            noteItem.remove();
        });
    }

    buttonAdd.addEventListener('click', addNote);
});
