function bringMeSomeWords() {
  // this is the word_finder click handler
  var inputLetters = document.getElementById("setOfLetters").value
  console.log("inputLetters = " + inputLetters);
  // do post request here
  // can use GET since the submission is only 7 letters
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      document.getElementById("results").innerHTML = this.responseText;
    }
    xhttp.open("GET", "http://localhost:3000/", true);
    xhttp.send();

}