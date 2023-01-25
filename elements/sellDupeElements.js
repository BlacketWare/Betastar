if (confirm('Are you use you want to do this? This is a very dangerous action.\nScript by VillainsRule.')) {
  alert('Check the console for your sell history :skul:');

  $.get('/api/user/elements', function(data) {
    window.userElements = JSON.parse(data);
    Object.keys(elementList).forEach(element => sell(element));
  });

  async function sell(element) {
    var amt = window.userElements[element];
    if (0 >= amt) return;
    $.post(`/api/sell/`, `element=${element}&quantity=${amt}`, function() {
      isNaN(amt) ? "" : console.log(`Sold ${amt} ${element}(s)`);
    });
  };
} else alert('Script cancelled.');
