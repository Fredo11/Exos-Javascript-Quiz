if (localStorage.getItem("StLaQuestion") == null) {
    var LaQuestion = 0;
    localStorage.setItem("StLaQuestion", LaQuestion);
} else if (localStorage.getItem("StLaQuestion") == 10) {
    var LaQuestion = 0;
    localStorage.setItem("StLaQuestion", LaQuestion);
} else {
    var LaQuestion = localStorage.getItem("StLaQuestion");
}
var courses;
var Btn1 = document.getElementById('BTN1');
var Btn2 = document.getElementById('BTN2');
var Btn3 = document.getElementById('BTN3');
var Btn4 = document.getElementById('BTN4');

var p1 = document.createElement('p');
p1.innerHTML = LaQuestion + " : <i class=\"material-icons icovert\">mood</i>";




    var Questions = new XMLHttpRequest();
    Questions.open('GET', 'http://localhost:80/Exos-Javascript-Quiz/question.json');
    Questions.onreadystatechange = Truc;
    Questions.send(null);

    function Truc() {
        if (Questions.readyState === 4) {
            courses = JSON.parse(Questions.responseText);
            Btn1.innerHTML = courses.Questions[LaQuestion].Reponse1;
            Btn2.innerHTML = courses.Questions[LaQuestion].Reponse2;
            Btn3.innerHTML = courses.Questions[LaQuestion].Reponse3;
            Btn4.innerHTML = courses.Questions[LaQuestion].Reponse4;


        }
    }

    var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('video-placeholder', {
            width: 600,
            height: 400,
            videoId: courses.Questions[LaQuestion].Question,
            playerVars: {
                color: 'white',
                autoplay: 1,
                autohide: 1,
                controls: 0,
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3,
                start: courses.Questions[LaQuestion].Start,
                end: courses.Questions[LaQuestion].End
            },
            events: {
                onReady: initialize,
                onReady: setPause
            }
        });
    }

    function setPause() {
        setTimeout(Pause, courses.Questions[LaQuestion].Pause);
    }

    function Pause() {
        player.pauseVideo();
    }

    function initialize() {

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

    Btn4.addEventListener("click", (reponse1) => {
        if (Btn4.id == courses.Questions[LaQuestion].Valid) {
            ++LaQuestion;
            localStorage.setItem("StLaQuestion", LaQuestion);
            var p = document.getElementsByTagName('p')[LaQuestion - 1];
            p.innerHTML = LaQuestion + " : <i class=\"material-icons icovert\">mood</i>";
            document.location.reload(true);
        } else {
            ++LaQuestion;
            localStorage.setItem("StLaQuestion", LaQuestion);
            var p = document.getElementsByTagName('p')[LaQuestion - 1];
            p.innerHTML = LaQuestion + " : <i class=\"material-icons icorouge\">mood_bad</i>";
            document.location.reload(true);
        }
    });