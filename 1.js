function makeCoffee(tipe) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (tipe === "kopi susu") {
        return reject("Persedian kosong")
      }
      return resolve("Kopi anda siap")
    }, 2000)
  })
}

async function reserveCoffee(tipe) {
  try {
    const kopi = await makeCoffee(tipe);
    console.log(kopi)
  } catch (reason) {
    console.log(reason)
  }
}

reserveCoffee("turbuk")
