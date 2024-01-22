var length;

async function getData(){
    const userName = 'johnpapa';

    const url = `https://api.github.com/users/${userName}/repos`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            const repoList = document.getElementById('repoList');
            data.forEach(element => {

                let div = document.createElement('div');
                div.classList.add('repos');
                div.innerHTML = `<p class='repoName'>${element.name}</p>`
                div.innerHTML += `<p class='repoDescription'>${element.description}</p>`
                div.innerHTML += `<p class='repoLanguage'>${element.language}</p>`

                repoList.appendChild(div);

                // console.log(element.name, element.description, element.language);
            });
            length = Math.round(data.length/10);
            console.log(length);
            
        })
        .catch(error => console.log(error));
}

getData();

const pagiBtn = document.getElementsByClassName('pagi-btn');
for(let i=1; i<=length; i++){
    console.log(i);
    pagiBtn.innerHTML += `<button class='btn'>${i}</button>`;
}


async function userData() {
    const userName = 'johnpapa';
    const url = `https://api.github.com/users/${userName}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const userName = document.getElementById('userName');
        const userBio = document.getElementById('userBio');
        const userLocation = document.getElementById('userLocation');
        const userTwitter = document.getElementById('userTwitter');
        const userDiv = document.getElementById('userDiv');
        const githubLink = document.getElementById('githubLink');
        

        const div = document.createElement('div');
        div.classList.add('userImage');
        div.innerHTML = `<img src='${data.avatar_url}' alt='User Image'>`;
        userDiv.prepend(div);

        userName.innerHTML = data.name;
        userBio.innerHTML = data.bio;
        userLocation.innerHTML = data.location;
        userTwitter.innerHTML = data.twitter_username;
        githubLink.innerHTML = data.html_url;
        console.log(data.name);
    })
}

userData();