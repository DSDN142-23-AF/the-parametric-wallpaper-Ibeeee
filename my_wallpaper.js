// Parameter variables
let rectWidth = 20;
let rectHeight = 20;

let earSize = 60; //sizes set to scale
let faceSize = 130; //sizes set to scale
let eyeSize = 40; //sizes set to scale
let eyeShadowSize = 20; //sizes set to scale
let drawBowTie = true; //flag to set bowtie on and off
let drawexclamationmark = false; //flag to set exclamation mark on and off
let bowTieSize = 10;  //sides set to scale

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  // Grid settings
  pWallpaper.grid_settings.cell_width = 400;
  pWallpaper.grid_settings.cell_height = 400;
  pWallpaper.grid_settings.row_offset = 200;
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
  var backGround = getRandomUniqueColor(colorPalettes);
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
  
  //wallpaper design
  noStroke(0);
  fill(240, 200, 255, 60);
  ellipse(30, 300, 150, 150);

  fill(165, 200, 255, 100);
  ellipse(170, 195, 90, 90);

  fill(backGround);
  ellipse(230, 320, 40, 40);

  fill(backGround);
  ellipse(330, 10, 100, 100);

  if (drawexclamationmark)  {
    DrawExclamation();
  }

  // draw base bear
  stroke(77, 45, 82);
  strokeWeight(5);
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

function DrawExclamation() {
  noStroke();
  fill(250, 119, 119);
  ellipse(210, 70, 20, 20);
  rect(202, 10, 15, 45, 20);
  ellipse(250, 70, 20, 20);
  rect(242, 10, 15, 45, 20); //!! 
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