/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/

function dataHandling(biodata) {
  for (let i = 0; i < biodata.length; i++) {
    for (let j = 0; j < biodata[i].length; j++) {
      if (j == 0) {
        console.log("Nomor ID: " + biodata[i][j]);
      } else if (j == 1) {
        console.log("Nama Lengkap: " + biodata[i][j]);
      } else if (j == 2) {
        console.log("TTL: " + biodata[i][2] + " " + biodata[i][3]);
      } else if (j == 4) {
        console.log("Hobi: " + biodata[i][4]);
      }
    }
    console.log(" ");
  }
}

dataHandling(input);

let input2 = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling2(input) {
 // ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
  input.splice(
    1,
    4,
    "Roman Alamsyah Elsharawy",
    "Provinsi Bandar Lampung",
    "21/05/1989",
    "Pria",
    "SMA Internasional Metro"
  );
  console.log(input);

 // Mei
  let tanggal = input[3];
  let arraySplit = tanggal.split('/');

  if(arraySplit[1] == "05") {
    console.log("Mei");
  }

 // ["1989", "21", "05"]
  let reverseTanggal = [arraySplit[2], arraySplit[1], arraySplit[0]];
  console.log(reverseTanggal);

 // 21-05-1989
  console.log(arraySplit[0] + "-" + arraySplit[1] + "-" + arraySplit[2]); 

 // Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
  let name = input[1];
  let newName = name.slice(0,15)
  console.log(newName);
}

dataHandling2(input2);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
