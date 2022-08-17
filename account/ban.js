// This script just bans the account it is ran on.

banloop = setInterval(() => {
  socket.emit('smes', 'a')
})
