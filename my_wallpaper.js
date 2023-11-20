// Parameter variables
let rectWidth = 20;
let rectHeight = 20;

let earSize = 60; //sizes set to scale
let faceSize = 130; //sizes set to scale
let eyeSize = 40; //sizes set to scale
let eyeShadowSize = 20; //sizes set to scale
let drawBowTie = false; //flag to set bowtie on and off

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  // Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() {
  var colorPalettes = [
    "#FAF5CD",
    "#FACCA5",
    "#ECBEFA",
    "#B9E3C3",
    "#FFC0CB",
    "#FFD700",
    "#00CED1",
    "#DDA0DD",
    "#87CEEB",
    "#FFA07A",
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

  // draw base bear
  fill(faceAndEars);
  ellipse(50, 50, earSize, earSize);
  ellipse(150, 50, earSize, earSize); // Ears

  noStroke();
  fill(earColour);
  ellipse(60, 55, 50, 50);
  ellipse(140, 55, 50, 50); // Ears 2.0

  fill(faceAndEars);
  ellipse(100, 100, faceSize, faceSize); // Base Face

  if (drawBowTie) {
    DrawBowTie(bowTieColour);
  }

  fill(eyeColour);
  ellipse(70, 90, eyeSize, eyeSize);
  ellipse(130, 90, eyeSize, eyeSize); // Eyes

  fill(eyeShadowColour);
  ellipse(80, 90, eyeShadowSize, eyeShadowSize);
  ellipse(140, 90, eyeShadowSize, eyeShadowSize); // Eyes 2.0

  ellipse(100, 130, 60, 50);
  stroke(1);
  
  fill(earColour);
  ellipse(100, 120, 30, 20);
}

function DrawBowTie(colour) {
  fill(colour);
  stroke(1);
  ellipse(80, 40, 60, 30); // L Side Bow
  ellipse(120, 40, 60, 30); // R Side Bow
  ellipse(100, 40, 20, 30); // Middle Bow
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