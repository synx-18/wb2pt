function darkmode() { // function to run when darkmode button is pressed

    
    var element = document.querySelectorAll(':root, html, nav'); // select root of the document
    var el2 = document.querySelectorAll("div.cu, div.members"); // select Divs Specifically
    
    for (var i = 0; i < element.length; ++i) {
        element[i].classList.toggle("darkmode"); } // toggles class "darkmode" on all elements

    for (var i = 0; i < el2.length; ++i) {
        el2[i].classList.toggle("darkmode"); // toggles class "darkmode" on all elements

}

var d = document.getElementsByClassName("darkmode"); // code for darkmode transition

    for( i = 0; i < d.length; i++) {
        d[i].style.transition = "all 0.25s"; // all elements with darkmode class, transition = 0.25s
    }
}
