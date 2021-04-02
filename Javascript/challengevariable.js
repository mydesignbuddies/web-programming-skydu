function test() {
  var a = "2";
  var b = "7";

  /***** tidak boleh merubah kode diatas *****/
  var c = a;
  a = b;
  b = c;
  // tulis kode kamu disini

  /***** tidak boleh merubah kode dibawah *****/
  console.log("a adalah " + a);
  console.log("b adalah " + b);
}
test();