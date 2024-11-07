export default class Display {
    constructor(displayElement) {
        this.displayElement = displayElement;
    }
    get value() {
        return this.displayElement.innerText;
    }
    set value(value) {
        this.displayElement.innerText = value;
    }
    clear() {
        this.value = "0";
    }
}
