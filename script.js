// Opens and closes the demo gif for Project 1

// Get the modal
var modal = document.getElementById("myModal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImgP1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeP1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
////////////////////////////////////////////////////////

// Opens and closes the demo gif for Project 2

// Get the modal
var modal = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImgP2");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeP2")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

////////////////////////////////////////////////////////

// Opens and closes the demo gif for Project 3

// Get the modal
var modal = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImgP3");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeP3")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

////////////////////////////////////////////////////////

// Opens and closes the demo gif for Project 4

// Get the modal
var modal = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImgP4");
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeP4")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

//////////////////////////////////////////

function openNavP1() {
    document.getElementById("myNavP1").style.width = "100%";
}

function closeNavP1() {
    document.getElementById("myNavP1").style.width = "0%";
}

function openNavP2() {
    document.getElementById("myNavP2").style.width = "100%";
}

function closeNavP2() {
    document.getElementById("myNavP2").style.width = "0%";
}

function openNavP3() {
    document.getElementById("myNavP3").style.width = "100%";
}

function closeNavP3() {
    document.getElementById("myNavP3").style.width = "0%";
}

function openNavP4() {
    document.getElementById("myNavP4").style.width = "100%";
}

function closeNavP4() {
    document.getElementById("myNavP4").style.width = "0%";
}