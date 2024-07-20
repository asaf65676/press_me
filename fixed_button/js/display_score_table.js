function display_score_table() {
    let retrievedArrayString = localStorage.getItem("score_tablesort_fixed_button");
    let retrievedArray = JSON.parse(retrievedArrayString);

    let arrayContainer = document.getElementById("record_results");
    arrayContainer.innerHTML = "";

    // הצגת המערך למסך
    var count = 1;
    retrievedArray.forEach(function(element) {
        let listItem = document.createElement("div");
        listItem.className="listItem"
        listItem.textContent = element.number + " : " +element.name+ " - " +count;
        arrayContainer.appendChild(listItem);
        count = count+1;
    });
}

setInterval(display_score_table, 1000);
