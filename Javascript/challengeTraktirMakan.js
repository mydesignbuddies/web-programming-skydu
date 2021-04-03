var daftarNama = [ "Retno", "Bambang", "Hadi", "Aulia", "Annisa", "Budi" ];
function siapaTraktir(daftarNama) {
// tulis kode kamu disini
	var jumlahOrang = daftarNama.length;
	var nomorTerpilih = Math.floor(Math.random(0, jumlahOrang)*jumlahOrang);
	var namaTerpilih = daftarNama[nomorTerpilih];

	return namaTerpilih + " yang traktir makan siang hari ini";
}
siapaTraktir(daftarNama);
