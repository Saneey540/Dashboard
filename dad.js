// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}


list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};

$(document).ready(function(){
    $('#searchUser').on('keyup', function(e){
    let username = e.target.value;

    // make request to Github
    $.ajax({
        url: 'https://api.github.com/users/'+username,
        data:{
            client_id: "5e7f04fc7ec6d5ecff72",
            client_secret: 'b20aca077758457d0f579d29953dbc92fdfebf54'
        }
    }).done(function(user){
        $('#profile').html(`
        <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">${user.name}</h3>
        </div>
        <div class="panel-body">
          <div class='row'>
            <div class="col-md-3">
                <img class="thumbnail avatar" src="${user.avatar_url}">
                <a target="_blank" class="btn btn-primary btn block" href="${user.html_url}">View Profile</a>
            </div>
          </div>
        </div>
      </div>
       `);
      })
    })
})