function darkmode() { // function to run when darkmode button is pressed

    
    
    var element = document.getElementsByTagName('*'); // select root of the document
    
    for (var i = 0; i < element.length; ++i) {
        element[i].classList.toggle("darkmode"); } // toggles class "darkmode" on all elements

    var d = document.getElementsByClassName("darkmode"); // code for darkmode transition

    for( i = 0; i < d.length; i++) {
        d[i].style.transition = "all 0.25s"; // all elements with darkmode class, transition = 0.25s
    }

    var f = document.getElementsByTagName("img");

    for( i = 0; i < d.length; i++) {
        f[i].style.transition = "1.5s"; // all elements with image class, transition = 1.5s
    }



}