// Parameter variables
let rectWidth = 20;
let rectHeight = 20;

let earSize = 60; //sizes set to scale
let faceSize = 130; //sizes set to scale
let eyeSize = 40; //sizes set to scale
let eyeShadowSize = 20; //sizes set to scale
let drawBowTie = false; //flag to set bowtie on and off
let bowTieSize = 10; 

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  // Grid settings
  pWallpaper.grid_settings.cell_width = 300;
  pWallpaper.grid_settings.cell_height = 300;
  pWallpaper.grid_settings.row_offset = 0;
}

function wallpaper_background() {
  background(255, 248, 255); 
}

function my_symbol() {
  var colorPalettes = [
    "#FDDFDF",
    "#FCF7DE",
    "#D3EEFF",
    "#DEF3FD",
    "#F0DEFD",
  ];
  var earColour = getRandomUniqueColor(colorPalettes);
  var faceAndEars = getRandomUniqueColor(colorPalettes, [earColour]);
  var eyeColour = getRandomUniqueColor(colorPalettes, [earColour, faceAndEars]);
  var eyeShadowColour = getRandomUniqueColor(colorPalettes, [
    earColour,
    faceAndEars,
    eyeColour,
  ]);
  var bowTieColour = getRandomUniqueColor(colorPalettes, [
    earColour,
    faceAndEars,
    eyeColour,
    eyeShadowColour,
  ]);

  rotate(20)
  //wallpaper design
  stroke(0);
  strokeWeight(4)
  fill(250, 119, 119);
  ellipse(195, 125, 25, 25);
  triangle(240, 40, 190, 30, 200, 100);

  // draw base bear
  stroke(77, 45, 82);
  strokeWeight(4);
  fill(faceAndEars);
  ellipse(50, 50, earSize, earSize);
  ellipse(150, 50, earSize, earSize); // Ears
  
  noStroke();
  fill(earColour);
  ellipse(55, 55, 50, 50);
  ellipse(145, 55, 50, 50); // Ears 2.0

  stroke(77, 45, 82);
  fill(faceAndEars);
  ellipse(100, 100, faceSize, faceSize); // Base Face

  if (drawBowTie) {
    DrawBowTie(bowTieColour, bowTieSize);
  }

  strokeWeight(3);
  fill(eyeColour);
  ellipse(70, 90, eyeSize, eyeSize);
  ellipse(130, 90, eyeSize, eyeSize); // Eyes

  fill(eyeShadowColour);
  ellipse(80, 90, eyeShadowSize, eyeShadowSize);
  ellipse(140, 90, eyeShadowSize, eyeShadowSize); // Eyes 2.0
  
  stroke(77, 45, 82);
  strokeWeight(3);
  ellipse(100, 130, 60, 50); //Mouth
  
  fill(earColour);
  ellipse(100, 120, 30, 20); //Nose

  noStroke();
  fill(255, 135, 135);
  ellipse(155, 120, 30, 20);
  ellipse(45, 120, 30, 20); //Blush

  stroke(0); 
  line(55, 125, 45, 112);
  line(44, 127, 35, 115); // L Line Blush 

  line(155, 127, 147, 114)
  line(165, 127, 157, 114)

}

function DrawBowTie(colour, bSize) {
  fill(colour);
  stroke(77, 45, 82);
  ellipse(80, 40, 60+bSize, 30+bSize); // L Side Bow
  ellipse(120, 40, 60+bSize, 30+bSize); // R Side Bow
  ellipse(100, 40, 20+bSize, 30+bSize); // Middle Bow
}

function getRandomUniqueColor(colorList, excludeList = []) {
  let availableColors = colorList.filter(
    (color) => !excludeList.includes(color)
  );

  if (availableColors.length > 0) {
    // Use random() to select a random color from the filtered list
    return random(availableColors);
  }
}