function contadorP(oracion)
{  
    var palabras=oracion.split(" ");
    var conteo = {};
    for(var i=0; i<palabras.length; i++)
    {
        var palabra=palabras[i]
        if(conteo[palabra])
        {
            conteo[palabra]++;
        }
        else
        {
            conteo[palabra] = 1;
        }
    }
    return conteo;
}

export default contadorP;

