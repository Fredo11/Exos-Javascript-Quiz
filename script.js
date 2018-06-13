var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        width: 600,
        height: 400,
        videoId: 'e395NwhfsU0',
        startSeconds: 14,
        endSeconds: 25,
        playerVars: {
            color: 'white',
            playlist: '',
            autoplay: 1,
            start: 14,
            end: 20
        },
        events: {
            onReady: initialize
        }
    });
}

function initialize(){

    // Update the controls on load
    updateTimerDisplay();
    updateProgressBar();

    // Clear any old interval.
    clearInterval(time_update_interval);

    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    time_update_interval = setInterval(function () {
        updateTimerDisplay();
        updateProgressBar();
    }, 1000)

}
loadVideoById({'videoId': 'e395NwhfsU0',
    'startSeconds': 14,
    'endSeconds': 25,
    'suggestedQuality': 'large'});