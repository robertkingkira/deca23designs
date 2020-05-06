$(document).ready(function () {

    //More Modal
    $("#modalBtn").click(function () {
        $("#modalBg").addClass('bg-active');
    });
    $("#close-btn-more").click(function () {
        $("#modalBg").removeClass('bg-active');
    });
    $(".modal-close").click(function () {
        $("#modalBg").removeClass('bg-active');
    });

    //Price Modal
    $("#modalBtnPrice").click(function () {
        $("#modalBg2").addClass('bg-active-price');
    });

    $("#close-btn-price").click(function () {
        $("#modalBg2").removeClass('bg-active-price');
    });

    $(".modal-close2").click(function () {
        $("#modalBg2").removeClass('bg-active-price');
    });

    // Click outside to close Modals More and Price
    var modalA = document.getElementById('modalBg');
    var modalB = document.getElementById('modalBg2');
    window.onclick = function (event) {
        if (event.target == modalB) {
            modalB.style.display = "none";
        }
        if (event.target == modalA) {
            modalA.style.display = "none";
        }
    }
});
