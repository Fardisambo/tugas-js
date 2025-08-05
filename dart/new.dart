// class kucing {
//   String nama;
//   String warna = 'putih';
//   kucing(this.nama, this.warna);

//   void perkenalan() {
//     print("Halo, saya kucing bernama $nama, saya berwarna $warna.");
//   }
// }

// void main() {
//   var kucingA = kucing('kitty', 'warna');
//   kucingA.perkenalan();
// }

// class Hewan{
//   void makan() {
//     print("Hewan ini sedang makan.");
//   }
// }

// class Kucing extends Hewan {

//   void suara() {
//     print("Kucing ini bersuara meong.");
//   }
// }

// void main() {
//   var kitty = Kucing();
//   kitty.makan();
//   kitty.suara();
// }

// class hewan {
//   void hidup() {
//     print("Hewan ini sedang terbang.");
//   }
// }

// mixin Terbang {
//   void terbang() {
//     print("Terbang di langit.");
//   }
// }

// class Elang extends hewan with terbang {
//   void main() {
//     var e = Elang();
//     e.hidup();
//     e.terbang();
//   }
// }

//enum

// class Siswa {
//   String nama;
//   Siswa(this.nama);
// }

// extension SapaSiswa on Siswa {
//   void sapa() {
//     print("Halo, $nama Siswa Rpl!");
//   }
// }

// void main() {
//   var siswaA = Siswa('Budi');
//   siswaA.sapa();
  
//   var siswaB = Siswa('Ani');
//   siswaB.sapa();
// }

// class Produk {
//   String nama;
//   int harga;

//   Produk(this.nama, this.harga);

//   void info() {
//     print(
//       "produk: $nama, harga: ${harga.toString().replaceAllMapped(RegExp(r'(\d{1,3})(?=(\d{3})+(?!\d))'), (Match m) => '${m[1]}.')}",
//     );
//   }
// }

// void main() {
//   var laptop = Produk('laptop', 5000000);
//   laptop.info();
// }

// mixin Lembur {
//   void leburjam(int jam) {
//     if (jam > 2) {
//       print("lembur: tambahan gaji");
//     } else {
//       print("lembur: tidak cukup lama");
//     }
//   }
// }

// class Staff with Lembur {
  
// }

// void main() {
//   var staff1 = Staff();
//   staff1.leburjam(3); 
//   staff1.leburjam(2); 
// }



enum JenjangPendidikan { sd, smp, sma, kuliah }

void main() {
  JenjangPendidikan jenjang = JenjangPendidikan.sd;

  switch (jenjang) {
    case JenjangPendidikan.sd:
      print('Anda di jenjang SD');
      break;
    case JenjangPendidikan.smp:
      print('Anda di jenjang SMP');
      break;
    case JenjangPendidikan.sma:
      print('Anda di jenjang SMA');
      break;
    case JenjangPendidikan.kuliah:
      print('Anda di jenjang Kuliah');
      break;
  }
}
