function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") {
    c = "";
  }
  // Toggle the visibility of elements based on their class
  for (i = 0; i < x.length; i++) {
    if (c == "" || x[i].classList.contains(c)) {
      x[i].classList.add("show");
    } else {
      x[i].classList.remove("show");
    }
  }
}

// Add active class to the current control button (highlight it)
document.addEventListener("DOMContentLoaded", function() {
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      filterSelection(this.getAttribute("data-filter")); // Call filterSelection with the data-filter attribute of the button
    });
  }
  // Call filterSelection function with "all" parameter to show all elements by default
  filterSelection("all");
});
