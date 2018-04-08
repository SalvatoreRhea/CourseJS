class Options {
 constructor(height, width, background, fontSize, textAlign) {
  this.height = height;
  this.width = width;
  this.background = background;
  this.fontSize = fontSize;
  this.textAlign = textAlign;
  }
  newDiv(text) {
   let div = document.createElement('div');
   document.body.appendChild(div);
   div.innerHTML = text;
   div.style.cssText = `height:${this.height};
   width:${this.width};
   background:${this.background};
   font-size:${this.fontSize};
   text-align:${this.textAlign};`
  }
};

let b = new Options('100px', '100px', 'red', '18px', 'center');
b.newDiv('Lolo');