module.exports = function solveEquation(equation) {
    const solutions = [];

    let firstPositionX = equation.indexOf(" * x^2");
    let secondPositionX = equation.indexOf("* x ");
    let a = equation.slice(0, firstPositionX);
    let b;
    let c;

    if (equation.slice(firstPositionX + 7, firstPositionX + 8) == '+') {
        b = equation.slice(firstPositionX + 9, secondPositionX);
    } else {
        b = -equation.slice(firstPositionX + 9, secondPositionX);
    }
    if (equation.slice(secondPositionX + 4, secondPositionX + 5) == '+') {
        c = equation.slice(secondPositionX + 6);
    } else {
        c = -equation.slice(secondPositionX + 6);
    }

    let discrim = b * b - (4 * a * c);
    let firstX = Math.round(0.5 * (-b + Math.sqrt(discrim)) / a);
    let secondX = Math.round(0.5 * (-b - Math.sqrt(discrim)) / a);

    solutions.push(firstX);
    solutions.push(secondX);
    solutions.sort((a, b) => a - b);

    return solutions;
}