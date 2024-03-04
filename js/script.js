//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;

function openVideoPopup(button) {
  var videoSource = button.getAttribute('data-video-source');
  var videoPlayer = document.getElementById('videoPlayer');
  var modal = document.getElementById('modal');
  var overlay = document.getElementById('overlay');
  var videoSourceElement = document.getElementById('videoSource');

  videoSourceElement.setAttribute('src', videoSource);
  // overlay.style.pointerEvents = "none";
  // modal.style.pointerEvents = "none";
  videoPlayer.style.pointerEvents = "none";
  videoPlayer.load();
  
  overlay.style.display = 'flex'; // Show overlay
  modal.style.display = 'block'; // Show modal
}

function openURL(button) {
  var url = button.getAttribute('data-url');
  var modal = document.getElementById('modal');
  var overlay = document.getElementById('overlay');
  var content = document.getElementById('content');

  content.innerHTML = ''; // Clear previous content

  if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
    // If the URL is an image
    var img = document.createElement('img');
    img.src = url;
    content.appendChild(img);
    document.getElementById('videoPlayer').style.display='none';
    document.getElementById('modal').style.width='90vw';
    document.getElementById('modal').style.height='90vh';
  } else if (url.match(/\.(pdf)$/) != null) {
    // If the URL is a PDF
    document.getElementById('videoPlayer').style.display='none';
    document.getElementById('modal').style.width='90vw';
    document.getElementById('modal').style.height='90vh';
    var pdfViewer = document.createElement('iframe');
    pdfViewer.src = url;
    pdfViewer.style.width = '90vw';
    pdfViewer.style.height = '90vh';
    pdfViewer.style.pointerEvents = "none";
    pdfViewer.frameBorder = '0';
    content.appendChild(pdfViewer);
  } else {
    // If the URL is a webpage or other types
    window.open(url, '_blank');
    return;
  }

  overlay.style.display = 'flex'; // Show overlay
  modal.style.display = 'block'; // Show modal

  // Prevent context menu on content
  content.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });
}


function openPopupd(url) {
  window.open(url, '_blank', 'width=640,height=480');
}

function closeVideoPopup() {
  var modal = document.getElementById('modal');
  var overlay = document.getElementById('overlay');
  var videoPlayer = document.getElementById('videoPlayer');

  modal.style.display = 'none'; // Hide modal
  overlay.style.display = 'none'; // Hide overlay
  videoPlayer.pause(); // Pause video
}