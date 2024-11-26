async function userData() {
    let username = document.querySelector("#username")
    
    let user = username.value;

    if (user === "") {
       alert("please enter usernames")
    }

       try {
         const response = await fetch(`https://api.github.com/users/${user}`)

         if(!response.ok){
          alert("username doesn't exit")
         }

         const data = await response.json();

         userDatail(data)
        
       } catch (error) {
        console.error("An error occurred:", error.message);
        alert("An unexpected error occurred. Please try again.");
          
      }

    function userDatail (data) {
      let detail = document.querySelector(".detail")

      detail.innerHTML = `
      <h1>${data.login}</h1>
      <img src="${data.avatar_url}" alt="" srcset="">
      <h2>Username: ${data.name}</h2>
      <h2>Bio: ${data.bio}</h2>
      <h2>Location: ${data.location}</h2>
      <h2>Location: ${data.location}</h2>
      <h2>Follower: ${data.followers}</h2>
      <h2>Following: ${data.following}</h2>
      <h2>Public Reps: ${data.public_repos}</h2>
        <a href="${data.html_url}" target="_main">Github Link</a>
      `
    }
  }


 
 
 
 