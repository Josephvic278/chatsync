function chats_bar() {
  var friends_bar = document.getElementById("friends_bar");
  var chats_bar = document.getElementById("chats_bar");

  if (chats_bar && friends_bar) {
    if (chats_bar.style.width !== "0%" && friends_bar.style.width !== "66.6%") {
      chats_bar.style.width = "0%";
      friends_bar.style.width = "66.6%";
    }
  }
  var chats_body = document.getElementById("chats_body")
  var updates_body = document.getElementById("updates_body")
  var friends_body = document.getElementById("friends_body")
  var new_chat = document.getElementById("new_chat")
  chats_body.style.left = "0"
  updates_body.style.right = "-100%"
  friends_body.style.right = "-100%"
  new_chat.style.right = "0"
}

function updates_bar() {
  var friends_bar = document.getElementById("friends_bar");
  var chats_bar = document.getElementById("chats_bar");

  if (chats_bar && friends_bar) {
    if (chats_bar.style.width !== "33.3%" && friends_bar.style.width !== "33.3%") {
      chats_bar.style.width = "33.3%";
      friends_bar.style.width = "33.3%";
    }
  }
  var chats_body = document.getElementById("chats_body")
  var updates_body = document.getElementById("updates_body")
  var friends_body = document.getElementById("friends_body")
  var new_chat = document.getElementById("new_chat")
  chats_body.style.left = "-100%"
  updates_body.style.right = "0"
  friends_body.style.right = "-100%"
  if (new_chat.style.right !== "-20%"){
    new_chat.style.right = "-20%"
  }
}

function friends_bar(){
  var friends_bar = document.getElementById("friends_bar");
  var chats_bar = document.getElementById("chats_bar");

  if (chats_bar && friends_bar) {
    if (chats_bar.style.width !== "66.6%" && friends_bar.style.width !== "0%") {
      chats_bar.style.width = "66.6%";
      friends_bar.style.width = "0%";
    }
  }
  var chats_body = document.getElementById("chats_body")
  var updates_body = document.getElementById("updates_body")
  var friends_body = document.getElementById("friends_body")
  var new_chat = document.getElementById("new_chat")
  chats_body.style.left = "-100%"
  updates_body.style.right = "-100%"
  friends_body.style.right = "0"
  if (new_chat.style.right !== "-20%"){
    new_chat.style.right = "-20%"
  }
}