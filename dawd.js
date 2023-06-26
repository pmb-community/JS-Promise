async function main() {
  const data = {
    id: 400,
    title: "Bootcamp PMB 2",
    author: "Ersan Karimi"
  }
  
  const response = await fetch("https://books-api.dicoding.dev/add", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': '12345'
    },
    body: JSON.stringify(data)
  });
  
  const responseJson = await response.json()
  
  console.log(responseJson)
}

main()