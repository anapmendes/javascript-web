function goFollow() {
    let contentButton = document.getElementsByTagName('button');
    let followers = document.getElementById('followNumber')

    contentButton[1].innerText = 'Following'

    let changeFollowers = ++followers.innerText
}