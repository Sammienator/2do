async function getUsers() {
  let url = "https://jsonplaceholder.typicode.com/todos";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  let users = await getUsers();
  let html = "";
  users.forEach((user) => {
    let htmlSegment = `<div class="user">
    
                          <h2 class="Id>${user.Id} </h2>
                          <div class="title"><a href="title:${user.title}">${user.title}</a></div>
                      </div>
                         <li class="completed">${user.completed}</li>
                         
                      `
                      ;



    html += htmlSegment;
  });

  let container = document.querySelector(".container");
  container.innerHTML = html;
}

renderUsers();
