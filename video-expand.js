// Video Gallery with Play/Pause Toggle - Reimagined

document.addEventListener('DOMContentLoaded', function () {
    const videoContainers = document.querySelectorAll('.video-container');
    const demoVideosRow = document.querySelector('.demo-videos-row');

    videoContainers.forEach(container => {
        const video = container.querySelector('video');
        const playPauseBtn = container.querySelector('.play-pause-btn');

        // Handle click on the entire container (or play/pause button)
        container.addEventListener('click', function (e) {
            // Toggle play/pause
            if (video.paused) {
                playVideo(container, video);
            } else {
                pauseVideo(container, video);
            }
        });

        // Prevent video element clicks from propagating
        video.addEventListener('click', function (e) {
            e.stopPropagation();
        });

        // Update UI when video ends
        video.addEventListener('ended', function () {
            pauseVideo(container, video);
        });

        // Update grid layout when video plays
        video.addEventListener('play', function () {
            updateGridLayout();
        });

        video.addEventListener('pause', function () {
            updateGridLayout();
        });
    });

    function playVideo(container, video) {
        // Pause all other videos first
        videoContainers.forEach(vc => {
            if (vc !== container) {
                const v = vc.querySelector('video');
                pauseVideo(vc, v);
            }
        });

        // Now play this video
        container.classList.add('playing');
        video.play().catch(err => {
            console.log('Video play failed:', err);
        });
    }

    function pauseVideo(container, video) {
        container.classList.remove('playing');
        video.pause();
    }

    function updateGridLayout() {
        // Check if any video in the demo row is playing
        const demoContainers = demoVideosRow.querySelectorAll('.video-container');
        const hasPlaying = Array.from(demoContainers).some(c => c.classList.contains('playing'));

        if (hasPlaying) {
            demoVideosRow.classList.add('has-playing');
        } else {
            demoVideosRow.classList.remove('has-playing');
        }
    }
});
