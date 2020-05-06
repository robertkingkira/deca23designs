var ctaMore = document.getElementById('modalBtn');
var modalBg = document.getElementById('modalBg');
var modalClose = document.getElementsByClassName('modal-close')[0];


// Listen for open click
ctaMore.addEventListener('click', openModal);

// Listen for close click
modalClose.addEventListener('click', closeModal);

// Outside Click
window.addEventListener('click', clickOutside);

// Function to open modal
function openModal() {
    modalBg.style.display = 'flex';
}

// function to close modal
function closeModal() {
    modalBg.style.display = 'none';
}

// function to close modal if outside click
function clickOutside(e) {
    if (e.target == modalBg) {
        modalBg.style.display = 'none';
    }
}

/* ctaMore.addEventListener('click', function () {
    modalBg.classList.add('modal-bg-active');
});

modalClose.addEventListener('click', function () {
    modalBg.classList.remove('modal-bg-active');
}); */
