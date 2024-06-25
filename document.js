document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.querySelector('#fileInput');
    const buttonUpload = document.querySelector('.buttoninput');
    const listDocuments = document.querySelector('.documentlist');

    function uploadDocuments() {
        const files = fileInput.files;

        if (files.length === 0) {
            alert('Please select a document.');
            return;
        }

        Array.from(files).forEach(file => {
            const documentItem = document.createElement('li');
            documentItem.classList.add('documentitem');

            const documentName = document.createElement('p');
            documentName.classList.add('documentname');
            documentName.innerText = file.name;
            documentItem.appendChild(documentName);

            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
            deleteButton.classList.add("delete-button");
            documentItem.appendChild(deleteButton);

            listDocuments.appendChild(documentItem);

            deleteButton.addEventListener('click', () => {
                documentItem.remove();
            });
        });

        fileInput.value = '';
    }

    buttonUpload.addEventListener('click', uploadDocuments);
});
