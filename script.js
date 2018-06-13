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
            autoplay: 1,
            autohide: 1,
            controls: 0,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            start: 14,
            end: 19,
            end: 25
        },
        events: {
            onReady: initialize,
            onReady: setPause
        }
    });
}
function setPause(){
    setTimeout(Pause,7000);
}
function Pause() {
    player.pauseVideo();
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


