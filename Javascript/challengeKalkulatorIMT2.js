function hitungBMI(berat, tinggi) {
	var berat = 80;
	var tinggi = 1.57;
	return bmi = berat / Math.pow(tinggi, 2);

	if(bmi < 18.5) {
		console.log ("IMT kamu adalah " + bmi + " , berat badan kamu kkurang");
	} else if (bmi > 18.5 && 24.9) {
		console.log("IMT kamu adalah " + bmi + ", kamu punya berat badan yang normal");
	} else {
		console.log ("IMT kamu adalah " + bmi + ", kamu kegemukan");
	}
}
