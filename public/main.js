var bars = document.getElementById("toggleBar");
bars.addEventListener("click", function () {
  var sd = document.getElementById("sm-sidebar");
  var mainbd = document.getElementById("main-bd");
  // sd.classList.remove("sm-sidebar");
  var classList = sd.classList;
  console.log(classList.contains("sm-sidebar"));
  if (classList.contains("sm-sidebar")) {
    mainbd.style.width = "calc(100% - 20em)";
    sd.classList.remove("sm-sidebar");
  } else {
    mainbd.style.width = "100%";
    sd.classList.add("sm-sidebar");
  }
  // console.log(classList[1]);
});
