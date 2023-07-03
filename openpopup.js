function openPopup(url) {
  var confirmation = confirm("Do you want to open the certificate of degree?");
  if (confirmation) {
      openPopupp(url);
  }
}

function openPopupp(url) {
  var myWindow = window.open(url, "myPopup1", "width=500,height=500,scrollbars=no");
}