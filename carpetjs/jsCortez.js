function comprobar_usuarios() {
    usu = document.formulario1.usuario.value;
    pass = document.formulario1.password.value;

    switch (usu) {
        case 'CortezJesus':
            if (pass ==='eduardoCortez') {
                alert('Bienvenido a cineplanet ' + usu + " , espero que estes muy bien ");
                location='../html/indexCortez.html'
            }else{
                alert(usu +' tu clave esta errada...')
                document.formulario1.password.focus();
                document.formulario1.password.select();
            }
            break;

            case 'YadhiraSavedra':
            if (pass === 'yadhi123') {
                alert('Bienvenido a cineplanet ' + usu + " , espero que estes muy bien ");
                location='indexCortez.html'
            }else{
                alert(usu +' tu clave esta errada...')
                document.formulario1.password.focus();
                document.formulario1.password.select();
            }
            break;
            case 'VanesaAguilar':
            if (pass === 'vanesa123') {
                alert('Bienvenido a cineplanet ' + usu + " , espero que estes muy bien ");
                location='indexCortez.html';
            }else{
                alert(usu +' tu clave esta errada...')
                document.formulario1.password.focus();
                document.formulario1.password.select();
            }
            break;

            case 'Kevin':
            if (pass = 'kevin123') {
                alert('Bienvenido a cineplanet ' + usu + " , espero que estes muy bien ");
                location = 'indexCortez.html';
            }else{
                alert(usu +' tu clave esta errada...')
                document.formulario1.password.focus();
                document.formulario1.password.select();
            }
            break;

            default:
                alert('Usted no esta registrado...')
                document.formulario1.usuario.focus();
                document.formulario1.password.select();

    }

}