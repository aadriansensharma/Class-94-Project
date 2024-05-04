function addUser() {
    user_nae = document.getElementById("user_name").ariaValueMax;

    localStorage.setItem("username",user_name);

    window.location="kwitter_room.html";
}