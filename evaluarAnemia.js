
// Crear un objeto por paciente
var P1 = {
    Nombre: 'Eduardo',
    edad: 29,
    sexo: 'h',
    nHemo: 15
};
var P2 = {
    Nombre: 'Elena',
    edad: 17,
    sexo: 'm',
    nHemo: 16
};
var P3 = {
    Nombre: 'Luis',
    edad: 36,
    sexo: 'h',
    nHemo: 8
};
// Array con los pacientes
var Pacientes = [P1, P2, P3];

// Contar el numero de pacientes
var flen = Pacientes.length;
// Identificar el grupo de edad
function gr(x) {
    var t = [];
    t[0] = (x > 0.5 && x <= 1);
    t[1] = (x > 1 && x <= 5);
    t[2] = (x > 5 && x <= 10);
    t[3] = (x > 10 && x <= 15);
    t[4] = (x > 15);
    return t;
}
//Identificar nivel de hemoglobina para cada tipo de paciente
function he_h(x) {
    var t = [];
    t[0] = (x < 11);
    t[1] = (x < 11.5);
    t[2] = (x < 12.6);
    t[3] = (x < 13);
    t[4] = (x < 14);
    return t;
}
function he_m(x) {
    var t = [];
    t[0] = (x < 11);
    t[1] = (x < 11.5);
    t[2] = (x < 12.6);
    t[3] = (x < 13);
    t[4] = (x < 12);
    return t;
}

// Funcion para evaluar a un paciente
function evaluar(P) {
    var grupo = gr(P.edad);
    if (P.sexo == 'm') {
        var nivel = he_m(P.nHemo);
        }
    else {
        var nivel = he_h(P.nHemo);
        }
    var l = grupo.length;
    for (i = 0; i < l; i++)
    {
        // Si coincide el grupo y condicion emitir alerta
        var enfermo = 0;
        if (grupo[i] && nivel[i]){
            var alerta = 'El/La paciente ' + P.Nombre + ' tiene anemia';
            alert(alerta);
            var enfermo = 1;
            }

    }
    if (enfermo != 1){
        var alerta = 'El/La paciente ' + P.Nombre + ' NO tiene anemia';
        alert(alerta);
    }
}

// Evalua nuevo paciente
function evaluar2() {
    var edad = document.getElementById("Edad").value;
    var Nombre = document.getElementById("Nombre").value;
    var sexo = document.getElementById("Sexo").value;
    var nHemo = document.getElementById("Nivel").value;
    
    if (edad && Nombre && sexo && nHemo) 
        {
            var grupo = gr(edad);
            if ((sexo == 'mujer') || (sexo == 'Mujer') || (sexo = 'm')) {
                var nivel = he_m(nHemo);
                }
            else {
                var nivel = he_h(nHemo);
                }
            var l = grupo.length;
            for (i = 0; i < l; i++)
            {
                // Si coincide el grupo y condicion emitir alerta
                var enfermo = 0;
                if (grupo[i] && nivel[i]){
                    var alerta = 'El/La paciente ' + Nombre + ' tiene anemia';
                    alert(alerta);
                    var enfermo = 1;
                    }

            }
            if (enfermo != 1){
                var alerta = 'El/La paciente ' + Nombre + ' NO tiene anemia';
                alert(alerta);
            }
        }
    else{
        alert('Ingrese todos los datos');
    }
}