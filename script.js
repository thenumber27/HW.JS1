let a = 1;
let b = 2;
let c = a + b;
let d = (c + 2) * 3;
d == c;

alert (d);

let R = prompt ("Ведите радиус");
console.log (R);
let h = prompt ("Ведите высоту цилиндра");
console.log (h);
let S = Math.PI * Math.pow(R, 2);
console.log (S);
let V = S * h;
console.log (V);

alert ('Площадь Цилиндра = ' + S);
alert ('Объем Цилиндра = ' + V);