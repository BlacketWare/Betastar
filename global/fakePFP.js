if (userData.perm > 4) {
  async function elementToFile(e) {
    let out = await $.getJSON("https://betastar.org/api/elements");
    let imageurl = "https://betastar.org/" + out[e].imageURL;

    let blob = await fetch(imageurl).then(res => res.blob());
    return new File(
      [blob],
      "custom.png", {
        type: "image/png"
      }
    )
  };

  function customAvatar(image) {
    let imageToUpload = new FormData();
    imageToUpload.append('file', image);
    $.ajax({
      url: 'https://betastar.org/api/customavatar/',
      data: imageToUpload,
      processData: false,
      contentType: false,
      type: 'POST',
      success: function(data) {
        if (data === 'SUCCESS') {
          alert("Element changed as intended! Reload your page and go flex in chat.");
          location.reload();
        };
      };
    });
  };
  
  let element = prompt("Enter the element name:\n\nCurrently no support for two word elements.").toLowerCase();

  if (!Object.keys(elementList).includes(element) && element !== "cancel") alert("Element not found, try again!");
  if (element === "cancel") return;

  elementToFile(element).then(f => customAvatar(f));
} else alert('Oops! This is for those with a role you don\'t have. Buy Fabled in the Store to unlock this feature!\n\nRequired Perm Level: 5+\nCurrent Perm Level: ' + userData.perm);'
