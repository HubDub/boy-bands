var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands

// Get a reference to the appropriate DOM element for vegetables

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker ++) {
  // for (var i = 0; i <vegetables.length; i++) {
  //    console.log(bands[loopTracker] + " " + vegetables [i]);
  //  }


  // var currentBand += bands[loopTracker];
  // var currentVeggie += vegetables[loopTracker];
  console.log(loopTracker);
  // Add the band names into the correct <div>
  bandElement = document.getElementById("boy-bands").innerHTML += bands[loopTracker] + "<br>";


  // Add the veggie names into the correct <div>
  document.getElementById("vegetables").innerHTML += vegetables[loopTracker] + "<br>";

}