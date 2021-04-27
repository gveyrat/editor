// TODO : pouvoir changer le texte après / avant de changer la couleur et que rien ne s'écrase, solution dans le lien ci-dessous
// https://editor.p5js.org/yining/sketches/SyzbgJ0C

// const : label (label), indic (value)

let labelInputTitle, labelSliderSize, input, firstInputTitle, posterTitle, titleFontSizeIndic;

  function setup() {
    let menuElt = document.getElementById('parent');
    createCanvas(450, 630);

    labelInputTitle = createSpan('Title : ');
    labelInputTitle.position(25, 55);
    labelInputTitle.addClass('labelSmall');
    labelInputTitle.parent(menuElt);

    input = createInput().attribute('placeholder', 'Poster title');
    input.position(labelInputTitle.width + 30, 50);
    input.style('width', '250px');
    input.parent(menuElt);

    firstInputTitle = createElement('h3', 'Poster\'s name options');
    firstInputTitle.position(25, 5);
    firstInputTitle.parent(menuElt);

    labelSliderSize = createSpan('Size : ');
    labelSliderSize.position(25, 80);
    labelSliderSize.addClass('labelSmall');
    labelSliderSize.parent(menuElt);

    titleSizeSlider = createSlider(12, 50);
    titleSizeSlider.position(labelSliderSize.width + 30, 75);
    titleSizeSlider.style('width', '80px');
    titleSizeSlider.parent(menuElt);

    titleFontSizeIndic = createSpan();
    titleFontSizeIndic.position(titleSizeSlider.x + titleSizeSlider.width + 15, 77);
    titleFontSizeIndic.parent(menuElt);

    background(20);
  }

  function draw() {
    background(20);
    fill(255);
    textSize(titleSizeSlider.value());
    titleFontSizeIndic.html(titleSizeSlider.value() + "px");
    text(input.value(), 0 + 30, height - 30);
  }
