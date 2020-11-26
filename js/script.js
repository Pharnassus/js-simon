$(document).ready(
  function() {

    // Un alert espone 5 numeri
    var memoria = [];
    var memoriaUtente = [];
    var risultato = [];

    while (memoria.length < 5) {
      var numeroCasuale100 = numeroCasuale(1, 100);

      // casuali diversi.
      var verifica = controllaSeIlNumeroEsisteGia(numeroCasuale100, memoria);
      if (verifica == false) {

        memoria.push(numeroCasuale100);
      }

    }

    alert('Ciao giocatore!' + '\n' + 'Avrai 30 secondi per ricordare i seguenti numeri: ' + memoria);

    // l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
    setTimeout(function () {
      alert('Ora inserisci i numeri i numeri che ricordi');

      while (memoriaUtente.length < 5) {
        var numeroInserito = parseInt(prompt('numero: '));

        var verifica = controllaSeIlNumeroEsisteGia(numeroInserito, memoriaUtente);
        if (verifica == false) {

          memoriaUtente.push(numeroInserito);
        }

      }

      // Una volta inseriti i 5 numeri,
      // il software dice quanti e quali numeri sono stati ricordati.
      for (var i = 0; i < memoriaUtente.length; i++) {
        var verifica = controllaSeIlNumeroEsisteGia(memoriaUtente[i], memoria);
        if (verifica == true) {

          risultato.push(memoriaUtente[i]);
        }
      }

      switch (risultato.length) {
        case 0:
          alert('Mi spiace, ma devi allenare di piu la tua memoria!' + '\n' + 'Non hai ricordato correttamente nemmeno un numero...');
          break;
        case 1:
          alert('Intelligente ma non si applica...' + '\n' + 'Hai ricordato correttamente solo un numero: ' + risultato);
          break;
        case 2:
          alert('Così così...' + '\n' + 'Hai ricordato correttamente 2 numeri: ' + risultato);
          break;
        case 3:
          alert('Sei sulla buona strada.' + '\n' + 'Hai ricordato correttamente 3 numeri: ' + risultato);
          break;
        case 4:
          alert('Ad un passo dalla perfezione!' + '\n' + 'Hai ricordato correttamente 4 numeri: ' + risultato);
          break;
        default:
          alert('ECCEZIONALE!!!' + '\n' + 'Hai ricordato correttamente tutti e 5 i numeri!' + '\n' + 'Numeri generati: ' + memoria + '\n' + 'Numeri ricordati: ' + risultato);
      }

      //Dopo 30 secondi
    }, 5000);

    // alert('numeri generati random: ' + memoria + '\n' + 'numeri inseriti dall\'utente: ' + memoriaUtente);


  }
);


//-----------------------------------------------------------------------------------------------------
// FUNZIONI
//-----------------------------------------------------------------------------------------------------
function numeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//-------------------------------------------------------------------------------------

function controllaSeIlNumeroEsisteGia(numero, array) {
  var trovato = false;
  for (var i = 0; i < array.length; i++) {

    if (numero == array[i]) {
      trovato = true;
    }
  }
  if (trovato == true) {
    return true;
  } else {
    return false;
  }
}


//-----------------------------------------------------------------------------------------------------
