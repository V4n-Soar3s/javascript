const a = 0;
const b = null;
const c = false;
const d = `false`;
const e = NaN;

console.log(a || b || c || d || e);// vai ser exibido o valor false por conta da string do d que contem o valor ele é considerado verdadeiro 