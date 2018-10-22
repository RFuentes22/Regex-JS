
//1
    var cadena='Este es un tutorial';
    var exp1= new RegExp('tutorial');
    var exp2=/tutorial/;
    
    document.write(exp2.test(cadena));
  

//2
    var cadena2='alumnes';
    var exp3= new RegExp('alumn[oa]'); //listado de caracteres validos 
   
    //document.write(exp3.test(cadena2));

//3
    var cadena3='foto008';
    var exp4=/foto00[0-367]/; //[0-9] un rango
                              // [0-367] se permite una mezcla

    //document.write(exp4.test(cadena3));

//4
    //(palabra|otra|otra)

    var cadena4='alumnos';
    var exp5=/(alumn[oa]s|profesores)/;

    //document.write(exp5.test(cadena4));

//5
    //definir cuantas veces se repite el caracter
    // * se puede repetir n veces
    // ? solo una vez puede o no estar
    // exec resultado final 

    var cadena5='alumnos';
    var exp6=/alumn[oa](s)?/;

    //document.write(exp6.test(cadena5));
    //document.write('<br>');
    //document.write(exp6.exec(cadena5));


