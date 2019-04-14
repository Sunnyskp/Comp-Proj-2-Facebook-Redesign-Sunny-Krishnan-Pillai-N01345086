const eleFbPosts = document.getElementById("fbPosts");
const eleUserInput = document.getElementById("UserInput")
const eleProfPic = document.getElementById("profPic")
const storePosts = [];
const newPost = () => {
  storePosts.unshift(`<div class="column is-one-quarter is-mobile is-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
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
          <br>${eleUserInput.value}</p>
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
  eleFbPosts.innerHTML = string2Post;
}