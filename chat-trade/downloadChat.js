let text = ``;
for (var elem of document.getElementsByClassName('chatBox')[0].children) {
  var profile = elem.children[0].src.endsWith('gif') ? 'Owner' : capitalizeFirstLetter(elem.children[0].src.replace('https://betastar.org', '').replace('/image/elements/', '').replace('.png', ''));
  text += `${profile} - ${elem.children[1].textContent.replace(' > ', '')}: ${elem.children[2].textContent}\n`.replace('Https://betastar.org', '');
};
downloadFile(`data:application/txt,${encodeURIComponent(text)}`);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function downloadFile(url) {
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  a.download = `logs-${mm}-${dd}-${yyyy}-${today.getSeconds()}.txt`;

  document.body.appendChild(a);
  a.click();
  
  window.URL.revokeObjectURL(url);
}
