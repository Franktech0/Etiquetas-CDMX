//recibe el arreglo [2, 3, 6, 10, 1, 1] la suma es 23 y no es par
var cont = document.getElementById('contenedor');
var array = [2,3,4,5,6,7,8,9];
var calculateMaxEvenSum;


function init()
{

    calculateMaxEvenSum = function Maximo(a)
    {
        
        var SumArray = new Array();
        SumArray = array;
        var suma = 0;

        for(var i = 0; i<SumArray.length; i++)
        {
            suma += parseInt(SumArray[i]);
        }
        console.log(suma);
    }
    alert("La sumad de las etiquetas es: "+suma);

    if(suma%2 != 0)
    {
        alert("la suma de las etiquetas no es PAR" );
    }
    else
    {
        alert("la sumad de las etiquetas es PAR");
    }
    

}

