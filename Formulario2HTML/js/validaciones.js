const nombre = document.getElementById('nombre')
const apellidos = document.getElementById('apellidos')
const edad = document.getElementById('edad')
const calle = document.getElementById('calle')
const colonia = document.getElementById('colonia')
const numero = document.getElementById('numero')
const cp = document.getElementById('cp')
const celular = document.getElementById('celular')
const ao = document.getElementById('ao')
const mes = document.getElementById('mes')
const dia = document.getElementById('dia')

const parrafo = document.getElementById('warnings')
const enviado = document.getElementById('formulario');


enviado.addEventListener("submit", e =>{
    console.log("submit activado");
    e.preventDefault()
    var warnings = ""
    let mensaje = false
    parrafo.innerHTML= ""

    let regexname = /^[a-zA-ZÀ-ÿ\s]{1,20}$/
    let regexapellidos = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    let regexedad = /^([0-9]){1,2}$/
    let regexcalle = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    let regexcolonia = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    let regexnumero = /^([0-9]){1,4}$/
    let regexcp = /^([0-9]){1,6}$/
    let regexcelular = /^\d{7,14}$/
    let regexao = /^\d{4}$/
    let regexmes = /^(0?[1-9]|1[0-2])$/
    let regexdia = /^(0?[1-9]|[12][0-9]|3[01])$/

    if (!regexname.test(nombre.value)) {
        warnings += 'El nombre no es correcto <br>'
        mensaje = true
    }
    if (!regexapellidos.test(apellidos.value)) {
        warnings += 'El apellido no es correcto <br>'
        mensaje = true
    }
    if (!regexedad.test(edad.value)) {
        warnings += 'La edad no es correcta <br>'
        mensaje = true
    }
    if (!regexcalle.test(calle.value)) {
        warnings += 'La calle no es correcta <br>'
        mensaje = true
    }
    if (!regexcolonia.test(colonia.value)) {
        warnings += 'La colonia no es correcta <br>'
        mensaje = true
    }
    if (!regexnumero.test(numero.value)) {
        warnings += 'El numero no es correcto <br>'
        mensaje = true
    }
    if (!regexcp.test(cp.value)) {
        warnings += 'El codigo postal no es correcto <br>'
        mensaje = true
    }
    if (!regexcelular.test(celular.value)) {
        warnings += 'El celular no es correcto <br>'
        mensaje = true
    }
    if (!regexao.test(ao.value)) {
        warnings += 'El año no es correcto <br>'
        mensaje = true
    }
    if (!regexdia.test(dia.value)) {
        warnings += 'El dia no es correcto <br>'
        mensaje = true
    }
    if (!regexmes.test(mes.value)) {
        warnings += 'El mes no es correcto <br>'
        mensaje = true
    }

    if (mensaje) {
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = 'Datos correctos!';
      
        //Ya que los datos son correctos podemos mostrarlos en esta seccion
        //Recogemos los datos a usar
        const nombreV = document.getElementById('nombre').value;
        const apellidosV = document.getElementById('apellidos').value;
        const edadV = document.getElementById('edad').value;
        const calleV = document.getElementById('calle').value;
        const coloniaV = document.getElementById('colonia').value;
        const numeroV = document.getElementById('numero').value;
        const cpV = document.getElementById('cp').value;
        const celularV = document.getElementById('celular').value;
        const aoV = document.getElementById('ao').value;
        const mesV = document.getElementById('mes').value;
        const diaV = document.getElementById('dia').value;
        const gustos1 = document.getElementById("gustos1").checked;
        const gustos2 = document.getElementById("gustos2").checked;
        const gustos3 = document.getElementById("gustos3").checked;
        const gustos4 = document.getElementById("gustos4").checked;
        const gustos5 = document.getElementById("gustos5").checked;
        const deportes = [];
        const deportesSeleccionados = document.querySelectorAll('select[name="deportes"] option:checked');
        for (var i = 0; i < deportesSeleccionados.length; i++) {
            deportes.push(deportesSeleccionados[i].value);
        }
        const generoPeliculas = document.getElementById("genero-peliculas").value;
        const peliculaFavorita = document.getElementById("pelicula-favorita").value;

        const actividad = document.getElementById("preguntaActividad").value;
        const dedicas = document.getElementById("preguntaDedicas").value;


        //Creamos una ventana que contendra la informaci'on recolectada del formulario
        const newWindow = window.open("", "newWindow", "width=1100,height=600");
        newWindow.document.write(`<h1>Datos de contacto</h1>`);
        
        //
        agregarImagen();
  // Agregar los elementos de texto a la ventana
  
        
        newWindow.document.write(`<table>`);
    //Encabezados
    newWindow.document.write(`<tr>`);

    newWindow.document.write(`<th style="background-color: #FFCC00; color: white; font-weight: bold; font-size: 24px; padding: 10px;">Nombre</th>`);
    newWindow.document.write(`<th style="background-color: #FF6600; color: white; font-weight: bold; font-size: 24px; padding: 10px;">Apellido</th>`);
    newWindow.document.write(`<th style="background-color: #FFCC00; color: white; font-weight: bold; font-size: 24px; padding: 10px;">Edad</th>`);
    newWindow.document.write(`<th style="background-color: #FF6600; color: white; font-weight: bold; font-size: 24px; padding: 10px;">Calle</th>`);
    newWindow.document.write(`<th style="background-color: #FFCC00; color: white; font-weight: bold; font-size: 24px; padding: 10px;">Colonia</th>`);
    newWindow.document.write(`<th style="background-color: #FF6600; color: white; font-weight: bold; font-size: 24px; padding: 10px;">Número</th>`);
    newWindow.document.write(`<th style="background-color: #FFCC00; color: white; font-weight: bold; font-size: 24px; padding: 10px;">CP</th>`);
    newWindow.document.write(`<th style="background-color: #FF6600; color: white; font-weight: bold; font-size: 24px; padding: 10px;">Celular</th>`);
    newWindow.document.write(`<th style="background-color: #FFCC00; color: white; font-weight: bold; font-size: 24px; padding: 10px;">Fecha de nacimiento</th>`);
    newWindow.document.write(`<th style="background-color: #FF6600; color: white; font-weight: bold; font-size: 24px; padding: 10px;">Gustos</th>`);
    newWindow.document.write(`<th style="background-color: #FFCC00; color: white; font-weight: bold; font-size: 24px; padding: 10px;">Género de películas</th>`);
    newWindow.document.write(`<th style="background-color: #FF6600; color: white; font-weight: bold; font-size: 24px; padding: 10px;">Película favorita</th>`);
    newWindow.document.write(`<th style="background-color: #FFCC00; color: white; font-weight: bold; font-size: 24px; padding: 10px;">Actividades</th>`);
    newWindow.document.write(`<th style="background-color: #FF6600; color: white; font-weight: bold; font-size: 24px; padding: 10px;">Profesión/ Trabajo</th>`);

    newWindow.document.write(`</tr>`);
    //Datos del contacto
    newWindow.document.write(`<tr>`);

    newWindow.document.write(`<td style="background-color: #FF9933; color: white; font-weight: bold; font-size: 20px; padding: 10px;">${nombreV}</td>`);
    newWindow.document.write(`<td style="background-color: #FF3300; color: white; font-weight: bold; font-size: 20px; padding: 10px;">${apellidosV}</td>`);
    newWindow.document.write(`<td style="background-color: #FF9933; color: white; font-weight: bold; font-size: 20px; padding: 10px;">${edadV}</td>`);
    newWindow.document.write(`<td style="background-color: #FF3300; color: white; font-weight: bold; font-size: 20px; padding: 10px;">${calleV}</td>`);
    newWindow.document.write(`<td style="background-color: #FF9933; color: white; font-weight: bold; font-size: 20px; padding: 10px;">${coloniaV}</td>`);
    newWindow.document.write(`<td style="background-color: #FF3300; color: white; font-weight: bold; font-size: 20px; padding: 10px;">${numeroV}</td>`);
    newWindow.document.write(`<td style="background-color: #FF9933; color: white; font-weight: bold; font-size: 20px; padding: 10px;">${cpV}</td>`);
    newWindow.document.write(`<td style="background-color: #FF3300; color: white; font-weight: bold; font-size: 20px; padding: 10px;">${celularV}</td>`);
    newWindow.document.write(`<td style="background-color: #FF9933; color: white; font-weight: bold; font-size: 20px; padding: 10px;">${diaV} / ${mesV} / ${aoV}</td>`);

    newWindow.document.write(`<td style="background-color: #FF3300; color: white; font-weight: bold; font-size: 20px; padding: 10px;">`);
    if (gustos1) { newWindow.document.write(`Leer `); }
    if (gustos2) { newWindow.document.write(`Dormir `); }
    if (gustos3) { newWindow.document.write(`Comprar articulos `); }
    if (gustos4) { newWindow.document.write(`Salir de casa`); }
    if (gustos5) { newWindow.document.write(`Viajar`);}
    newWindow.document.write(`</td>`);
    newWindow.document.write(`<td style="background-color: #FF9933; color: white; font-weight: bold; font-size: 20px; padding: 10px;">${generoPeliculas}</td>`);
    newWindow.document.write(`<td style="background-color: #FF3300; color: white; font-weight: bold; font-size: 20px; padding: 10px;">${peliculaFavorita}</td>`);
    newWindow.document.write(`<td style="background-color: #FF9933; color: white; font-weight: bold; font-size: 20px; padding: 10px;">${actividad}</td>`);
    newWindow.document.write(`<td style="background-color: #FF3300; color: white; font-weight: bold; font-size: 20px; padding: 10px;">${dedicas}</td>`);
    newWindow.document.write(`</tr>`);
    
    newWindow.document.write(`</table>`);
     
    
    //
    
        
          
    }
    //console.log(warnings);

});

const inputFile = document.getElementById("imagen");
inputFile.addEventListener("change", function() {
  const previewImage = document.getElementById("preview-image");
  const file = inputFile.files[0];
  const reader = new FileReader();
  reader.onloadend = function() {
    previewImage.src = reader.result;
  }
  if (file) {
    reader.readAsDataURL(file);
  } else {
    previewImage.src = "";
  }
});







