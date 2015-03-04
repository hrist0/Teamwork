
$(document).ready(function () {
    var count = 0;
    var videos = ["https://www.youtube.com/embed/GofPvMpQ5cQ",
        "https://www.youtube.com/embed/txQEmxcjBL0",
        "https://www.youtube.com/embed/wTI4_yXEJuo",
        "https://www.youtube.com/embed/CJOU_riuZ-4",
        "https://www.youtube.com/embed/MZrdrfdAl44",
        "https://www.youtube.com/embed/Z_S2uRjLZ14",
        "https://www.youtube.com/embed/SZTilaH_Rhc"];

    //on click (Предишно Видео) activate function to go video frames step by step by the user
    $('#left_slide').on('click', function () {
        if (count >= videos.length) {
            count = 0;
        }
        $('#frame').attr('src', videos[count]);
        count++;
    });

    //on click (Следващо Видео) activate function to go video frames step by step by the user
    $('#right_slide').on('click', function () {
        if (count < 0) {
            count = parseInt(videos.length - 1);
        }
        $('#frame').attr('src', videos[count]);
         count--;
    });
    $('#exit').on('mouseover', function () {
        $('#exit').css('background-color', 'darkred');
        $('#exit').css('color', 'white');
    });
    $('#exit').on('mouseleave', function () {
        $('#exit').css('background-color', '#ff9c00');
        $('#exit').css('color', 'black');
    });
    $('#exit').on('click', function () {
        $('#full_image').css('display', 'none');
    });
    $('.funny_images div:nth-child(3)').on('click', function () {
        $('#full_image').css('display', 'inline-block');
        $('#full_image').css('background-image', 'url(images/Programmer01.jpg)');
        $('#full_image').css('width', '700px');
        $('#full_image').css('height', '600px');
        $('#full_image').css('background-size', '700px 600px');
    });
    $('.funny_images div:nth-child(4)').on('click', function () {
        $('#full_image').css('display', 'inline-block');
        $('#full_image').css('background-image', 'url(images/Programmer02.jpg)');
        $('#full_image').css('width', '700px');
        $('#full_image').css('height', '600px');
        $('#full_image').css('background-size', '700px 600px');
    });
    $('.funny_images div:nth-child(5)').on('click', function () {
        $('#full_image').css('display', 'inline-block');
        $('#full_image').css('background-image', 'url(images/Programmer03.jpg)');
        $('#full_image').css('width', '700px');
        $('#full_image').css('height', '600px');
        $('#full_image').css('background-size', '700px 600px');
    });
    $('.funny_images div:nth-child(6)').on('click', function () {
        $('#full_image').css('display', 'inline-block');
        $('#full_image').css('background-image', 'url(images/Programmer04.jpg)');
        $('#full_image').css('width', '700px');
        $('#full_image').css('height', '600px');
        $('#full_image').css('background-size', '700px 600px');
    });
    $('.funny_images div:nth-child(7)').on('click', function () {
        $('#full_image').css('display', 'inline-block');
        $('#full_image').css('background-image', 'url(images/Programmer05.jpg)');
        $('#full_image').css('width', '700px');
        $('#full_image').css('height', '600px');
        $('#full_image').css('background-size', '700px 600px');
    });
    $('.funny_images div:nth-child(8)').on('click', function () {
        $('#full_image').css('display', 'inline-block');
        $('#full_image').css('background-image', 'url(images/Programmer09.png)');
        $('#full_image').css('width', '700px');
        $('#full_image').css('height', '600px');
        $('#full_image').css('background-size', '700px 600px');
    });
    $('.funny_images div:nth-child(9)').on('click', function () {
        $('#full_image').css('display', 'inline-block');
        $('#full_image').css('background-image', 'url(images/Programmer06.png)');
        $('#full_image').css('width', '700px');
        $('#full_image').css('height', '600px');
        $('#full_image').css('background-size', '700px 600px');
    });
    $('.funny_images div:nth-child(10)').on('click', function () {
        $('#full_image').css('display', 'inline-block');
        $('#full_image').css('background-image', 'url(images/Programmer07.png)');
        $('#full_image').css('width', '700px');
        $('#full_image').css('height', '600px');
        $('#full_image').css('background-size', '700px 600px');
    });
    $('.funny_images div:nth-child(11)').on('click', function () {
        $('#full_image').css('display', 'inline-block');
        $('#full_image').css('background-image', 'url(images/Programmer08.png)');
        $('#full_image').css('width', '700px');
        $('#full_image').css('height', '600px');
        $('#full_image').css('background-size', '700px 600px');
    });
    $('.funny_images div:nth-child(12)').on('click', function () {
        $('#full_image').css('display', 'inline-block');
        $('#full_image').css('background-image', 'url(images/Programmer10.jpg)');
        $('#full_image').css('width', '700px');
        $('#full_image').css('height', '600px');
        $('#full_image').css('background-size', '700px 600px');
    });
    $('.funny_images div:nth-child(13)').on('click', function () {
        $('#full_image').css('display', 'inline-block');
        $('#full_image').css('background-image', 'url(images/Programmer11.jpg)');
        $('#full_image').css('width', '700px');
        $('#full_image').css('height', '600px');
        $('#full_image').css('background-size', '700px 600px');
    });
    $('.funny_images div:nth-child(14)').on('click', function () {
        $('#full_image').css('display', 'inline-block');
        $('#full_image').css('background-image', 'url(images/Programmer12.jpg)');
        $('#full_image').css('width', '700px');
        $('#full_image').css('height', '600px');
        $('#full_image').css('background-size', '700px 600px');
    });
    var counter = 0;
    var images = [
        'url(images/Programmer01.jpg)',
        'url(images/Programmer02.jpg)',
        'url(images/Programmer03.jpg)',
        'url(images/Programmer04.jpg)',
        'url(images/Programmer05.jpg)',
        'url(images/Programmer06.png)',
        'url(images/Programmer07.png)',
        'url(images/Programmer08.png)',
        'url(images/Programmer09.png)',
        'url(images/Programmer10.jpg)',
        'url(images/Programmer11.jpg)',
        'url(images/Programmer12.jpg)'
    ];

    $('#prev').on('click', function () {
        counter++;
        if (counter > images.length - 1) {
            counter = 0;
        }
        $('#full_image').css('background-image', images[counter]);

    });

    $('#next').on('click', function () {
        counter--;
        if (counter < 0) {
            counter = images.length - 1;
        }
        $('#full_image').css('background-image', images[counter]);

    });
});