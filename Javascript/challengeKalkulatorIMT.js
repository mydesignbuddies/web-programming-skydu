function hitungBMI (berat, tinggi) {
	var bmi = berat / (tinggi * tinggi);
	return bmi;
}
hitungBMI(80, 157);

// Cara Fungsi Lain
function hitungBMI(berat, tinggi) {
	var bmi = berat / Math.pow(tinggi, 2);
	return bmi;
}
hitungBMI(80, 157);

// Cara Lain dengan hasil tanpa desimal
function hitungBMI(berat, tinggi) {
	var bmi = berat / Math.pow(tinggi, 2);
	return Math.round(bmi);
}
hitungBMI(68, 1.7);