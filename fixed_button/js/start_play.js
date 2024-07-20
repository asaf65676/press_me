function Start_game() {
    document.getElementById("container_right_r").remove();

    var container_right_r = document.createElement("div");
    container_right_r.className = "container_right_r";
    container_right_r.id = "container_right_r";
    document.getElementById("container_right").appendChild(container_right_r);

    var button_play = document.getElementById("button_play");

    var div_time_3_s = document.createElement("div");
    div_time_3_s.className = "div_time_3_s";
    container_right_r.appendChild(div_time_3_s);

    // ספירה לאחור 3 שניות, ומציג את הזמן שנשאר על המסך
    var time_left = 3;
    div_time_3_s.textContent = time_left;
    var timer_3_s = setInterval(function () {
        time_left--;

        if (time_left <= 0) {
            clearInterval(timer_3_s);
            button_play_fun(button_play,
                function (maxClicks) {
                    pop_up_comments(maxClicks);
                });
            div_time_3_s.textContent = "!!! התחל";
        }
        else {
            div_time_3_s.textContent = time_left;
        }
    }, 1000);

    var div_button_play = document.createElement("div");
    div_button_play.className = "div_button_play";
    container_right_r.appendChild(div_button_play);

    var button_play = document.createElement("button");
    button_play.className = "button_play";
    button_play.innerHTML = "לחץ כאן";
    div_button_play.appendChild(button_play);
}