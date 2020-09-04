// very simple calculator without ui

function Calcualtor (first, second) {
    this.first = first;
    this.second = second;
}

Calcualtor.prototype.sum = function() {
    return this.first + this.second;
}

Calcualtor.prototype.minus = function() {
    return this.first - this.second;
}

Calcualtor.prototype.mod = function() {
    return this.first%this.second;
}

Calcualtor.prototype.div = function() {
    this.second == 0 ? false : this.first/this.second;
}

let calc = new Calcualtor(9, 1);
console.log(calc.sum())