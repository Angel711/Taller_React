var cartas = [
    'uno',
    'dos',
    'tres',
    'cuatro',
    'cinco',
    'seis',
    'siete',
    'ocho',
    'nueve',
    'diez',
    'reina',
    'jota',
    'as',
    'rey',
    'escudero',
    'caballo',
];
var frances = ['corazones', 'tréboles', 'diamantes', 'picas'];
var espanol = ['monedas', 'copas', 'espadas', 'bastones'];
var suizo = ['escudos', 'rosas', 'campanas', 'bellotas'];

function mazo(tipo) {
    let mazo = [];
    let mazoEspanol = cartas.slice();
    let mazoSuizo = cartas.slice(5, 16);
    mazoEspanol.splice(10, 3);
    mazoSuizo.splice(5, 3);
    if (tipo == 'frances') {
        for (var i = 0; i < frances.length; i++) {
            for (var j = 0; j < 14; j++) {
                mazo.push(cartas[j] + '_de_' + frances[i]);
            }
        }
    } else if (tipo == 'espanol') {
        for (var i = 0; i < espanol.length; i++) {
            for (var j = 0; j < mazoEspanol.length; j++) {
                mazo.push(mazoEspanol[j] + '_de_' + espanol[i]);
            }
        }
    } else if (tipo == 'suizo') {
        for (var i = 0; i < suizo.length; i++) {
            for (var j = 0; j < mazoSuizo.length; j++) {
                mazo.push(mazoSuizo[j] + '_de_' + suizo[i]);
            }
        }
    }
    return mazo;
}

console.log(mazo('suizo'));