var tahun = prompt("Tahun berapa yang mau dicek?");

function cekKabisat(tahun) {
	if(tahun / 4 === 0) {
		console.log ("Tahun Kabisat!");
	} else if (tahun / 100 === 0) {
		console.log ("Tahun Kabisat!");
	} else {
		console.log ("Bukan Tahun Kabisat");
  }
}

cekKabisat();  