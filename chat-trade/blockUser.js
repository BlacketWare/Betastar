alert('Use ESC to trigger the script!');

if (!localStorage.blockedUsers) localStorage.blockedUsers = JSON.stringify([]);

function blockuser(name) {
  let json = JSON.parse(localStorage.blockedUsers);
  localStorage.blockedUsers = JSON.stringify(json.concat(name));
};

function unblockuser(name) {
  let json = JSON.parse(localStorage.blockedUsers);
  localStorage.blockedUsers = JSON.stringify(json.filter(value => {
    return value !== name;
  }));
};

function getBlockedUsers() {
  return JSON.parse(localStorage.blockedUsers);
};

socket.on("rmes", (m) => {
  Array.from(document.querySelector(".chatBox").children).forEach(msg => {
    let user = msg.children[1].innerText.split("] ")[1].split(" >")[0];
    if (getBlockedUsers().includes(user)) msg.remove();
  });
});

socket.on('request', (user) => {
  let sentuser = `${user}`;
  if (getBlockedUsers().includes(sentuser)) {
    console.log(sentuser + ' attempted to send a request but was blocked.');
    $(".tradeRequest").remove();
    socket.emit('decline');
  };
});

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      switch (prompt('Enter a command:\nBlock - blocks a user\nList - views list of blocked users\nUnblock - unblock a user').toLowerCase()) {
        case "block":
          blockuser(prompt('Enter name of user to block - case sensitive!'));
          break;
        case "list":
          alert(getBlockedUsers());
          break;
        case "unblock":
          unblockuser(prompt('Who do you want to unblock?'));
          break;
      };
    };
});
