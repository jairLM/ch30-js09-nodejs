/**
 * perimite verificar el comportam
 * ventajas:
 * 1.- Detección de errores
 * 2.- Mejora de calidad en el programa
 * 3.- facilitar la refactorización
 * 4.-Ahorro de tiempo a largo plazo
 * 5.-Facilita la colaboración
 * 
 * deventajas:
 * 1.- tiempo y esfuerzo 
 * 2.- cobertura insuficiente
 * 3.-complejidad adicional
 * 4.-falsa confianza      
 */



//importa el archivo a probar 
//const { test } = require('node:test');
const {sum, suma2} = require('../js/sum');

//test('Prueba de 1 + 3 = 4', ()=>{})
test('Prueba desuma de numeros enteros', ()=>{

    expect(sum(1,3)).toBe(4);
    expect(sum(1000,3000)).toBe(4000);
    expect( sum( 1000,-3000 ) ).toBe( -2000 );
});



test('Prueba de 1000 + NaN = NaN', ()=>{

    expect( sum( 1000, NaN ) ).toBe( NaN );

});

test('Prueba de numeros decimales con sum', ()=>{
    //Los numeros flotantes tienen problema con la precisión en cálculos 
    //donde la exactitud decimail es crítica
    expect( sum( 2.51, 0.01 ) ).toBe( 2.52 );
    expect( sum( 0.01, 0.20 ) ).toBe( 0.21 );
    expect( sum( 0.00010, 0.0002 ) ).toBe( 0.0003 );

});

test('Prueba de numeros decimales con sum2', ()=>{
   

    expect( suma2( 2.51, 0.01 ) ).toBeCloseTo( 2.52 );
    expect( suma2( 0.01, 0.20 ) ).toBeCloseTo( 0.21 );
    expect( suma2( 0.00010, 0.0002 ) ).toBeCloseTo( 0.0003 );

});