const sizes = {
  'bite': 500,
  'small': 2500,
  'medium': 7500,
  'big': 12500,
  'lagging': 20000
}

let x = prompt('How much confetti?\n\nOptions:\nbite\nsmall\nmedium\nbig\lagging').toLowerCase();
if (sizes(x)) confetti({particleCount: sizes[x],spread: 500,origin: { y: 0.5}});
else alert('Size not found.');
