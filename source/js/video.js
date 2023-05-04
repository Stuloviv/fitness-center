let videoPlayerElement = document.querySelector('.gym-room__video-player');
let videoPlaceholderElement = document.querySelector('.gym-room__video-placeholder');

videoPlaceholderElement.addEventListener('click', play);

function play() {
  videoPlayerElement.insertAdjacentHTML('afterbegin', '<iframe src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
  videoPlaceholderElement.style.display = 'none';
}
