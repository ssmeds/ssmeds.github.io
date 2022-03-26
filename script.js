// <!--------------- Toggle menu/navbar script ----------->
// This script toggles the class .active on the id #nav when it's clicked
function myFunction() {
    var mobileMenu = document.getElementById("nav");
    mobileMenu.classList.toggle("active");
}

// fetch("https://api.github.com/users/ssmeds/repos")
//     .then(response => response.json())
//     .then(data => {
//         console.log('data', data);
//         let div = document.getElementById("repos");
//         for (repo in data) {
//             div.insertAdjacentHTML("afterbegin", `<div> <a href='${data[repo].html_url}' target='_blank'>${data[repo].name}</a></div>`);
//         }
//     })



