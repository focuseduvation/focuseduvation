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
  } else if (url.match(/\.(pdf)$/) != null) {
      // If the URL is a PDF
      var pdfViewer = document.createElement('iframe');
      pdfViewer.src = 'https://docs.google.com/viewer?url=' + url;
      pdfViewer.style.width = '100%';
      pdfViewer.style.height = '100%';
      pdfViewer.frameBorder = '0';
      content.appendChild(pdfViewer);
  } else {
      // If the URL is a webpage or other types
      var iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.frameBorder = '0';
      content.appendChild(iframe);
  }

  overlay.style.display = 'flex'; // Show overlay
  modal.style.display = 'block'; // Show modal
}


function closeVideoPopup() {
  var modal = document.getElementById('modal');
  var overlay = document.getElementById('overlay');
  var videoPlayer = document.getElementById('videoPlayer');

  modal.style.display = 'none'; // Hide modal
  overlay.style.display = 'none'; // Hide overlay
  videoPlayer.pause(); // Pause video
}