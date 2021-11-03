"use strict";

//constructor - коструирует класс

class Reactangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

// Наследование класса Reactangle в класс ColorReactangleWidthText
class ColorReactangleWidthText extends Reactangle {
    constructor (height, width, text, bgColor) {
        super(height, width);   // super() вызывает то же самое, что было у родителя. Должно стоять на первом месте в конструкторе
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, цвет: ${this.bgColor}`);
    }
}
const div = new ColorReactangleWidthText(25, 10, 'Hello world!', 'red');

div.showMyProps(); 
console.log(div.calcArea());

const square = new Reactangle(4, 10);
const long = new Reactangle(20, 100);

console.log(long.calcArea());
console.log(square.calcArea());

