let elemname = prompt('Enter Element name:'),
  elemurl = prompt('Enter Element image URL:'),
  elemprice = prompt('Enter Element sell price:'),
  elemrar = prompt('Enter Element rarity:'),
  elemrgb = prompt(`Enter Element rarirty color:\n\nCommon: white\nUncommon: #4bc22e\nRare: #0a14fa\nEpic: #be0000\nLegedary: #ff910f\nFabled: #0c7500\nPerfect: #fffacd\nMythical: #a335ee\nDivine: #ee82ee`),
  elemquant = prompt('Enter Element amount:');

$(".elementList").append(`<img id="` + elemname + `" src="` + elemurl + `" onclick="viewCustom()" class="bottomElement">`);

function viewCustom() {
  document.getElementById("#elementRarity").innerText = elemrar;
  document.getElementById("#elementRarity").style.color = elemrgb;
  document.getElementById("#elementRarity").style.textShadow = "0px 0px 25px " + elemrgb;
  document.getElementById("#elementImage").src = elemurl;
  document.getElementById("#elementName").innerText = elemname;
  document.getElementById("#elementPrice").innerText = elemprice;
  document.getElementById("#elementQuantity").innerText = elemquant;
};

alert('Element loaded! Note: this element doesn\'t ACTUALLY exist, and is only on your screen. Reload to remove.');
