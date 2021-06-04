// TODO : changer la couleur de fond + avoir un vrai comportement de display block pour le parent element
// https://editor.p5js.org/yining/sketches/SyzbgJ0C
// draggable : https://editor.p5js.org/codingtrain/sketches/U0R5B6Z88
// full p5 : https://shiffman.net/a2z/intro/

// const : label (label), indic (value)

let labelInputTitle, labelSliderSize, input, firstInputTitle, posterTitle, titleFontSizeIndic, labelXSlider, xSliderTitle, indicXCentered, labelYSlider, ySliderTitle;
let fontColorPicker, labelFontColorPicker, strokeFontColorPicker, labelStrokeFontColorPicker;
let checkboxFillOrNot, checkboxForLoop, slideriValue;
let centerTitleButton;
let backgroundCanvasTitle, bgColorPicker, labelBgColorPicker, valueColorPicker;

let canvasName, saveCanvasBtn;

let drawCirclesOrNot, drawSquaresOrNot;
let drawLayer, drawLayerHeightSlider;

let designSelect;
let circleSpacingLabel, circleSpacingSlider;

let gradientColorLabel, gradientColorSlider;

let circleShit;

// let radio; test des boutons radio, je suis pas encore convaincu par le rendu html, ça complique les choses avec les options de params par la suite

// actions sur le titre

// TODO : mettre une modal avant toute chose pour demander la largeur / hauteur de la zone de travail afin que le mec puisse se faire le design de son choix
// mais ça me paraît être une V12 ça

function titleSetup() {

  // LEFT PANEL

  let menuElt1 = document.getElementById('firstChild');
  let group1 = menuElt1.getElementsByClassName('elementGroup').item(0);
  let group2 = menuElt1.getElementsByClassName('elementGroup').item(1);
  let xAlignement = menuElt1.getElementsByClassName('elementGroup').item(2);
  let yAlignement = menuElt1.getElementsByClassName('elementGroup').item(3);
  let titleAlignement = menuElt1.getElementsByClassName('elementGroup').item(4);
  let titleRepeat = menuElt1.getElementsByClassName('elementGroup').item(5);
  let fontColor = menuElt1.getElementsByClassName('elementGroup').item(6);

  labelInputTitle = createSpan('Title : ').addClass('labelSmall').parent(group1);

  input = createInput().attribute('placeholder', 'Poster title').parent(group1);

  labelSliderSize = createSpan('Size : ').addClass('labelSmall').parent(group2);

  titleSizeSlider = createSlider(12, 100).parent(group2);

  titleFontSizeIndic = createSpan().parent(group2);

  labelXSlider = createSpan('X : ').addClass('labelSmall').parent(xAlignement);
  xSliderTitle = createSlider(0, 450, 25, 5).parent(xAlignement);

  indicXCentered = createSpan().parent(xAlignement);

  labelYSlider = createSpan('Y : ').addClass('labelSmall').parent(yAlignement);
  ySliderTitle = createSlider(0, 630, 30, 5).parent(yAlignement);

  checkboxFillOrNot = createCheckbox('Only Stroke', false).parent(menuElt1).addClass('labelSmall');

  checkboxForLoop = createCheckbox('Repeat the title', false).parent(titleRepeat).addClass('labelSmall');

  slideriValue = createSlider(2, 10).parent(titleRepeat);

  // TODO : centerTitleButton = createButton('\uf037').parent(titleAlignement);

  labelFontColorPicker = createSpan('Font color : ').addClass('labelSmall').parent(fontColor);
  fontColorPicker = createColorPicker('#FFF').parent(fontColor);
  labelStrokeFontColorPicker = createSpan('Stroke color : ').addClass('labelSmall').parent(fontColor);
  strokeFontColorPicker = createColorPicker('#FFF').parent(fontColor);


  // MENU EXPORT

  let exportPanel = document.getElementById('exportPanel');

  canvasName = createInput().attribute('placeholder', 'Art name').parent(exportPanel);

  saveCanvasBtn = createButton('Save canvas !').parent(exportPanel);
  saveCanvasBtn.mousePressed(exportCanvas);

  // RIGHT PANEL : design shit

  let rightPanel = document.getElementById('designShit');
  let chooseYourDesign = document.getElementById('chooseYourDesign');
  let layerHeightOption = document.getElementById('layerHeightOption');
  circleShit = document.getElementById('circlesOptions');
  let firtCirclesOption = document.getElementById('firstCirclesOption');
  let gradientShit = rightPanel.getElementsByClassName('elementGroup').item(2);
  let firstGradientOption = document.getElementById('firstGradientOption');

  drawLayerHeightLabel = createSpan('What is your choice : ').addClass('labelSmall').parent(chooseYourDesign);
  designSelect = createSelect().parent(chooseYourDesign);
  designSelect.option('Choose');
  designSelect.option('Circles');
  designSelect.option('Gradient');

  drawLayerHeightLabel = createSpan('Layer height : ').addClass('labelSmall').parent(layerHeightOption);
  drawLayerHeightSlider = createSlider(100, 620, 550).parent(layerHeightOption);

  circleSpacingLabel = createSpan('Spacing between circles : ').addClass('labelSmall').parent(firtCirclesOption);
  circleSpacingSlider = createSlider(15, 100, 30).addClass('labelSmall').parent(firtCirclesOption);

  gradientColorLabel = createSpan('What gradient do you want : ').addClass('labelSmall').parent(firstGradientOption);
  gradientColorSlider = createSlider(15, 600, 100).addClass('labelSmall').parent(firstGradientOption);

  // TODO : créer un slider pour impacter la couleur du gradient

  // TODO : checkbox for textLeading (= lineheight)
}

function exportCanvas() {
  saveCanvas(canvasName.value(), 'jpg');
}

// contourer ou remplir le titre
function fillOrNot() {
  if (checkboxFillOrNot.checked()) {
    noFill();
    stroke(strokeFontColorPicker.value());
  } else {
    fill(fontColorPicker.value());
    noStroke();
  }
}

// actions sur l'arrière plan du canvas
function backgroundColorSetup() {
  let menuElt2 = document.getElementById('secondChild');
  let bgGroup = menuElt2.getElementsByClassName('elementGroup').item(0);

  labelBgColorPicker = createSpan('Color : ').addClass('labelSmall').parent(bgGroup);
  bgColorPicker = createColorPicker('#171717').parent(bgGroup);
}


// SETUP
function setup() {
  var canvas = createCanvas(450, 630);
  canvas.parent('#canvas');
  textFont('Arial Black');
  textAlign(CENTER);

  titleSetup();
  backgroundColorSetup();

  drawLayer = createGraphics(440, 620);
}

// 1 seul titre ou jusqu'à 15 fois le titre
function printTitle() {
  // TODO : centrer auto ci-dessous, comprendre pourquoi ça marche pass
  //centerTitleButton.mousePressed(() => text(input.value(), width/2, ySliderTitle.value()));

  if (checkboxForLoop.checked()) {
    slideriValue.removeClass('disabled');
    for (let i = 0; i < slideriValue.value(); i++) {
      text(input.value(), xSliderTitle.value(), 50 * i + ySliderTitle.value());
    }
  } else {
    text(input.value(), xSliderTitle.value(), ySliderTitle.value());
    slideriValue.addClass('disabled');
  }

}

// les dessins : le coeur du truc
function drawShit() {
  switch (designSelect.value()) {
    case "Circles" :
      image(drawLayer, 5, 5);
      drawLayer.height = drawLayerHeightSlider.value();
      drawLayer.background(bgColorPicker.value());
      for (let i = 0; i <= 900; i += circleSpacingSlider.value()) {
        drawLayer.noFill();
        drawLayer.stroke(255);
        drawLayer.strokeWeight(2);
        drawLayer.ellipse(drawLayer.width / 2, drawLayer.height / 2, i, i);
      }
    break;
    case "Gradient" :
      //circleShit.addClass('disabled');
      image(drawLayer, 5, 5);
      drawLayer.height = drawLayerHeightSlider.value();
      drawLayer.background(bgColorPicker.value());
      for (let i = 0; i < drawLayer.width; i += 10) {
        for (let j = 0; j < drawLayer.height; j += 10) {
        drawLayer.noStroke();
        //drawLayer.fill(map(i, width, height, 0, 255), map(i, 0, height, 255, 0), map(j, 0, height, 0, 255));
        drawLayer.fill(map(gradientColorSlider.value(), 0, height, 0, 255), map(i, 0, height, 255, 0), map(j, 0, height, 0, 255));
        drawLayer.strokeWeight(2);
        drawLayer.rect(i, j , 10);
        }
      }
      break;
      default :
        background(bgColorPicker.value());
    break;
  }
}

function draw() {
  background(bgColorPicker.value());
  fillOrNot();
  textSize(titleSizeSlider.value());
  titleFontSizeIndic.html(titleSizeSlider.value() + "px").addClass('indicSmall');
  if (xSliderTitle.value() == width / 2) {
    indicXCentered.html('centered!').addClass('indicSmallRed');
  } else {
    indicXCentered.html('');
  }
  drawShit();
  printTitle();
}
