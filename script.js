let input = prompt("Masukkan Angka Kamu")
let nilai = parseInt(input)

let hasil;
    if (input % 2 == 0) {
        hasil = "Angka Yang Kamu Masukkan " + nilai + " Adalah Angka Genap";
    }
    else {
        hasil = "Angka Yang Kamu Masukkan " + nilai + " Adalah Angka Ganjil";
    }

    alert(hasil);