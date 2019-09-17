$(function(){
    the_game= function () {
        
    
if (check_baloon_hits_ground(baloon1)|| (check_baloon_hits_bin(baloon1))) {
    set_baloon_to_initial_position(baloon1);
    
} else {
    baloon_fall(baloon1);
}

if (check_baloon_hits_ground(baloon2)|| (check_baloon_hits_bin(baloon2))) {
    set_baloon_to_initial_position(baloon2);
    
} else {
    baloon_fall(baloon2);
}

if (check_baloon_hits_ground(baloon3)|| (check_baloon_hits_bin(baloon3))) {
    set_baloon_to_initial_position(baloon3);
    
} else {
    baloon_fall(baloon3);
}

if (check_baloon_hits_ground(baloon4)|| (check_baloon_hits_bin(baloon4))) {
    set_baloon_to_initial_position(baloon4);
    
} else {
    baloon_fall(baloon4);
}

if (check_baloon_hits_ground(baloon5)|| (check_baloon_hits_bin(baloon5))) {
    set_baloon_to_initial_position(baloon5);
    
} else {
    baloon_fall(baloon5);
}

if (life > 0) {
            anim_id = requestAnimationFrame(the_game);
        } else {

            stop_the_game();
        }
    };
    anim_id = requestAnimationFrame(the_game);
});