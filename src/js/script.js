const target = document.querySelectorAll('[data-yt-embed]');

target.forEach((videoEmbed) => {
  videoEmbed.classList.add('yt_container');
  const content = videoEmbed.dataset.ytEmbed;

  function createVideoPlayer(video_id) {
    videoEmbed.innerHTML = `<iframe
      src="https://www.youtube-nocookie.com/embed/${video_id}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      loading="lazy"
    >
    </iframe>
  `;
  }

  // Check to see if the supplied string contains a full URL or is already a video ID
  const isCompleteLink = content.match(/(http:\/\/|https:\/\/)/);
  if (isCompleteLink) {
    const regex =
      /(youtu.be\/|youtube.com\/watch\?v=|youtube.com\/embed\/|youtube-nocookie.com\/embed\/|youtube.com\/shorts\/)(.*)/;
    const videoIDOnly = content.match(regex)[2].replace(/(&.*|".*)/, '');
    createVideoPlayer(videoIDOnly);
  } else {
    createVideoPlayer(content);
  }
});
