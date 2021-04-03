function hitungSisaUmur(umur) {
   
   // tulis kode kamu disini
   var sisaTahun = 1990 - umur;
   var hari = sisaTahun - 365;
   var minggu = sisaTahun - 52;
   var bulan = sisaTahun * 12;


   console.log("umur kamu tersisa " + hari + " hari " + minggu + " minggu " + bulan + " bulan");

}

hitungSisaUmur(29);
