function elegirGruposDeLectura() {
  const usuario = prompt("ingrese un nombre de usuario");
  const correo = prompt("ingrese su correo electronico");

  alert("hola " + usuario + " ya estas registrado, te enviaremos un correo de confirmacion a: " + correo);

  let unirseDeNuevo = true;
  do {
    let grupoDeLectura = Number(
      prompt(
        "ingrese el numero de grupo de lectura al que desea unirse: 1)Policiales 2)Ciencia Ficcion 3)Historia 4)Medievales 5)Musica 6)Crecimiento Personal"
      )
    );

    switch (grupoDeLectura) {
      case 1:
        unirseDeNuevo = confirm(
          "te has unido con exito al grupo de lectura Policiales, deseas unirte a otro grupo?"
        );
        break;
      case 2:
        unirseDeNuevo = confirm(
          "te has unido con exito al grupo de lectura Ciencia Ficcion, deseas unirte a otro grupo?"
        );
        break;
      case 3:
        unirseDeNuevo = confirm(
          "te has unido con exito al grupo de lectura Historia, deseas unirte a otro grupo?"
        );
        break;
      case 4:
        unirseDeNuevo = confirm(
          "te has unido con exito al grupo de lectura Medievales, deseas unirte a otro grupo?"
        );
        break;
      case 5:
        unirseDeNuevo = confirm(
          "te has unido con exito al grupo de lectura Musica, deseas unirte a otro grupo?"
        );
        break;
      case 6:
        unirseDeNuevo = confirm(
          "te has unido con exito al grupo de lectura Crecimiento Personal, deseas unirte a otro grupo?"
        );
        break;
      default:
        unirseDeNuevo = alert(
          "ingresa un numero entre 1 y 6 para unirte a un grupo"
        );
        break;
    }
  } while (unirseDeNuevo);
  {
    alert("gracias por unirte a nuestros grupos de lectura");
  }
}
elegirGruposDeLectura()