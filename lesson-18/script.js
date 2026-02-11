// TODO: Fetch a random user from the API
async function fetchUser() {
  const output = document.getElementById("userOutput");
  const userData = document.getElementById("userData");

  // Show loading
  output.classList.add("loading");

  try {
    // TODO: Use fetch() to get data from the API
    const response = await fetch('https://randomuser.me/api/');

    // TODO: Check if response is ok
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // TODO: Parse JSON response
    const data = await response.json();

    // TODO: Extract user data and display
    const user = data.results[0];

    // Hide loading
    output.classList.remove("loading");

    // Display user
    userData.innerHTML = `
            <div class="user-card">
                <h3>Fetch a user to see data</h3>
                <p>Click the button above!</p>
            </div>
        `;
  } catch (error) {
    output.classList.remove("loading");
    userData.innerHTML = `<div class="error">Error: ${error.message}</div>`;
    console.error("Fetch error:", error);
  }
}

// TODO: Fetch all posts
async function fetchAllPosts() {
  const output = document.getElementById("postsOutput");
  const postsData = document.getElementById("postsData");

  output.classList.add("loading");

  try {
    // TODO: Fetch posts from API
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // TODO: Parse JSON
    // const posts = await response.json();

    output.classList.remove("loading");

    // TODO: Display first 10 posts
    postsData.innerHTML = "<p>Fetch posts to see data</p>";
  } catch (error) {
    output.classList.remove("loading");
    postsData.innerHTML = `<div class="error">Error: ${error.message}</div>`;
    console.error("Fetch error:", error);
  }
}

// TODO: Fetch a single post by ID
async function fetchSinglePost() {
  const postId = document.getElementById("postId").value;
  const output = document.getElementById("postsOutput");
  const postsData = document.getElementById("postsData");

  if (!postId) {
    alert("Please enter a post ID");
    return;
  }

  output.classList.add("loading");

  try {
    // TODO: Fetch single post
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    // TODO: Check if post exists
    // if (!response.ok) {
    //     throw new Error('Post not found');
    // }

    // TODO: Parse and display

    output.classList.remove("loading");
    postsData.innerHTML = "<p>Enter a post ID and fetch it</p>";
  } catch (error) {
    output.classList.remove("loading");
    postsData.innerHTML = `<div class="error">Error: ${error.message}</div>`;
    console.error("Fetch error:", error);
  }
}

// TODO: Create a new post (POST request)
async function createPost() {
  const title = document.getElementById("postTitle").value;
  const body = document.getElementById("postBody").value;
  const output = document.getElementById("createOutput");

  if (!title || !body) {
    alert("Please fill all fields");
    return;
  }

  try {
    // TODO: Create POST request
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         title: title,
    //         body: body,
    //         userId: 1
    //     })
    // });

    // TODO: Parse response
    // const newPost = await response.json();

    output.innerHTML = `
            <div class="success">
                <h3>Post created (simulated)</h3>
                <p>Fill the form and click Create Post</p>
            </div>
        `;

    // Clear form
    document.getElementById("postTitle").value = "";
    document.getElementById("postBody").value = "";
  } catch (error) {
    output.innerHTML = `<div class="error">Error: ${error.message}</div>`;
    console.error("Create post error:", error);
  }
}

// Console examples
console.log("=== Fetch API Examples ===");

// TODO: Try these examples in the console:

// 1. Basic fetch
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => console.log('Post:', data));

// 2. Async/await version
// async function getPost() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data = await response.json();
//     console.log('Post:', data);
// }
// getPost();

// 3. Error handling
// async function fetchWithError() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/999999');
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }
