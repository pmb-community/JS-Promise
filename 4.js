async function getBook() {
  const data = await fetch("https://books-api.dicoding.dev/list");
  const dataJson = await data.json();

  console.log(dataJson.books);
}

getBook()