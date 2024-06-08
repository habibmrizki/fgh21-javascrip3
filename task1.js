const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day.toLowerCase();
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

cekHariKerja("Senin") //memanggil cekHariKerja
  .then((data) => {
    //ketika masuk ke then masuk ke state fullfiled karena berhasil mendapatkan value dari resolve
    console.log(`Sekarang hari ${data}. Selamat bekerja!`);
  }) //karena terjadi kesalahan tidak sesuai data
  .catch((error) => {
    console.log(error.message);
  });

const cekHariKerjaAsyn = async (day) => {
  try {
    //jalankan suatu code jika berhasil
    const data = await cekHariKerja(day); // menunggu promise selesai dulu. Ketika selesai, hasil resolve akan di masukkan ke variable data
    console.log(`Sekarang hari ${data}. Selamat bekerja!`); //ngeconsole untuk ${data}
  } catch (error) {
    //jika prose gagal
    console.log(error.message); // akan memunculkan ini
  }
};
