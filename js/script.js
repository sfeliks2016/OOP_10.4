// funkcja konstruujaca (klasa)

function Telefon(marka, model, cena, kolor, sklep1, sklep2, status1, status2) {
    'use strict';
    this.marka = marka;
    this.model = model;
    this.cena = cena;
    this.kolor = kolor;
    this.sklep1 = sklep1;
    this.sklep2 = sklep2;
    this.status1 = status1;
    this.status2 = status2;
}

// za pomocą Prototypu - tworzenie dla klasy Telefon metody o nazwie printInfo opisującej telefon za pomocą console.log().

Telefon.prototype.printInfo = function () {
    'use strict';
    console.log('Marka telefonu to ' + this.marka + ' kolor to ' + this.kolor + ' a cena to ' + this.cena + '.');
};

// moj prototyp

Telefon.prototype.stockInfo = function () {
    'use strict';
    console.log('salon sprzedazy: ' + this.sklep1 + ' telefon ' + this.model + ' dostepnosc: ' + this.status1);
    console.log('salon sprzedazy: ' + this.sklep2 + ' telefon ' + this.model + ' dostepnosc: ' + this.status2);
};

// tworzenie obiektów
//Samsung Galaxy S6
//iPhone 6s
//OnePlus One.

var GalaxyS6 = new Telefon('Samsung','GalaxyS 6', 2600, 'srebrny', 'katowice', 'poznan', 'wyprzedany', 1),
    iPhone6s = new Telefon('Apple','iPhone 6s', 3100, 'niebieski', 'katowice', 'poznan', 3, 5),
    OnePlusOne = new Telefon('OnePlus','OnePlus One', 1300, 'czarny', 'katowice', 'poznan', 2, 'wyprzedany');


// wywolanie metod dodanych za pomocą prototypu

GalaxyS6.printInfo();
iPhone6s.printInfo();
OnePlusOne.printInfo();

console.log(''); // pusty log oddziela zadanie dodatkowe

GalaxyS6.stockInfo();
iPhone6s.stockInfo();
OnePlusOne.stockInfo();

