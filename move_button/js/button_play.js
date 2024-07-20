function button_play_fun(button_play, callback) {

    // פתיחת קונטינר שמכיל דיו זמן ודיו כמות
    var container_div_10_s = document.createElement("div");
    container_div_10_s.className = "container_div_10_s";
    document.getElementById('container_right_r').appendChild(container_div_10_s);

    var div_count_10_s = document.createElement("div");
    div_count_10_s.className = "div_count_10_s";
    container_div_10_s.appendChild(div_count_10_s);

    var div_time_10_s = document.createElement("div");
    div_time_10_s.className = "div_time_10_s";
    container_div_10_s.appendChild(div_time_10_s);

    // מחשב את מספר הלחיצות שהמשתמש לוחץ, ומציג אותם על המסך
    var container_right = document.getElementById("container_right");
    var count = 0;
    div_count_10_s.textContent = "מספר הלחיצות : " + count;
    button_play.addEventListener("click", function () {

        if (timeLeft > 0) {
            count++;
            div_count_10_s.textContent = "מספר הלחיצות : " + count;
        }

        var containerWidth = container_right.offsetWidth;
        var containerHeight = container_right.offsetHeight;
        
        var randomX = Math.floor(Math.random() * (containerWidth - button_play.offsetWidth));
        var randomY = Math.floor(Math.random() * (containerHeight - button_play.offsetHeight));
        
        button_play.style.left = randomX + 'px';
        button_play.style.top = randomY + 'px';
    });

    // ספירה לאחור 10 שניות, ומציג את הזמן שנשאר על המסך
    var maxClicks = 0;
    var timeLeft = 10;
    div_time_10_s.textContent = "הזמן שנשאר : " + timeLeft + " שניות";

    var timer = setInterval(function () {
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(timer);
            button_play.disabled = true;
            div_time_10_s.textContent = "!! הזמן נגמר";
            maxClicks = count;
        } else {
            div_time_10_s.textContent = "הזמן שנשאר: " + timeLeft + " שניות";
        }
    }, 1000);

    setTimeout(function () {
        callback(maxClicks);
    }, timeLeft * 1000);

}



