function addDrawing() {
    const name = document.getElementById('name').value.trim();
    const author = document.getElementById('author').value.trim() || 'Anonyme';
    const description = document.getElementById('description').value;
    const fileInput = document.getElementById('fileInput');
    const errorMessage = document.getElementById('error-message');
    const nameError = document.getElementById('name-error');
    const gallery = document.getElementById('gallery');

    if (!fileInput.files.length) {
        errorMessage.style.display = 'block';
        return;
    }

    if (!name) {
        nameError.style.display = 'block';
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const imageSrc = event.target.result;

        const drawingDiv = document.createElement('div');
        drawingDiv.classList.add('drawing');
        drawingDiv.innerHTML = `
            <p><strong>${name}</strong> par ${author}</p>
            <img src="${imageSrc}" alt="${name}">
            <p>${description}</p>
        `;

        gallery.appendChild(drawingDiv);
        closePopup();
    };

    reader.readAsDataURL(file);
}