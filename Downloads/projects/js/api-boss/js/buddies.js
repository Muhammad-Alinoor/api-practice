const loadFriend = () => {
    const url = `https://randomuser.me/api/?results=5`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayFriend(data.results[0]))
}
loadFriend();
const displayFriend = friend => {
    const newFriend = document.getElementById("new-friend");
    const div = document.createElement("div");
    div.innerHTML = `
            <img src = '${friend.picture.thumbnail}'>
            <p class ="intro">Hi, My name is <span class = "name">${friend.name.first} ${friend.name.last}</span>
            </p>
            <button class = "icon">
                <i class="far fa-user"></i>
            </button> 
            <button class = "icon">
                <i class="far fa-envelope"></i>
            </button>
            <button class = "icon">
                <i class="far fa-calendar"></i>
            </button>
            <button class = "icon">
                <i class="fas fa-map-marked-alt"></i>
            </button>
            <button class = "icon">
                <i class="fas fa-phone-alt"></i>
            </button>
            <button class = "icon">
                <i class="fas fa-lock"></i>
            </button>

        `;
    newFriend.appendChild(div)
}