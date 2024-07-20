function pop_up_comments(maxClicks) {
    let retrievedArrayString = localStorage.getItem("score_tablesort_fixed_button");
    let retrievedArray = JSON.parse(retrievedArrayString);
    let userName = " "
    
    // הודעות קופצות למסך
    if (retrievedArray[0].number < maxClicks) {
        userName = prompt("כל הכבוד !!! שברת שיא חדש");
    }
    else if (retrievedArray[4].number > maxClicks) {
        alert("מספר הלחיצות נמוך, לא נורא, נסה שנית");
    }
    else {
        for (let i = 1; i < retrievedArray.length; i++) {

            if (retrievedArray[i].number < maxClicks) {
                userName = prompt("הגעת מקום " + (i + 1));
                break;
            }
        }
    }
    array_score_tablesort_sort(maxClicks, userName);
}
