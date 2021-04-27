// TODO : pouvoir changer le texte après / avant de changer la couleur et que rien ne s'écrase, solution dans le lien ci-dessous
// https://editor.p5js.org/yining/sketches/SyzbgJ0C

let input, button, firstInputTitle;
let titleColorSlider;

  function setup() {
    createCanvas(450, 630);

    input = createInput().attribute('placeholder', 'Poster title');
    input.position(25,50);
    input.id('posterTitle');

    button = createButton('submit');
    button.position(input.x + input.width + 5, 50);
    button.mousePressed(applyTitleOnPoster);

    firstInputTitle = createElement('h3', 'Poster\'s name options');
    firstInputTitle.position(25, 5);

    bgColorSlider = createSlider(0, 255);
    bgColorSlider.position(input.x + input.width + 5, 75);
    bgColorSlider.style('width', '80px');
    bgColorSlider.mousePressed(changeTitleSize)

    background(0);
  }

  function changeTitleSize() {
    let val = bgColorSlider.value();
    background(val);
  }

  function applyTitleOnPoster(val) {
    background(val);
    const title = input.value();
    console.log(title)
    input.value('');

    for (let i = 0; i < 50; i += 10) {
      push();
      fill(255);
      text (title, width/2, i + 50);
      pop();
    }
  }
