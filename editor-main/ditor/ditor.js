// TODO : changer la couleur de fond + avoir un vrai comportement de display block pour le parent element
// https://editor.p5js.org/yining/sketches/SyzbgJ0C

// const : label (label), indic (value)

let labelInputTitle, labelSliderSize, input, firstInputTitle, posterTitle, titleFontSizeIndic;
let backgroundCanvasTitle, labelRedSlider, redSlider, labelGreenSlider, greenSlider, labelBlueSlider, blueSlider;

function titleSetup() {
  let menuElt1 = document.getElementById('firstChild');

  firstInputTitle = createElement('h3', 'Poster\'s name options').parent(menuElt1);
  firstInputTitle.position(25, 5);

  labelInputTitle = createSpan('Title : ').parent(menuElt1);
  labelInputTitle.position(25, 55);
  labelInputTitle.addClass('labelSmall');

  input = createInput().attribute('placeholder', 'Poster title').parent(menuElt1);
  input.position(labelInputTitle.width + 30, 50);
  input.style('width', '250px');

  labelSliderSize = createSpan('Size : ').parent(menuElt1);
  labelSliderSize.position(25, 80);
  labelSliderSize.addClass('labelSmall');

  titleSizeSlider = createSlider(12, 50).parent(menuElt1);
  titleSizeSlider.position(labelSliderSize.width + 30, 75);
  titleSizeSlider.style('width', '80px');

  titleFontSizeIndic = createSpan().parent(menuElt1);
  titleFontSizeIndic.position(titleSizeSlider.x + titleSizeSlider.width + 15, 77);

}

function setup() {
  let menuElt2 = document.getElementById('secondChild');
  createCanvas(450, 630);

  titleSetup();

  backgroundCanvasTitle = createElement('h3', 'Background color').parent(menuElt2);

  labelRedSlider = createSpan('Red : ').addClass('labelSmall').parent(menuElt2);
  redSlider = createSlider(0, 255, 20).parent(menuElt2);
  labelGreenSlider = createSpan('Green : ').addClass('labelSmall').parent(menuElt2);
  greenSlider = createSlider(0, 255, 20).parent(menuElt2);
  labelBlueSlider = createSpan('Blue : ').addClass('labelSmall').parent(menuElt2);
  blueSlider = createSlider(0, 255, 20).parent(menuElt2);

  background(20);
}

function draw() {
  background(redSlider.value(), greenSlider.value(), blueSlider.value());
  fill(255);
  textSize(titleSizeSlider.value());
  titleFontSizeIndic.html(titleSizeSlider.value() + "px");
  text(input.value(), 0 + 30, height - 30);
}
