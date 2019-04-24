const eleFbPosts = document.getElementById("fbPosts");
const eleUserInput = document.getElementById("UserInput");
const eleProfPic = document.getElementById("profPic");
let samplePost2String = [];
let post2String = [];

//........INPUTTING DEFAULT POSTS - FUNCTION..................

defaultPosts = () => {
  const samplePost = `
  
<!--......... SAMPLE POST NO:1 ....................-->

<div class="column-style column is-mobile is-tablet is-desktop is-widescreen is-fullhd">
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64 is-rounded">
        ${eleProfPic.innerHTML}<br>
    </p>
  </figure>
  <div  class="media-content">
    <div onclick="viewPost()" class="content">
      <p>
        <strong>Users Name</strong> <small>@Username</small> <br>
        <div class="fb-post-figure-style">
              <img src="http://images2.fanpop.com/images/photos/8400000/Cinderella-cinderella-8493295-150-260.gif"  class="fb-post-image-style" >
        </div>
      </p>
    </div>
  </div>
</article>
</div>

<!--........ SAMPLE POST NO:2 ....................-->

<div class="column-style column is-mobile is-tablet is-desktop is-widescreen is-fullhd">
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64 is-rounded">
        ${eleProfPic.innerHTML}<br>
    </p>
  </figure>
  <div  class="media-content">
    <div onclick="viewPost()" class="content">
      <p>
        <strong>Users Name</strong> <small>@Username</small> <br>
        <div class="fb-post-figure-style">
              <img src="https://png.pngtree.com/thumb_back/fh260/back_pic/04/10/85/2658188a5fd29a6.jpg"  class="fb-post-image-style" >
        </div>
      </p>
    </div> 
  </div>
</article>
</div>

<!--........ SAMPLE POST NO:3 ....................-->

<div class="column-style column is-mobile is-tablet is-desktop is-widescreen is-fullhd">
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64 is-rounded">
        ${eleProfPic.innerHTML}<br>
    </p>
  </figure>
  <div  class="media-content">
    <div onclick="viewPost()" class="content">
      <p>
        <strong>Users Name</strong> <small>@Username</small> <br>
        <div class="fb-post-figure-style">
        <p>Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth...</p>
        </div>
      </p>
    </div>   
  </div>
</article>
</div>

<!--......... SAMPLE POST NO:4 ....................-->

<div class="column-style column is-mobile is-tablet is-desktop is-widescreen is-fullhd">
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64 is-rounded">
        ${eleProfPic.innerHTML}<br>
    </p>
  </figure>
  <div  class="media-content">
    <div onclick="viewPost()" class="content">
      <p>
        <strong>Users Name</strong> <small>@Username</small> <br>
        <div class="fb-post-figure-style">
        <img src="https://i.pinimg.com/236x/ec/34/c6/ec34c63209d7382e43433818d9012cb0--namaste-portal.jpg"  class="fb-post-image-style" >
        </div>
      </p>
    </div> 
  </div>
</article>
</div>

<!--......... SAMPLE POST NO:5 .....................-->

<div class="column-style column is-mobile is-tablet is-desktop is-widescreen is-fullhd">
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64 is-rounded">
        ${eleProfPic.innerHTML}<br>
    </p>
  </figure>
  <div  class="media-content">
    <div onclick="viewPost()" class="content">
      <p>
        <strong>Users Name</strong> <small>@Username</small> <br>
        <div class="fb-post-figure-style">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyAa633KAfsEtV_sZ-k6OTBCqBcT6GCs7iBLwb-jKdeoEVCESU2A"  class="fb-post-image-style" >
        </div>
      </p>
    </div>
  </div>
</article>
</div>

<!--......... SAMPLE POST NO:6 ....................-->

<div class="column-style column is-mobile is-tablet is-desktop is-widescreen is-fullhd">
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64 is-rounded">
        ${eleProfPic.innerHTML}<br>
    </p>
  </figure>
  <div  class="media-content">
    <div onclick="viewPost()" class="content">
      <p>
        <strong>Users Name</strong> <small>@Username</small> <br>
        <div class="fb-post-figure-style">
              <p>Stay true to yourself, yet always be open to learn. Work hard, and never give up on your dreams, even when nobody else believes they can come true but you. These are not cliches but real tools you need no matter what you do in life to stay focused on your path...</p>
        </div>
      </p>
    </div> 
  </div>
</article>
</div>

<!--......... SAMPLE POST NO:7 .....................-->

<div class="column-style column is-mobile is-tablet is-desktop is-widescreen is-fullhd">
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64 is-rounded">
        ${eleProfPic.innerHTML}<br>
    </p>
  </figure>
  <div  class="media-content">
    <div onclick="viewPost()" class="content">
      <p>
        <strong>Users Name</strong> <small>@Username</small> <br>
        <div class="fb-post-figure-style">
        <p>No matter what has happened to you in the past or what is going on in your life right now, it has no power to keep you from having an amazingly good future if you will walk by faith in God. God loves you! He wants you to live with victory over sin so you can possess His promises for your life today...!</p>
        </div>
      </p>
    </div>
  </div>
</article>
</div>`;

  samplePost2String = JSON.stringify(samplePost);
  localStorage.setItem("FacebookPosts", samplePost2String);
  return samplePost2String;
}


//.........CREATING A NEW POST - FUNCTION....................

const newPost = (storePosts = `Share Your Mind..!!!`) => {
  storePosts = (`<div class="column-style column is-mobile is-tablet is-desktop is-widescreen is-fullhd">
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64 is-rounded">
        ${eleProfPic.innerHTML}<br>
      </p>
    </figure>
    <div  class="media-content">
      <div onclick="viewPost()" class="content">
        <p>
          <strong>Users Name</strong> <small>@Username</small> <br>
          <div>${eleUserInput.value}</div>
        </p>
      </div>
    </div>
  </article>
</div>`) + JSON.parse(localStorage.getItem("FacebookPosts"));
  eleFbPosts.innerHTML = storePosts;
  post2String = JSON.stringify(storePosts);
  localStorage.setItem("FacebookPosts", post2String);
  eleUserInput.value = "";
  return post2String;
}

//------------Onload Display Function---------------

let displayPosts = () => {
  if ((localStorage.getItem("FacebookPosts")) == undefined) {
    defaultPosts();
    eleFbPosts.innerHTML = JSON.parse(localStorage.getItem("FacebookPosts"));
  }

  if (post2String != "")
    eleFbPosts.innerHTML = JSON.parse(newPost(post2String)) + JSON.parse(localStorage.getItem("FacebookPosts"));
  else
    eleFbPosts.innerHTML = JSON.parse(localStorage.getItem("FacebookPosts"));

}



//...........VIEW ALL POST AS LISTING - FUNCTION....................

const viewPost = () => {
  const displayPosts = document.getElementById('fbPosts');
  eleFbPosts.innerHTML = `
<div class="modal is-active">
<div class="modal-background"></div>
<div class="modal-card">
  <header class="modal-card-head">
    <p class="modal-card-title "><p class="image is-64x64" id="profPic">${eleProfPic.innerHTML}</p></p>
  </header>
  <section class="modal-card-body">
  <div class="column-style column is-mobile is-tablet is-desktop is-widescreen is-fullhd">
  <article class="media">
    <div class="media-content">
      <div class="content">
        <p>
          <div>${displayPosts.innerHTML}</div>
        </p>
      </div>
    </div>
  </article>
  </div>
  </section>
  <footer class="modal-card-foot">
    <button onclick="location.href = '../homepage.html';" class="button is-info">Go back to Home Page...</button>
  </footer>
</div>
</div>`;
}

//...........SEARCHING A STRING INSIDE ALL POSTS - FUNCTION..........

const searchPost = () => {
  let eleSearch = document.documentElement.innerHTML;
  let n = eleSearch.search(`${document.getElementById('searchInput').value}`);
  if (n == -1) {
    alert(`Search Not Found`);
  } else {
    alert(`*****  Found in Character number ${n}  *****`);
  }
  document.getElementById('searchInput').value = ``;
}

//..............LOGIN - FUNCTION.........................................

let attempt = 3;
let validate = () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

    
  if (username == JSON.parse(localStorage.getItem("Username")) && password == JSON.parse(localStorage.getItem("Password"))) {
    window.location = "homepage.html";
  } 
  
  else {
    attempt--;
    alert("You have left " + attempt + " attempt;");
    if (attempt == 0) 
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("loginButton").disabled = true;
      return false;
    }
  

}

let signUp = () => {

  let signUpUsername = document.getElementById("signUpUsername").value;
  username2String = JSON.stringify(signUpUsername);
  localStorage.setItem("Username", username2String);
  let signUpPassword = document.getElementById("signUpPassword").value;
  password2String = JSON.stringify(signUpPassword);
  localStorage.setItem("Password", password2String);
};