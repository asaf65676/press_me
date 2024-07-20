function pop_up_comments(clicks) {
    let retrievedArrayString = localStorage.getItem("score_tablesort_fixed_button");
    let retrievedArray = JSON.parse(retrievedArrayString);
    let userName = " "
    
    // הודעות קופצות למסך
    if (retrievedArray[0].number < clicks) {
        userName = prompt("כל הכבוד !!! שברת שיא חדש");
    }
    else if (retrievedArray[4].number > clicks) {
        alert("מספר הלחיצות נמוך, לא נורא, נסה שנית");
    }
    else {
        for (let i = 1; i < retrievedArray.length; i++) {

            if (retrievedArray[i].number < clicks) {
                userName = prompt("הגעת מקום " + (i + 1));
                break;
            }
        }
    }
    array_score_tablesort_sort(clicks, userName);
}
