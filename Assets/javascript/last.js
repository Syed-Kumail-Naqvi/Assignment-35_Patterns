var userValue = prompt("Enter Value of Number of Rows");
var pattern = "<center>"

// Forward

// For Printing Number of Rows
for (i = 1 ; i <= userValue ; i++){

    // For Printing Spaces
    for (j = userValue ; j > i ; j--){
        pattern += "";
    }
    
    // For Printing Asteriks 
    for(k = 0 ; k < i * 2 - 1 ; k++){
        pattern +="*";
    }
    pattern += "<br />" 
}

// Reverse

// For Print Number of Rows
for (i = 0 ; i <= userValue ; i++){

    // For Printing Spaces
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

document.write("<br />" , pattern);