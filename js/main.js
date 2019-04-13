const eleFbPosts = document.getElementById("fbPosts");
const eleUserInput = document.getElementById("UserInput")
const newPost = () => {
  eleFbPosts.innerHTML = `<div class="column is-mobile is-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img src="..\img\prof-pic-3.jpg" class="image is-rounded"><br>
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <div>${eleUserInput.value}</div>
          </p>

      </div>
      <nav class="level is-mobile footer">
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
</div>` + eleFbPosts.innerHTML;  
}