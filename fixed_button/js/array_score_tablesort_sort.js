function array_score_tablesort_sort(maxClicks, userName) {
    let retrievedArrayString = localStorage.getItem("score_tablesort_fixed_button");
    let retrievedArray = JSON.parse(retrievedArrayString);
  
    var data = {number: maxClicks, name: userName};
  
    retrievedArray.push(data);
    retrievedArray.sort((a, b) => b.number - a.number);
    retrievedArray = retrievedArray.slice(0, 5);
  
    localStorage.setItem("score_tablesort_fixed_button", JSON.stringify(retrievedArray));
  
    display_score_table();
  }
  