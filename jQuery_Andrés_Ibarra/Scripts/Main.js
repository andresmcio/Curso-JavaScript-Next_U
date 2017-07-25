// JSON de estudiantes

var students = [];

//Funci�n de registro 

function register() {

    var code = $("#_code").val();
    var names = $("#names").val();
    var grades = parseFloat($("#grades").val());

    if (code != "" && names != "" && grades != "") {
        var _newStudent = {
            "codigo": code,
            "nombres": names,
            "nota": grades,
        };

        students.push(_newStudent);

        $("#hideable").css('visibility', 'visible');

        console.log("C�digo: " + code + "Nombre: " + names + "Nota: " + grades);

        //Bloques para crear los nuevos campos de la tabla

        var _tBody = $("#students"); //Para crear y asignar nuevos elementos a la tabla

        var newRow = $("<tr></tr>");

        //Crea una nueva celda para la columna c�digo
        var newCodeCell = $("<td></td>").text(code);
        newRow.append(newCodeCell);

        //Crea una nueva celda para la columna Nombre
        var newNameCell = $("<td></td>").text(names);;
        newRow.append(newNameCell);

        //Crea una nueva celda para la columna Nota

        var newGradeCell = $("<td></td>").text(grades);
        newRow.appendChild(newGradeCell);

        _tBody.append(newRow);
    } else {
        alert("Por favor ingrese todos los datos del estudiante"); 
    }
}

//Funci�n para calcular nota promedio del curso

function average(json) {

    if (json.length > 1) {

        var grdSum = 0;

        for (var i = 0; i < json.length; i++) {  

            grdSum += parseFloat(json[i].nota);
        }
        var avgGrade = grdSum / json.length;

        alert("La nota promedio de la clase es: " + avgGrade);
    } else {
        alert("Registre un minimo de dos estudiantes");
    }
}

//Se declara una funci�n adicional que llama la funci�n para calcular el promedio con el par�metro correspondiente, debido a comportamiento err�neo al hacerlo directamente en el event listener

function averageCall(){
    average(students);
}

//Funci�n para hallar la nota m�s alta

function hghGrade(json) {
    if (json.length > 1) {
        var text = "";
        var maxGrade = 0;
        var thisGrade = 0;
        for (var i = 0; i < json.length; i++) {
            thisGrade = parseFloat(json[i].nota);
            if (maxGrade < thisGrade) {
                maxGrade = thisGrade;
            text = json[i].nombres + " con codigo " + json[i].codigo + " y su nota es " + json[i].nota;
        }
    }
    alert("El estudiante con la mejor nota es: " + text);
} else {
        alert("Registre un minimo de dos estudiantes");
}
}

//Funci�n de llamada a la funci�n de nota m�s alta con el par�metro correspondiente (Objeto JSON estudiantes). Raz�n igual a funci�n anterior.

function hghGrdCall() {
    hghGrade(students);
}

//Funci�n para hallar la nota menor.

function wrstGrade(json) {
    if (json.length > 1) {
        var text = "";
        var minGrade = 1000;
        var thisGrade = 0;
        for (var i = 0; i < json.length; i++) {
            thisGrade = parseFloat(json[i].nota);
            if (minGrade > thisGrade) {
                minGrade = thisGrade;
                text = json[i].nombres + " con codigo " + json[i].codigo + " y su nota es " + json[i].nota;
            }
        }
        alert("El estudiante con la nota mas baja es: " + text);
    } else {
        alert("Registre un minimo de dos estudiantes");
    }
}

//Funci�n de llamada para el eventListener

function wrstGrdCall() {
    wrstGrade(students);
}

//Adici�n de eventos onclick

$("#registerbttn").click(function () {
    register();
});

$("#avgGrade").click(function () {
    averageCall()
});

$("#hghGrade").click(function () {
    hghGrdCall()
});

$("#wstGrade").click(function () {
    wrstGrdCall()
});