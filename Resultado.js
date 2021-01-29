

var puntos = 0
var resultado = " "

// La función que calcula el puntaje

function puntaje(){


    for (let  i = 0; i < 104; i++) {

        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        puntos = checkboxes.length
    }


    
    if(puntos > 0 && puntos < 21 ){resultado = 'Golden Zone :)'}
    if(puntos > 20 && puntos < 36 ){resultado = 'Good, Go You!'}
    if( puntos > 35 && puntos < 51 ){resultado = 'Getting Dangerous…'}
    if(puntos > 50 && puntos < 70 ){ resultado = 'Dangerzone Entered.'}
    if(puntos > 69 && puntos < 76 ){ resultado = 'Extreme Danger! I hope you have a therapist'}
    if (puntos > 75 ){resultado = 'Death Zone!!! Are you alive? Wake up!!'}

    return puntos;

}

// La función que muestra el texto


/* function resultadoFinal(){


    

    return resultado;

} */



// La función muestra todo cuando le das al summit


function final() {

    puntaje()
    
    document.getElementById("puntaje").innerHTML = '<i class="em em-triangular_flag_on_post" aria-role="presentation" aria-label="TRIANGULAR FLAG ON POST"></i>' + puntos + ' Red flags <i class="em em-triangular_flag_on_post" aria-role="presentation" aria-label="TRIANGULAR FLAG ON POST"></i>'
    document.getElementById("resultado").innerHTML = resultado

  }
