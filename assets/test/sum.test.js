//importa el archivo a probar 
const { test } = require('node:test');
const {sum} = require('../test/sum');

//test('Prueba de 1 + 3 = 4', ()=>{})
test('Prueba de 1 + 3 = 4', ()=>{

    expect(sum(1,3)).toBe(4);

});