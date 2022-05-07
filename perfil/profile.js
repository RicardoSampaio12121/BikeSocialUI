let postTextArea = document.getElementById('post-textarea');
let submitPostBtn = document.getElementById('submit-post-btn');


submitPostBtn.addEventListener('click', event => {
    console.log("clicked!")
    let postTextAreaText = postTextArea.value;
    let htmlToInject = "<div class='card'>\
        <h5 class='card-title card-body' style='padding-bottom: 0px;'>José Seila postou</h5>\
        <hr>\
        <div class='card-body'>\
            <p class='card-text' id='post-content'>" + postTextAreaText + "</p>\
        </div>\
        <div class='card-footer'>\
            <a href='#' class='btn btn-primary'>Like</a>\
            <a href='#' class='btn btn-primary'>Comment</a>\
        </div>\
    </div>";
    document.getElementsByClassName("mainContent")["0"].insertAdjacentHTML("beforeend", htmlToInject);
});