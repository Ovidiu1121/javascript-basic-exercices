console.log("test");
//  "12"==12 A   "12"===12 F

function inversNumar(numar) {


    let nou = 0;

    console.log("aici");
    while (numar !== 0) {
        let cifra = numar % 10;
        nou = nou * 10 + cifra;
        numar = Math.floor(numar / 10);

    }


    return nou;
}
/*Fişierul text bac.txt conţine, pe o singură linie, cel mult 1000 de numere naturale nenule
cu cel mult 4 cifre fiecare, numerele fiind separate prin câte un spaţiu. Scrieţi un program
C/C++ care citeşte de la tastatură un număr natural nenul n (n≤999) şi numerele din fişierul
bac.txt şi care afişează pe ecran, separate prin câte un spaţiu, toate numerele din fişier
care sunt divizibile cu n. Dacă fişierul nu conţine niciun astfel de număr, atunci se va afişa
pe ecran mesajul NU EXISTA.
Exemplu: dacă fişierul bac.txt conţine numerele: 3 100 40 70 25 5 80 6 3798,
pentru n=10 atunci pe ecran se va afişa: 100 40 70 80 */

// number text bool

function nrDivizibile() {
    let v = [3, 100, 40, 70, 25, 5, 80, 6, 3798];
    for (let i = 0; i < v.length; i++) {
        if (v[i] % 10 == 0) {
            console.log(v[i]);
        }
    }

}

/*Subprogramul sub, cu trei parametri, primeşte prin intermediul parametrilor:
– v un tablou unidimensional cu cel mult 100 de componente ce memorează numere
întregi de cel mult 4 cifre fiecare;
– n un număr natural nenul mai mic sau egal cu 100 ce reprezintă numărul efectiv de
componente ale tabloului primit prin intermediul parametrului v;
– a un număr întreg cu cel mult 4 cifre.
Subprogramul sub returnează numărul componentelor tabloului primit prin intermediul
parametrului v ale căror valori sunt strict mai mici decât valoarea parametrului a.
Exemplu: pentru valorile n=5, v=(1,21,9,21,403), a=20 ale parametrilor, în urma
apelului, subprogramului sub va returna valoarea 2.*/

function contorElemente() {

    let v = [1, 21, 9, 21, 403];
    let a = 20, ct = 0;

    for (let i = 0; i < v.length; i++) {
        if (v[i] < a) {
            ct++;
        }
    }
    console.log("nr aparitii:" + ct);

}

/*Fişierul text NR.TXT conţine pe o singură linie, separate prin câte un spaţiu, cel mult 100 de
numere întregi, fiecare număr având cel mult 4 cifre. Scrieţi un program C/C++ care citeşte
numerele din fişierul NR.TXT şi afişează pe ecran, separate prin câte un spaţiu, în ordine
crescătoare, toate numerele naturale nenule din fişier. Dacă nu există astfel de numere se
va afişa pe ecran mesajul NU EXISTA.
Exemplu: dacă fişierul NR.TXT conţine numerele: -3 -10 0 7 -5 7 51 -800 6 3798,
atunci pe ecran se va afişa: 6 7 7 51 3798 */

function numereNenule(){

  let v=[-3, -10, 0, 7, -5, 7, 51, -800, 6, 3798];

  for(let i=0;i<v.length-1;i++){
    if(v[i]>v[i+1]){
        let aux=v[i];
        v[i]=v[i+1];
        v[i]=aux;
    }
  }

}