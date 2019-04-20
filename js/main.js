const eleFbPosts = document.getElementById("fbPosts");
const eleUserInput = document.getElementById("UserInput")
const eleProfPic = document.getElementById("profPic")
const storePosts = [];

const newPost = () => {
  storePosts.unshift(`
<div onclick="viewPost()" class="column-style column is-mobile is-tablet is-desktop is-widescreen is-fullhd">
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64 is-rounded">
        ${eleProfPic.innerHTML}<br>
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small><br>
          ${eleUserInput.value}
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item"> 
            <span class="icon is-small"><i class="fas fa-comment"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-share-square"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-heart"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-thumbs-up"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-edit"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-trash-alt"></i></span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>`);
const post2String = JSON.stringify(storePosts);
localStorage.setItem("FacebookPosts",post2String);
localStorage.getItem("FacebookPosts",post2String);
const string2Post = JSON.parse(post2String);
eleFbPosts.innerHTML= string2Post.join([separator = '  ']);
}

let viewPost = () => {
  eleFbPosts.innerHTML = `
  <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button onclick="closeViewPost()" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
    <div onclick="viewPost()" class="column is-one-quarter is-mobile is-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64 is-rounded">
          ${eleProfPic.innerHTML}<br>
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            ${eleUserInput.value}
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-comment"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-share-square"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-heart"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-thumbs-up"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-edit"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-trash-alt"></i></span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button onclick="closeViewPost()" class="button">Cancel</button>
    </footer>
  </div>
</div>`;
}

const closeViewPost = () => {
  window.location = "index.html";
}

let attempt = 3;
let validate = () => {
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
if ( username == "Sunnyskp" && password == "sunny123"){
window.location = "index.html";
}
else{
attempt --;
alert("You have left "+attempt+" attempt;");
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("loginButton").disabled = true;
return false;
}
}
}


