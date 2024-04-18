document.addEventListener('DOMContentLoaded', function () {
    const addBtn = document.getElementById('addBtn');
    const main = document.getElementById('Notes');

    addBtn.addEventListener('click', function () {
        createNote();
    });

    function createNote() {
        // Create note element
        const note = document.createElement('div');
        note.classList.add('tool');

        // Create save and delete icons
        const saveIcon = document.createElement('i');
        saveIcon.classList.add('fas', 'fa-floppy-disk');
        saveIcon.addEventListener('click', function () {
            saveNote();
        });
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas', 'fa-trash');

        // Create textarea element
        const textarea = document.createElement('textarea');

        // Append icons and textarea to note
        note.appendChild(saveIcon);
        note.appendChild(deleteIcon);
        note.appendChild(textarea);

        // Append note to main
        main.appendChild(note);

        // Add event listener to delete note when trash icon is clicked
        deleteIcon.addEventListener('click', function () {
            main.removeChild(note);
        });
    }

    function saveNote() {
        const notes = document.querySelectorAll('.tool textarea');
        const notesContent = [];
        notes.forEach(function (note) {
            notesContent.push(note.value);
        });
        localStorage.setItem('notes', JSON.stringify(notesContent));
    }

    function loadNotes() {
        const storedNotes = JSON.parse(localStorage.getItem('notes'));
        if (storedNotes) {
            storedNotes.forEach(function (noteContent) {
                const note = document.createElement('div');
                note.classList.add('tool');

                const saveIcon = document.createElement('i');
                saveIcon.classList.add('fas', 'fa-floppy-disk');
                saveIcon.addEventListener('click', function () {
                    saveNote();
                });
                const deleteIcon = document.createElement('i');
                deleteIcon.classList.add('fas', 'fa-trash');

                const textarea = document.createElement('textarea');
                textarea.value = noteContent;

                note.appendChild(saveIcon);
                note.appendChild(deleteIcon);
                note.appendChild(textarea);

                main.appendChild(note);

                deleteIcon.addEventListener('click', function () {
                    main.removeChild(note);
                });
            });
        }
    }

    // Load notes when the page loads
    loadNotes();
});
