(( ) => {
    const error = (message:string):(never|number) => {

        if( false){
        throw new Error(message)
        }
        return 1;
    }

    error('Esto es un error');
    console.log('Hola mundo');
})( )