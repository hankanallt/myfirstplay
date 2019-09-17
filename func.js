$(document).on("mousemove", function(e){
bin.css("left", e.pageX);
});

function baloon_fall(egg) {

    baloon_current_position = parseInt(baloon.css('top'));

    baloon.css('top', baloon_current_position + speed);

}

function check__hits_ground(baloon) {

    if (collision(baloon, ground)) {

        show_splash(baloon);

        decrement_life();

        return true;

    }

    return false;

}

function set_baloon_to_initial_position(baloon) {

    baloon.css('top', baloon_initial_position);

}



function show_splash(baloon) {

    baloon_num = baloon.attr('data-baloon');

    $('#baloon' + baloon_num).show();

    hide_splash(splash_num);

}

function hide_splash(splash_num) {

    setTimeout(function () {

        $('#splash' + splash_num).hide();

    }, 600);

}



function decrement_life() {

    life--;

    life_span.text(life);

}



function check_baloon_hits_bin(baloon) {

    if (collision(baloon, bin)) {

        baloon_top = parseInt(baloon.css('top'));

        if (baloon_top < bin_top) {

            update_score();

            return true;

        }

    }

    return false;

}

function update_score() {

    score++;

    if (score % 10 === 0 && speed <= max_speed) {

        speed++;

    }

    score_span.text(score);

    score1.text(score);

}



function stop_the_game() {

    cancelAnimationFrame(anim_id);

    reset.slideDown();

}



reset.click(function () {

    location.reload();

});






