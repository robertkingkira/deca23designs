// CARD 2 E-Commerce
var btnMore_Ecom = document.getElementById('btnMore-Card2');
var modalCard_Ecom = document.getElementsByClassName('moreDetails2-cards')[0];
var btnClose_Ecom = document.getElementsByClassName('cardClose2')[0];

// Listen for open click
btnMore_Ecom.addEventListener('click', openCard_Ecom);

// Listen for close click
btnClose_Ecom.addEventListener('click', closeCard_Ecom);

// Outside Click
window.addEventListener('click', clickOutsideCard_Ecom);

// Function to open modal
function openCard_Ecom() {
    modalCard_Ecom.style.display = 'flex';
}

// function to close modal
function closeCard_Ecom() {
    modalCard_Ecom.style.display = 'none';
}

// function to close modal if outside click
function clickOutsideCard_Ecom(e) {
    if (e.target == modalCard_Ecom) {
        modalCard_Ecom.style.display = 'none';
    }
}
