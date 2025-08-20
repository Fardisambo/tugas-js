// HEWANNNNN

// class Burung {
//     constructor(nama) {
//         this.nama = nama;
//     }
//     bersuara() {
//         console.log(`${this.nama} bersuara cuit cuit`);
//     }
// }

// class Ayam extends Burung {
//     bersuara() {
//         console.log(`${this.nama} bersuara kukuruyuk`);
//     }
// }

// class Bebek extends Burung {
//     bersuara() {
//         console.log(`${this.nama} bersuara kwek kwek`);
//     }
// }

// class Rangga extends Burung {
//     bersuara() {
//         console.log(`${this.nama} bersuara Dakotkot`);
//     }
// }

// const daftarBurung = [new Ayam("Kate"), new Bebek("Carok"), new Burung("Dara"), new Rangga("Rangga")];

// daftarBurung.forEach(burung => {
//     burung.bersuara();
// });



//MATEMATIKA

// class Matematika {
//     static pi = 3.14159;

//     static luasLingkaran(jari) {
//     return this.pi * jari * jari;
//     }
// }

// console.log(Matematika.luasLingkaran(1000));








// MAHASISWAAAA

// class Mahasiswa {
//     #nama;

//     constructor(nama) {
//         this.#nama = nama;
//     }

//     get nama () {
//         return this.#nama.toUpperCase();
//     }

//     set nama (value) {
//         if(value.length < 3) {
//             console.log("Nama terlalu pendek!");
//             return;
//         }
//         this.#nama = value;
//     }
// }

// const mhs = new Mahasiswa("Ari");

// console.log(mhs.nama);

// mhs.nama = "li";
// mhs.nama = "Putri";
// console.log(mhs.nama);