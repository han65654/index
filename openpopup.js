function openPopup(url) {
  var confirmation = confirm("Do you consent and agree not to engage in any unauthorized use, reproduction, distribution, or exploitation of the personal information and documents contained herein?");
  if (confirmation) {
      openPopupp(url);
  }
}

function openPopupp(url) {
  var myWindow = window.open(url, "myPopup1", "width=500,height=500,scrollbars=no");
}