// Parameter variables
let circleSize = 70; //Change Background Circles Size
let innerearsize = 60; // Change Inner Ear Size
let earSize = 10; //Change Ear Size
let faceSize = 250; //Change Face Size
let eyeSize = 50; //Change Eye Size
let eyeShadowSize = 30; //Change Inner Eye
let mouthSize = 10; //Change Mouth Size
let noseSize = 10; // Change Nose Size
let drawBowTie = true; //Bowtie ON and OFF
let drawexclamationmark = false; //Exclamation mark ON and OFF
let bowTieSize = 10; //Change Bowtie Size
let blushSize = 20; //Change Blush Size
let colorListNum = 1; //Change Color Pallet Group [0,1,2]
let rotatebearflag = false; //Rotate ON and OFF
let rotatebearnum = 2; //Change Rotate Num
let bearOn = true; //flag for bear
let shapeTypeForWallpaper = "circle";//Change shapes to "circle" or "square"

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  // Grid settings
  pWallpaper.grid_settings.cell_width = 400;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 200;
}

function wallpaper_background() {
  background(255, 248, 255); //Background Colour
}

function my_symbol() {
  var colorPalettesList = [
    [
      "#FDDFDF", // List 0
      "#FCF7DE",
      "#D3EEFF",
      "#DAFFEE",
      "#F0DEFD",
    ],

    [
      "#EDF1FF", // List 1
      "#FFEDF8",
      "#FCD3D3",
      "#FCEFD3",
      "#F3FFEE",
    ],

    [
      "#FDDFDF", // List 2
      "#FCF7DE",
      "#D3EEFF",
      "#DAFFEE",
      "#F0DEFD",
    ],
  ];
  var background_color = [
    "#FFE9FF",
    "#D3EEFF",
    "#FFDDC6",
    "#EAF3EA",
  ];

  if (colorListNum > 2) { 
    var colorPalettes = colorPalettesList[0];
  } else {
    var colorPalettes = colorPalettesList[colorListNum]; // if else statement because the max num 2.
  }
  var earColour = getRandomUniqueColor(colorPalettes);
  var faceAndEars = getRandomUniqueColor(colorPalettes, [earColour]);
  var eyeColour = getRandomUniqueColor(colorPalettes, [earColour, faceAndEars]);
  var mouthColour = getRandomUniqueColor(colorPalettes, [
    earColour,
    faceAndEars,
    eyeColour,
  ]);

  var bowTieColour = getRandomUniqueColor(colorPalettes, [
    earColour,
    faceAndEars,
    eyeColour,
    mouthColour,
  ]);

  //Wallpaper Design
  DrawWallpaper(background_color, shapeTypeForWallpaper);

  if (drawexclamationmark) {
    DrawExclamation();
  }

  if (bearOn) {
    DrawBear(rotatebearflag, earColour, faceAndEars, eyeColour, mouthColour);
  }

  if (drawBowTie) {
    if (faceSize >= 200) {
      DrawBowTie(bowTieColour, bowTieSize, 0);
    } else {
      DrawBowTie(bowTieColour, bowTieSize, 40);
    }
  }
}

function DrawBear(rotatebear, earColour, faceAndEars, eyeColour, mouthColour) {
 
  if (rotatebear) {
    rotate(rotatebearnum); // Rotate Bear
  }

  stroke(77, 45, 82);
  strokeWeight(5);
  fill(faceAndEars);
  ellipse(50, 50, earSize, earSize);
  ellipse(150, 50, earSize, earSize); // Ears

  noStroke();
  fill(earColour);
  ellipse(55, 55, innerearsize, innerearsize);
  ellipse(145, 55, innerearsize, innerearsize); // Ears 2.0

  stroke(77, 45, 82);
  fill(faceAndEars);
  ellipse(100, 100, faceSize, faceSize); // Base Face

  strokeWeight(3);
  fill(eyeColour);
  ellipse(70, 90, eyeSize, eyeSize);
  ellipse(130, 90, eyeSize, eyeSize); // Eyes

  fill(77, 45, 82);
  ellipse(80, 90, eyeShadowSize, eyeShadowSize);
  ellipse(140, 90, eyeShadowSize, eyeShadowSize); // Eyes 2.0

  stroke(77, 45, 82);
  strokeWeight(3);
  fill(mouthColour);
  ellipse(100, 130, 60 + mouthSize, 50 + mouthSize); //Mouth

  fill(earColour);
  ellipse(100, 120, 30 + noseSize, 20 + noseSize); //Nose

  noStroke();
  fill(255, 135, 135);
  ellipse(155, 120, 30 + blushSize, 20 + blushSize);
  ellipse(45, 120, 30 + blushSize, 20 + blushSize); //Blush

  stroke(0);
  line(55, 125, 45, 112);
  line(44, 127, 35, 115); // L Line Blush

  line(155, 127, 147, 114);
  line(165, 127, 157, 114); //R Line Blush
}

function DrawWallpaper(background_color, shapeType) { // Function to draw wallpaper
  noStroke(0);
  if (shapeType.toLowerCase() === "circle") { // Switch to Circles
    fill(240, 200, 255, 90);
    ellipse(350, 100, 50 + circleSize, 50 + circleSize);

    fill(random(background_color));
    ellipse(20, 20, 40 + circleSize, 40 + circleSize);

    fill(random(background_color));
    ellipse(220, 150, 80 + circleSize, 80 + circleSize);

    fill(random(background_color));
    ellipse(180, 0, 90 + circleSize, 90 + circleSize); // Switch to Squares
  } else if (shapeType.toLowerCase() === "square") {
    fill(240, 200, 255, 90);
    rect(350, 100, 50 + circleSize, 50 + circleSize);

    fill(random(background_color));
    rect(20, 20, 40 + circleSize, 40 + circleSize);

    fill(random(background_color));
    rect(220, 150, 80 + circleSize, 80 + circleSize);

    fill(random(background_color));
    rect(180, 0, 90 + circleSize, 90 + circleSize);
  }
}

function DrawExclamation() {
  noStroke();
  fill(250, 119, 119);
  ellipse(210, 70, 20, 20);
  rect(202, 10, 15, 45, 20);
  ellipse(250, 70, 20, 20);
  rect(242, 10, 15, 45, 20); //!!
}

function DrawBowTie(colour, bSize, Y) {
  fill(colour);
  stroke(77, 45, 82);
  ellipse(80, Y, 60 + bSize, 30 + bSize); // L Side Bow
  ellipse(120, Y, 60 + bSize, 30 + bSize); // R Side Bow
  ellipse(100, Y, 20 + bSize, 30 + bSize); // Middle Bow
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
