// Parameter variables
let rectWidth = 20;
let rectHeight = 20;

let circleSize = 0; //Change Background Circles Size
let innerearsize = 0; // Change Inner Ear Size
let earSize = 100; //Change Ear Size
let faceSize = 200 //Change Face Size
let eyeSize = 90; //Change Eye Size
let eyeShadowSize = 40; //Change Inner Eye
let mouthSize = 20; //Change Mouth Size
let noseSize = 10; // Change Nose Size
let drawBowTie = true; //Bowtie ON and OFF
let drawexclamationmark = false; //Exclamation mark ON and OFF
let bowTieSize = 10;  //Change Bowtie Size
let blushSize = 30;  //Change Blush Size
let colorListNum = 1; //Change Color Pallet Group
let rotatebear = false; //Rotate ON and OFF
let rotatebearnum = 10; //Change Rotate Num


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
    
    ["#FDDFDF", // List 0
    "#FCF7DE",
    "#D3EEFF",
    "#DAFFEE",
    "#F0DEFD",],
    
    ["#EDF1FF", // List 1
    "#FFEDF8",
    "#FCD3D3",
    "#FCEFD3",
    "#F3FFEE",],
    
    ["#FDDFDF", // List 2
    "#FCF7DE",
    "#D3EEFF",
    "#DAFFEE",
    "#F0DEFD",]

  ];
  var background_color = [
    "#FFE9FF",
    "#D3EEFF",
    "#FFDDC6",
    "#EAF3EA",
  ];

  var colorPalettes = colorPalettesList[colorListNum];
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

  noStroke(0);
  fill(240, 200, 255, 90);
  ellipse(350, 100, 50 + circleSize, 50 + circleSize);

  fill(random(background_color));
  ellipse(20, 20, 40 + circleSize, 40 + circleSize);

  fill(random(background_color));
  ellipse(220, 150, 80 + circleSize, 80 + circleSize);

  fill(random(background_color));
  ellipse(180, 0, 90 + circleSize, 90 + circleSize);

  if (drawexclamationmark) {
    DrawExclamation();
  }

  // My Bear


  if (rotatebear) {
    rotateBear();
  }

  function rotateBear() {
    rotate(rotatebearnum)
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

  if (drawBowTie) {
    DrawBowTie(bowTieColour, bowTieSize);
  }

  strokeWeight(3);
  fill(eyeColour);
  ellipse(70, 90, eyeSize, eyeSize);
  ellipse(130, 90, eyeSize, eyeSize); // Eyes

  fill(77, 45, 82);
  ellipse(80, 90, eyeShadowSize, eyeShadowSize);
  ellipse(140, 90, eyeShadowSize, eyeShadowSize); // Eyes 2.0

  stroke(77, 45, 82);
  strokeWeight(3);
  fill(mouthColour)
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

  line(155, 127, 147, 114)
  line(165, 127, 157, 114) //R Line Blush

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
  ellipse(80, 40, 60 + bSize, 30 + bSize); // L Side Bow
  ellipse(120, 40, 60 + bSize, 30 + bSize); // R Side Bow
  ellipse(100, 40, 20 + bSize, 30 + bSize); // Middle Bow
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