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

function clearSug() {
    let listProfile = document.getElementById('firstProfile');
    listProfile.style.display = 'none';
}

//Ao clicar no follow das sugestões, aumentar numero de Following e depois de 5s dar um display none na lista

//No refresh trocar o número e no comments trocar o número, como no like

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