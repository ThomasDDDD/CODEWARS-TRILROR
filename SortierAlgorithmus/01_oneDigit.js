console.clear();

let inNum = 862898;

function oneDigit(n) {
  n = String(n);
  let sumNum = 0;

  for (let i = 0; n.length > 0; i++) {
    sumNum += Number(n[0]);
    n = n.slice(1);
  }

  if (String(sumNum).length > 1) {
    oneDigit(sumNum);
  } else {
    console.log(sumNum);
    return sumNum;
  }
}
oneDigit(inNum);

/*
function oneDigit(n) {
  n = String(n); //*->Number to String - im zweiten durchlauf bekommt n den wert von sumNum
  let sumNum = 0; //*->Zischensumme wird pro Durchlauf auf 0 gesetzt
  ? Durchlauf und addition der digits:
  for (let i = 0; n.length > 0; i++) {
    //*-> solang die Länge von n größer 0 ist:
    sumNum += Number(n[0]); //*-> addiere zu sumnum die zur Number konvertierten n von indexstelle [0]
    n = n.slice(1); //*-> fülle n mit dem inhalt aus n ab indexstelle 1 ( schneide quasi die nullte Indexstelle ab )
  }
  ? überprüfung ob sumNum schon einstellig ist und neustart:
  if (String(sumNum).length > 1) {
    //*-> falls die länge von zum string konvertierten sumNum mehr wie eine stelle hat:
    oneDigit(sumNum); //*-> wird die function oneDigit(mit dem wert sumNum) erneut gestartet. sumNum wird somit an n übergeben.
  } else {
    console.log(sumNum); //*->ansonsten: (hier nur kontroll log)
    return sumNum; //*->//*-> gib die einstellige sumNum zurück
  }
}
oneDigit(inNum); //*-> Initialer start der function(mit dem übergebenen input Wert inNum)
*/
