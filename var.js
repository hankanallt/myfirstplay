var bin = $('#bin'),
    container = $('#container'),
    bucket = $('.basket'),
    baloon = $('.baloon'),
    baloon1 = $('#baloon1'),
    baloon2 = $('#baloon2'),
    baloon3 = $('#baloon3'),
    baloon4 = $('#baloon4'),
    baloon5 = $('#baloon5'),
    reset = $('#reset'),
    score_span = $('#score'),
    score1 = $('#score1'),
    life_span = $('#life'),
    ground = $('#ground'),
    bin_height = bin.height(),
    container_height = container.height(),
    baloon_height = baloons.height(),
    baloon_initial_position = parseInt(baloons.css('top')),
    score = 0,
    life = 10,
    speed = 1,
    max_speed = 15,
    counter = 0,
    score_updated = false,
    the_game = 0,
    anim_id = 0,
    baloon_current_position = 0,
    baloon_top = 0,
    bin_top = container_height - bin_height,
    splash_num = 0;
    life_span.text(life);