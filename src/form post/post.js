
    // Handle form submit
    document.getElementById("userForm").addEventListener("submit", function(e) {
      e.preventDefault(); // Stop page refresh

      // Collect form data
      const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
      };

      // Send POST request
      axios.post("https://jsonplaceholder.typicode.com/users", userData)
        .then(response => {
          console.log("✅ Data posted successfully!");
          console.log("Response:", response.data);
          alert("User registered successfully!");
        })
        .catch(error => {
          console.error("❌ Error posting data:", error);
          alert("Something went wrong!");
        });
    });
