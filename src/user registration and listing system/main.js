// GET request example
document.getElementById("loadUsers").addEventListener("click", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = response.data;

    const userList = document.getElementById("userList");
    userList.innerHTML = ""; // Clear previous results

    users.slice(0, 5).forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} (${user.email})`;
      userList.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
});

// POST request example
document.getElementById("userForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      {
        name: name,
        email: email,
      }
    );

    document.getElementById(
      "result"
    ).textContent = `✅ User added: ID ${response.data.id}`;
    console.log("POST Response:", response.data);
  } catch (error) {
    console.error("Error adding user:", error);
  }
});
