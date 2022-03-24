//Style
$(".slider-img").css({
    "border": "4px solid green",
    "border-radius": "20px"
});


// Slider on JQuery framework
$(document).ready(function() {
    let position = 0;
    const slidesToShow = 8;
    const slidesToScroll = 2;
    const container = $('.slider-container');
    const track = $('.slider-track');
    const item = $('.slider-item');
    const btnPrev = $('.btn-prev');
    const btnNext = $('.btn-next');
    const itemsCount = item.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnPrev.click(function () {
        const itemsLeft = Math.abs(position) / itemWidth;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkButtons();
    });

    btnNext.click(function () {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkButtons();
    });

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });
    };

    const checkButtons = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop(
            'disabled',
            position <= -(itemsCount - slidesToShow) * itemWidth
        );
    };

    checkButtons();
});


//marqueeline
// function animate(id) {
//     var node = document.getElementById(id).childNodes[0];
//     var text = node.data;
//     setInterval(function() {
//         text = text.substring(1) + text[0];
//         node.data = text;
//     }, 125);
// }
// window.addEventListener('load', function(e) { animate('line'); }, false);