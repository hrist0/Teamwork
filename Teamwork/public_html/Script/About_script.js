$(document).ready(function(){
   
    $('#hristo_a').on('click', function(){
        $('#team_image').css('background-image', 'url(images/hristo_a.jpg)');
        $('#team_image').css('background-size', '400px 300px');
        $('#team_image').css('background-repeat', 'no-repeat');
        $('#team_image').css('background-position-x', '-40px');
        $('#team_image').css('background-position-y', '-20px');
    });
    $('#hristo_v').on('click', function(){
        $('#team_image').css('background-image', 'url(images/hristo_v.png)');
        $('#team_image').css('background-size', '250px 250px');
        $('#team_image').css('background-repeat', 'no-repeat');
        $('#team_image').css('background-position-x', '25px');
        $('#team_image').css('background-position-y', '0px');
    });
    $('#nikolay').on('click', function(){
        $('#team_image').css('background-image', 'url(images/nikolay.png)');
        $('#team_image').css('background-size', 'contain');
        $('#team_image').css('background-repeat', 'no-repeat');
        $('#team_image').css('background-position-x', '80px');
        $('#team_image').css('background-position-y', '0px');
    });
        $('#daniel').on('click', function(){
        $('#team_image').css('background-image', 'url(images/daniel.png)');
        $('#team_image').css('background-size', '200px 200px');
        $('#team_image').css('background-repeat', 'no-repeat');
        $('#team_image').css('background-position-x', '40px');
        $('#team_image').css('background-position-y', '20px');
    });
        $('#elena').on('click', function(){
        $('#team_image').css('background-image', 'url(images/elena.png)');
        $('#team_image').css('background-size', '200px 200px');
        $('#team_image').css('background-repeat', 'no-repeat');
        $('#team_image').css('background-position-x', '60px');
        $('#team_image').css('background-position-y', '20px');
    });
        $('#vyara').on('click', function(){
        $('#team_image').css('background-image', 'url(images/vyara.jpg)');
        $('#team_image').css('background-size', '200px 200px');
        $('#team_image').css('background-repeat', 'no-repeat');
        $('#team_image').css('background-position-x', '60px');
        $('#team_image').css('background-position-y', '20px');
    });
});