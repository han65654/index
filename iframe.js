var iframeCreated = false;
var iframe;

function openForm() {
   if (!iframeCreated) {
  iframe = document.createElement("iframe");
  iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSckqp7M0U8-QMyPl1Jezzz-3H9Dp-umocahHMbcLOorncQNuA/viewform?embedded=true";
  iframe.width = "640";
  iframe.height = "1402";
  iframe.frameBorder = "0";
  iframe.marginHeight = "0";
  iframe.marginWidth = "0";
  iframe.textContent = "Wird geladen…";
  document.body.appendChild(iframe);

  iframeCreated = true;

 // 스크롤을 iframe으로 이동
  window.scrollTo(0, iframe.offsetTop);
   }
}var iframeCreated = false;
var iframe;

function openForm() {
   if (!iframeCreated) {
  iframe = document.createElement("iframe");
  iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSckqp7M0U8-QMyPl1Jezzz-3H9Dp-umocahHMbcLOorncQNuA/viewform?embedded=true";
  iframe.width = "640";
  iframe.height = "1402";
  iframe.frameBorder = "0";
  iframe.marginHeight = "0";
  iframe.marginWidth = "0";
  iframe.textContent = "Wird geladen…";
  document.body.appendChild(iframe);

  iframeCreated = true;

 // 스크롤을 iframe으로 이동
  window.scrollTo(0, iframe.offsetTop);
   }
}