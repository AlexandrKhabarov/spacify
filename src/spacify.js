// TODO Implement spacify module

const string = String;

string.prototype.spacify = function () {
    return this.split('').join(' ');
};

