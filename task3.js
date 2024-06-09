// 1.
function cekKecepatan() {
  return new Promise((resolve, reject) => {
    const waktu = 6000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("Kecepatan OK!");
      }, waktu);
    } else {
      setTimeout(() => {
        reject(new Error("Kecepatan NOT OKE!"));
      }, waktu);
    }
  });
}

const kecepatan = cekKecepatan();

kecepatan
  .then((kecepatan) => console.log(kecepatan))
  .catch((kecepatan) => console.log(kecepatan));

// 2.
const makanan = ["Nasi Goreng", "Sate", "Soto"];
const makananEnak = function (food) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (makanan.includes(food)) {
        resolve(`Jenis makanan ${makanan} termasuk makanan enak`);
      } else {
        reject(new Error(`Jenis makanan ${makanan} biasan aja rasa makanan`));
      }
    }, 1000);
  });
};

makananEnak("Sate")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
