function goFollow() {
    let contentButton = document.getElementsByTagName('button');
    let followers = document.getElementById('followNumber');
    let changeFollowers;

    if (contentButton[0].innerText == 'Follow') {
        contentButton[0].innerText = 'Following';

        changeFollowers = ++followers.innerText;
    } else {
        contentButton[0].innerText = 'Follow';

        changeFollowers = --followers.innerText;
    }
}

function clearSug() {
    let listProfile = document.getElementById('firstProfile');
    listProfile.style.display = 'none';
}

function goTweet() {
    let contentTweet = document.getElementById('myTweet')
    let listTweets = document.getElementsByClassName('tweets')[1];
    let listItem = document.getElementsByClassName('tweetItem')[0];

    if (contentTweet.value != '') {
        let newTweet = listItem.cloneNode(true);
        newTweet.getElementsByTagName('p')[0].innerText = contentTweet.value;
        listTweets.prepend(newTweet);

        //Atividade: trazer os likes, comentários e refresh zerados
        newTweet.getElementsByTagName('text')[0].innerText = 0;
        newTweet.getElementsByTagName('text')[1].innerText = 0;
        newTweet.getElementsByTagName('text')[2].innerText = 0;
        contentTweet.value = "";
    } else {
        contentTweet.style.borderColor = 'red';
    }
}

//Atividade complementar: clicar em comments, criar um text area e dps de inserir, fica como um tweet ali em baixo

function goFollowSug() {
    let followSug = document.getElementsByTagName('button');
    let followings = document.getElementById('followingNumber');

    if (followSug[2].innerText == 'Follow') {
        followSug[2].innerText = 'Following';

        ++followings.innerText;

        setTimeout(clearSug, 5000);
    } else {
        followSug[2].innerText = 'Follow';

        --followings.innerText;
    }

}

function comment() {
    let commentsClicked = document.getElementById('comments');
    let comments = document.getElementById('commentsNumber');
    let commentTweet = document.getElementsByClassName('commentTweet')[0];

    if (commentsClicked.src.indexOf('comments-color') === -1) {
        commentsClicked.src = 'images/comments-color.svg';

        ++comments.innerText;
        commentTweet.style.display = 'unset';
    } else {
        commentsClicked.src = 'images/comments.svg';

        --comments.innerText;
        commentTweet.style.display = 'none'
    }
}

function goComment() {
    let commentTweet = document.getElementsByClassName('commentTweet')[0];
    let contentReply = document.getElementById('myComment');
    let listTweets = document.getElementsByClassName('tweets')[1];
    let listItem = document.getElementsByClassName('tweetReply')[0];
    let newComment = listItem.cloneNode(true);

    if (contentReply.value != "") {
        newComment.getElementsByTagName('p')[0].innerText = contentReply.value;

        newComment.style.display = 'flex';

        listTweets.replaceChild(newComment, listItem);

        contentReply.value = "";
        commentTweet.style.display = 'none';
    } else {
        contentReply.style.borderColor = 'red';
    }
}

function refresh() {
    let refreshClicked = document.getElementById('refresh');
    let refresh = document.getElementById('refreshNumber');

    if (refreshClicked.src.indexOf('refresh-color') === -1) {
        refreshClicked.src = 'images/refresh-color.svg';

        ++refresh.innerText;
    } else {
        refreshClicked.src = 'images/refresh.svg';

        --refresh.innerText;
    }
}


function like() {
    let tweetLiked = document.getElementById('like');
    let favorites = document.getElementById('favoritesNumber');
    let likes = document.getElementById('likeNumbers')

    // tweetLiked.src = tweetLiked.src.indexOf('heart-color') < 0 ? 'images/heart-color.svg' && ++favorites.innerText : 'images/heart.svg';

    if (tweetLiked.src.indexOf('heart-color') == -1) {
        tweetLiked.src = 'images/heart-color.svg';

        ++favorites.innerText;
        ++likes.innerText;
    } else {
        tweetLiked.src = 'images/heart.svg';

        --favorites.innerText;
        --likes.innerText;
    }
}