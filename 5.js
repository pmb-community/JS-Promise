const baseUrl = 'https://books-api.dicoding.dev';

function showResponseMessage(message) {
  console.log(message)
}

function renderAllBooks(books) {
  console.log(books)
}

const getBook = async () => {
  try {
    const response = await fetch(`${baseUrl}/list`);
    const responseJson = await response.json();
    if (responseJson.error) {
      showResponseMessage(responseJson.message);
    } else {
      renderAllBooks(responseJson.books);
    }
  } catch (error) {
    showResponseMessage(error);
  }
};

const insertBook = async (book) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345'
      },
      body: JSON.stringify(book)
    };

    const response = await fetch(`${baseUrl}/add`, options)
    const responseJson = await response.json();
    showResponseMessage(responseJson.message);
    getBook();
  } catch (error) {
    showResponseMessage(error)
  }
};

const updateBook = async (book) => {
  try {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345'
      },
      body: JSON.stringify(book)
    };

    const response = await fetch(`${baseUrl}/edit/${book.id}`, options);
    const responseJson = await response.json();

    showResponseMessage(responseJson.message);
    getBook();
  } catch (error) {
    showResponseMessage(error);
  }
};

const removeBook = async (bookId) => {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'X-Auth-Token': '12345'
      },
    };

    const response = await fetch(`${baseUrl}/delete/${bookId}`, options);
    const responseJson = await response.json();

    showResponseMessage(responseJson.message);
    getBook();
  } catch (error) {
    showResponseMessage(error);
  }
};
