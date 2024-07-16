let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Fortress.jpg") {
    myImage.setAttribute("src", "images/Taka.jpg");
  } else {
    myImage.setAttribute("src", "images/Fortress.jpg");
  }
};
