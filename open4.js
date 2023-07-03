function openPopup4(url) {
  var confirmation = confirm("Do you consent and agree not to engage in any unauthorized use, reproduction, distribution, or exploitation of the personal information and documents contained herein?");
  if (confirmation) {
      openPopuppp(url);
  }
}

function openPopuppp(url) {
  var myWindow = window.open(url, "myPopup4", "width=500,height=500,scrollbars=no");
}