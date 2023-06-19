const Fetcher = props => {
    const url = "http://localhost:8000/server.php"
    
    fetch(url, {
        method: "Get",
        headers: {
          "Content-Type": "application/text",
        },
        body: jsonData,
      })
        .then((response) => response.json())
        .then((data) => {
          setResult(data);
          props.newProductHandler(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
}

export default Fetcher;