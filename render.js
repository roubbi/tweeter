
const Renderer = function () {

    const renderPosts = function (_posts) {

        $("#posts").empty()

        for (let post in _posts) {


            $("#posts").append(`<div class=post id=${_posts[post].id} data-id=${_posts[post].id}>  
                <div class=post-text> ${_posts[post].text} </div> <div class=delete> Delete Post </div></div>`)

        }

    }
    return {
        renderPosts: renderPosts
    }

}