(( ) => {
   const peter:string ='Peter';
   const carvajal:string = "Carvajal";
    const martin:string = `Martin`;

    console.log(`I'm ${carvajal}`);
    console.log("I'm " + martin);
    console.log(peter.toUpperCase());
    console.log(peter[10]?.toUpperCase() || "No esta presente");
})( )