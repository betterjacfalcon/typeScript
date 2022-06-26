(( ) => {
    const numbers: (string|number|boolean)[] = [1,2,3,4,5,'6',7,8,9,10];
    numbers.push(true);
    numbers.push(11);
    console.log(numbers);

    const numeros: number[] = [1,2,3,4,5,6,7,8,9,10];
    console.log(numeros);

    const apellidos: string[] = ['carvajal','aguilar','rodriguez','velasquez'];
    apellidos.forEach(a => console.log(a.toUpperCase()));
    
})( )