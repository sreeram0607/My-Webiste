// JavaScript for modal popups
const cards = document.querySelectorAll('.card');
const modal = document.getElementById('director-modal');
const closeBtn = document.querySelector('.close');

// Open modal on card click
cards.forEach(card => {
    card.addEventListener('click', function() {
        modal.style.display = 'block';
        document.querySelector('.modal-content').innerHTML = `
            <h2>Director Profile</h2>
            <p>More information about the director will be displayed here.</p>
        `;
        centerModal();
    });
});

// Close modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal if clicked outside the modal
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Function to center the modal on the screen
function centerModal() {
    const modalContent = document.querySelector('.modal-content');
    const modalWidth = modalContent.offsetWidth;
    const modalHeight = modalContent.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const left = (windowWidth - modalWidth) / 2;
    const top = (windowHeight - modalHeight) / 2;

    modalContent.style.position = 'fixed';
    modalContent.style.left = `${left}px`;
    modalContent.style.top = `${top}px`;
}

// Call centerModal when window is resized to ensure modal stays centered
window.onresize = centerModal;
