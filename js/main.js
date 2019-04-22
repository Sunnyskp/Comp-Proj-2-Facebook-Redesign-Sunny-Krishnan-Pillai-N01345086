const eleFbPosts = document.getElementById("fbPosts");
const eleUserInput = document.getElementById("UserInput");
const eleProfPic = document.getElementById("profPic");
const storePosts = [];
 let counter = 0;
const newPost = () => {
  let assignId = (function () {
    
       return function () 
    {
      counter += 1; 
      return counter
    }
  })();
  let getPostId=`postId${assignId()-1}`;
  let getEditId=`editId${assignId()-2}`;
  let getLikeId=`likePost${assignId()-3}`;
  

storePosts.unshift(`
<div class="column-style column is-mobile is-tablet is-desktop is-widescreen is-fullhd">
  <article id="${getPostId}" class="media">
    <figure class="media-left">
      <p class="image is-64x64 is-rounded">
        ${eleProfPic.innerHTML}<br>
      </p>
    </figure>
    <div  class="media-content">
      <div onclick="viewPost()" class="content">
        <p>
          <strong>Sunny Skp</strong> <small>@Sunny skp</small> <br>
          <div>${eleUserInput.value}</div>
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item"> 
            <span class="icon is-small"><i class="fas fa-comment"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-heart"></i></span>
          </a>
          <a id="${getLikeId}"  class="level-item">
            <span onclick="likeButton()" class="icon is-small"><i class="fas fa-thumbs-up"></i></span>
          </a>
          <a class="level-item">
            <span id="${getEditId}" class="icon is-small"><i class="fas fa-edit editPost"></i></span>
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
eleUserInput.value="";
}

window.onload = displayPosts = () => {
  let fbPosts = localStorage.getItem("FacebookPosts");
  if (fbPosts !== null) {
  const string2Post = JSON.parse(fbPosts);
  eleFbPosts.innerHTML+= string2Post.join([separator = '  ']);
  }
  else{
    eleFbPosts.innerHTML=`<div class="title is-1 is-full has-text-centered has-text-link">----WELCOME TO NEW-REDESIGNED FACEBOOK----</div>
    <div class="title is-2 has-text-centered is-full is-family-monospace has-text-info">------SHARE YOUR THOUGHTS WITH THE WORLD...!!!------</div>`;
  }
}




const searchPost=()=> {
  let eleSearch = document.documentElement.innerHTML; 
  let n = eleSearch.search(`${document.getElementById('searchInput').value}`);
  if (n==-1)
  {
    alert(`Search Not Found`);
  }
  else{
  alert(`*****  Found in Character number ${n}  *****`);
  n.value.style.color = "blue";
  }
}


const viewPost = () => 
{ 
  const displayPosts = document.getElementById('fbPosts');
  eleFbPosts.innerHTML = `
<div class="modal is-active">
<div class="modal-background"></div>
<div class="modal-card">
  <header class="modal-card-head">
    <p class="modal-card-title "><p class="image is-64x64" id="profPic">${eleProfPic.innerHTML}</p></p>
  </header>
  <section class="modal-card-body">
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
          <strong>Sunny Skp</strong> <small>@Sunny skp</small> <br>
          <div>${displayPosts.innerHTML}</div>
        </p>
      </div>
      <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item"> 
          <span class="icon is-small"><i class="fas fa-comment"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a>
        <a   class="level-item">
          <span onclick="likeButton()" class="icon is-small"><i class="fas fa-thumbs-up"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-edit editPost"></i></span>
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
    let fbPosts = localStorage.getItem("FacebookPosts");
    const string2Post = JSON.parse(fbPosts);
    eleFbPosts.innerHTML= string2Post.join([separator = '  ']);
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


