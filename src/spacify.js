// TODO Implement spacify module

const string = String;

string.prototype.spacify = function () {
    const val = this.valueOf();
    const len = val.length;
    let resString = '';
    let i = 0;
    if (val.length === 0) {
        return '';
    }
    while (i < len - 1) {
        resString += `${val[i]} `;
        i += 1;
    }
    resString += val[len - 1];

    return resString;
};
