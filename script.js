function goFollow() {
    let contentButton = document.getElementsByTagName('button');
    let followers = document.getElementById('followNumber');
    let changeFollowers;

    if (contentButton[1].innerText == 'Follow') {
        contentButton[1].innerText = 'Following';

        changeFollowers = ++followers.innerText;
    } else {
        contentButton[1].innerText = 'Follow';

        changeFollowers = --followers.innerText;
    }
}

function like() {
    let tweetLiked = document.getElementById('like');

    tweetLiked.src = tweetLiked.src.indexOf('heart-color') < 0 ? 'images/heart-color.svg' : 'images/heart.svg';

    // if (tweetLiked.src.indexOf('heart-color') == -1) {
    //     tweetLiked.src = 'images/heart-color.svg';
    // } else {
    //     tweetLiked.src = 'images/heart.svg';
    // }
}