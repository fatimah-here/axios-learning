// Fetch data using Axios
axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log("API Response:", response.data); // Debugging
    const todo = response.data;

    // Display data in the browser
    document.getElementById("div1").innerHTML = `
      <h3>Task Details:</h3>
      <p><b>USER-ID:</b> ${todo.userId}</p>
      <p><b>ID:</b> ${todo.id}</p>
      <p><b>Title:</b> ${todo.title}</p>
      <p><b>Completed:</b> ${todo.completed ? "✅ Yes" : "❌ No"}</p>
    `;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
axios