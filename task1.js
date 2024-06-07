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

cekHariKerja("Senin")
  .then((data) => {
    console.log(`Sekarang hari ${data}. Selamat bekerja!`);
  })
  .catch((error) => {
    console.log(error.message);
  });

const cekHariKerjaAsyn = async (day) => {
  try {
    const data = await cekHariKerja(day);
    console.log(`Sekarang hari ${data}. Selamat bekerja!`);
  } catch (error) {
    console.log(error.message);
  }
};
