function button_play_fun(button_play, callback) {

    clearInterval(timer);
    
    // פתיחת קונטינר שמכיל דיו זמן ודיו כמות
    var container_div_10_s = document.createElement("div");
    container_div_10_s.className = "container_div_10_s";
    document.getElementById('container_right_r').appendChild(container_div_10_s);

    var div_count = document.createElement("div");
    div_count.className = "div_count";
    container_div_10_s.appendChild(div_count);

    var div_time_10_s = document.createElement("div");
    div_time_10_s.className = "div_time_10_s";
    container_div_10_s.appendChild(div_time_10_s);

    // מחשב את מספר הלחיצות שהמשתמש לוחץ, ומציג אותם על המסך
    var count = 0;
    div_count.textContent = "מספר הלחיצות : " + count;
    button_play.addEventListener("click",  () => {
        if (timeLeft > 0) {
            count++;
            div_count.textContent = "מספר הלחיצות : " + count;
        }
    });

    // ספירה לאחור 10 שניות, ומציג את הזמן שנשאר על המסך
    var clicks = 0;
    var timeLeft = 10;
    div_time_10_s.textContent = "הזמן שנשאר : " + timeLeft + " שניות";

    var timer = setInterval(function () {
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(timer);
            button_play.disabled = true;
            div_time_10_s.textContent = "!! הזמן נגמר";
            clicks = count;
        } else {
            div_time_10_s.textContent = "הזמן שנשאר: " + timeLeft + " שניות";
        }
    }, 1000);

    setTimeout(function () {
        callback(clicks);
    }, timeLeft * 1000);

}



