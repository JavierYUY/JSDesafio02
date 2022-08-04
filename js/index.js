let agenda = [
    {'dia': 'lunes', 'maniana': false, 'tarde': false},
    {'dia': 'martes', 'maniana': false, 'tarde': false},
    {'dia': 'miercoles', 'maniana': false, 'tarde': false},
    {'dia': 'jueves', 'maniana': false, 'tarde': false},
    {'dia': 'viernes', 'maniana': false, 'tarde': false}
]

function agendarDia(dia, man, tar){
    this.agendaDia = dia;
    this.agendaManiana = man;
    this.agendaTarde = tar;
    /*
    console.log(this.agendaDia)
    console.log(this.agendaManiana)
    console.log(this.agendaTarde)
    */
    if(this.agendaManiana == true){
        switch(this.agendaDia){
            case 'lunes':
                agenda[0].maniana = true;
                break;
            case 'martes':
                agenda[1].maniana = true;
                break;
            case 'miercoles':
                agenda[2].maniana = true;
                break;
            case 'jueves':
                agenda[3].maniana = true;
                break;
            case 'viernes':
                agenda[4].maniana = true;
                break;
            default:
                break;
        }



/*
        if(this.agendaDia == 'lunes'){
            agenda[0].maniana = true
        }

        if(this.agendaDia == 'martes'){
            agenda[1].maniana = true
        }
*/
        /*
        agenda.find(a => a.dia == this.agendaDia).maniana = this.agendaManiana;
        */
    }
    
    if(this.agendaTarde == true){
        switch(this.agendaDia){
            case 'lunes':
                agenda[0].tarde = true;
                break;
            case 'martes':
                agenda[1].tarde = true;
                break;
            case 'miercoles':
                agenda[2].tarde = true;
                break;
            case 'jueves':
                agenda[3].tarde = true;
                break;
            case 'viernes':
                agenda[4].tarde = true;
                break;
            default:
                break;
        }


        /*
        if(this.agendaDia == 'lunes'){
            agenda[0].tarde = true
        }

        if(this.agendaDia == 'martes'){
            agenda[1].tarde = true
        }*/
        //agenda.find(a => a.dia == this.agendaDia).tarde = this.agendaTarde;
    }

    //console.log(agenda);
}

let hora = "";
let diaSeleccionado = '';
/*
function botLunes(){
    //console.log('Entre en funcion de lunes');
    hora = prompt("Ingrese hora de la reserva (mañana - tarde)");
    diaSeleccionado  = agenda.find(a => a.dia = 'lunes')
    lunesMan = diaSeleccionado.maniana;
    lunesTar = diaSeleccionado.tarde;

    if(lunesMan == false || lunesTar == false){
        if (hora == "mañana") {
            if (lunesMan == false) {
                agendarDia('lunes', 'si', 'nulo');
                
                if(lunesTar == false){
                    colorearBoton('lunes', 'yellow');
                }else{
                    colorearBoton('lunes', 'red')
                }

                alert("Reserva Aceptada");
            }else{
                alert("Horario Ocupado, por favor ingrese otro horario");
            }
        }else if(hora == "tarde"){
            if (lunesTar == false) {
                agendarDia('lunes', 'nulo', 'si');

                if(lunesMan == false){
                    colorearBoton('lunes', 'yellow');
                }else{
                    colorearBoton('lunes', 'red')
                }

                alert("Reserva Aceptada");
            }else{
                alert("Horario Ocupado, por favor ingrese otro horario")
            }
        }
    }else{
        alert("El dia ya está ocupado");
    }
}*/


function divBoton(elDia){
    console.log(agenda)
    let mani = false;
    let tard = false;
    hora = prompt("Ingrese hora de la reserva (mañana - tarde)");
    //diaSeleccionado  = agenda.find(a => a.dia = elDia);

    switch(elDia){
        case 'lunes':
            diaSeleccionado = agenda[0];
            break;
        case 'martes':
            diaSeleccionado = agenda[1];
            break;
        case 'miercoles':
            diaSeleccionado = agenda[2];
            break;
        case 'jueves':
            diaSeleccionado = agenda[3];
            break;
        case 'viernes':
            diaSeleccionado = agenda[4];
            break;
        default:
            break;
    }
    /*
    console.log('dia seleccionado ' + diaSeleccionado.dia);
    console.log('mañana 0 ' + diaSeleccionado.maniana);
    console.log('tarde 0 ' + diaSeleccionado.tarde);
    */
    this.mani = diaSeleccionado.maniana;
    this.tard = diaSeleccionado.tarde;

    if(this.mani == false || this.tard == false){
        if (hora == "mañana") {
            if (this.mani == false) {
                if(this.tard == false){
                    console.log('tarde false 1')
                    agendarDia(elDia, true, false);
                    colorearBoton(elDia, 'yellow');
                }else{
                    console.log('tarde true 1')
                    agendarDia(elDia, true, true);
                    colorearBoton(elDia, 'red')
                }

                alert("Reserva Aceptada");
            }else{
                alert("Horario Ocupado, por favor ingrese otro horario");
            }
        }else if(hora == "tarde"){
            if (this.tard == false) {
                if(this.mani == false){
                    console.log('mani false 2')
                    agendarDia(elDia, false, true);
                    colorearBoton(elDia, 'yellow');
                }else{
                    console.log('mani true 2')
                    agendarDia(elDia, true, true);
                    colorearBoton(elDia, 'red')
                }

                alert("Reserva Aceptada");
            }else{
                alert("Horario Ocupado, por favor ingrese otro horario")
            }
        }
    }else{
        alert("El dia ya está ocupado");
    }
}

function colorearBoton(dia, color){
    let boton;
    switch (dia){
        case "lunes":
            boton = document.getElementById('divLunes')
            boton.style.backgroundColor = color;
            break;
        case "martes":
            boton = document.getElementById('divMartes')
            boton.style.backgroundColor = color;
            break;
        case "miercoles":
            boton = document.getElementById('divMiercoles')
            boton.style.backgroundColor = color;
            break;
        case "jueves":
            boton = document.getElementById('divJueves')
            boton.style.backgroundColor = color;
            break;
        case "viernes":
            boton = document.getElementById('divViernes')
            boton.style.backgroundColor = color;
            break;
        default: 
            break;
    }
}
