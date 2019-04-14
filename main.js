
const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())



const post = function () {
    console.log("The post title should be " + $("input").val())
    tweeter.addPost($("input").val())
    renderer.renderPosts(tweeter.getPosts())
}


$("body").on("click", ".delete", function(){
let postId = $(this).closest(".post").data().id
console.log(postId)
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())
})