
const Tweeter = function () {

    _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let postId = 3

    const getPosts = function () {

        return _posts
    }

    const addPost = function (text) {

        _posts.push({
            text: text,
            id: "p" + postId,
            comments: []
        })

        postId++
    }

    const removePost = function (postId) {

        for (let postIndex in _posts) {

            if (_posts[postIndex].id == postId) {

                console.log("post found")
                console.log(_posts[postIndex].id)

                _posts.splice(postIndex, 1)

            }

        }

        // _posts[0].id => shows p1

    }

    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost
    }

}


