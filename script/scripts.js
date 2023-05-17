document.addEventListener('DOMContentLoaded', function () {
    var accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(function (item) {
        var button = item.querySelector('.accordion-button');
        button.addEventListener('click', function () {
            item.classList.toggle('active');
        });
    });
});