// TODO : changer la couleur de fond + avoir un vrai comportement de display block pour le parent element
// https://editor.p5js.org/yining/sketches/SyzbgJ0C

// const : label (label), indic (value)

let labelInputTitle, labelSliderSize, input, firstInputTitle, posterTitle, titleFontSizeIndic, labelXSlider, xSliderTitle, labelYSlider, ySliderTitle;
let backgroundCanvasTitle, labelRedSlider, redSlider, labelGreenSlider, greenSlider, labelBlueSlider, blueSlider;

function titleSetup() {
  let menuElt1 = document.getElementById('firstChild');
  let group1 = menuElt1.getElementsByClassName('elementGroup').item(0);
  let group2 = menuElt1.getElementsByClassName('elementGroup').item(1);
  let group3 = menuElt1.getElementsByClassName('elementGroup').item(2);
  let group4 = menuElt1.getElementsByClassName('elementGroup').item(3);

  labelInputTitle = createSpan('Title : ').addClass('labelSmall').parent(group1);

  input = createInput().attribute('placeholder', 'Poster title').parent(group1);

  labelSliderSize = createSpan('Size : ').addClass('labelSmall').parent(group2);

  titleSizeSlider = createSlider(12, 100).parent(group2);

  labelXSlider = createSpan('X : ').addClass('labelSmall').parent(group3);
  xSliderTitle = createSlider(0, 450, 30).parent(group3);

  labelYSlider = createSpan('Y : ').addClass('labelSmall').parent(group4);
  ySliderTitle = createSlider(0, 630, 30).parent(group4);

  titleFontSizeIndic = createSpan().parent(group2);

}

function backgroundColorSetup() {
  let menuElt2 = document.getElementById('secondChild');
  let group1 = menuElt2.getElementsByClassName('elementGroup').item(0);
  let group2 = menuElt2.getElementsByClassName('elementGroup').item(1);
  let group3 = menuElt2.getElementsByClassName('elementGroup').item(2);

  labelRedSlider = createSpan('Red : ').addClass('labelSmall').parent(group1);
  redSlider = createSlider(0, 255, 20).parent(group1);
  labelGreenSlider = createSpan('Green : ').addClass('labelSmall').parent(group2);
  greenSlider = createSlider(0, 255, 20).parent(group2);
  labelBlueSlider = createSpan('Blue : ').addClass('labelSmall').parent(group3);
  blueSlider = createSlider(0, 255, 20).parent(group3);
}

function setup() {
  var canvas = createCanvas(450, 630);
  canvas.parent('#canvas');

  titleSetup();
  backgroundColorSetup();
}

function repeatedText() {
// TODO : checkbox qui déclence cette fonction
// TODO : slider qui change i
 for (let i = 0; i < 10; i ++) {
   text(input.value(), xSliderTitle.value(), 50 * i + ySliderTitle.value());
}
}

function draw() {
  background(redSlider.value(), greenSlider.value(), blueSlider.value());
  // TODO :  noFill();stroke(255);
  fill(255);
  textAlign(CENTER);
  textSize(titleSizeSlider.value());
  titleFontSizeIndic.html(titleSizeSlider.value() + "px").addClass('indicSmall');
  text(input.value(), xSliderTitle.value(), ySliderTitle.value());
  textFont('Arial Black');
  // TODO : faire une gestion de l'aligment centré autpmatique, ça peut être stylé
}
