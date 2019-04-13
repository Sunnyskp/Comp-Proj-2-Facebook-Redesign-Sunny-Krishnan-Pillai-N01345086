const currentPost=document.getElementsByClassName("post-view")

const replace = () => {
    currentPost.innerHTML=`
    <div class="modal post-view">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Modal title</p>
              <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
               <div class="column is-mobile is-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src="..\img\prof-pic-3.jpg"><br>
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                  <br>
                  <img class="is-4by5 image-style" src="..\img\sample-post2.jpg"><br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

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
            <div class="media-right">
              <button class="delete"></button>
            </div>
          </article>
        </div>
            </section>
            <footer class="modal-card-foot">
                <div class="field">
                    <div class="control">
                      <textarea class="textarea is-info" placeholder="Write a comment"></textarea>
                    </div>
                  </div>
                  <div>
              <button class="button is-success">Post</button>
              <button class="button">Cancel</button></div>
            </footer>
          </div>
        </div>
    `
}