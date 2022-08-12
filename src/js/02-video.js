import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', onPlay);

function onPlay(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data))
}


  const currentTime = localStorage.getItem('videoplayer-current-time');
  const parsCurrentTime = JSON.parse(currentTime);
  console.log(parsCurrentTime);

let parsSecond;

if (parsCurrentTime.seconds) {
    parsSecond = parsCurrentTime.seconds;
} else {
    parsSecond = 0;
}

player
    .setCurrentTime(parsSecond)
    .then(function(seconds) {
    // seconds = the actual time that the player seeked to
        seconds = parsSecond;
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });









