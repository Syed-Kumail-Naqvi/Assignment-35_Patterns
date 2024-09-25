var userValue = prompt("Enter Value of Number of Rows:");
var pattern = "<center>";

// For Print Number of Rows
for (i = 0 ; i <= userValue ; i++){

    // For Spaces
    for (j = 0 ; j < i ; j++){
        pattern += "";
    }

    // For Printing Asteriks

            //   Yeh Formula islye likha kiyu No of Rows is Directly proportional to 2 * (No of Asteriks)
    for (k = 0 ; k < 2 * (userValue-i) - 1 ; k++){
        pattern += "*";
    }

    // For Printing In New Line
    pattern += "<br /> ";
}

document.write("<br />",pattern);