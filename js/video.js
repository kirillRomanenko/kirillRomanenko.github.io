const controls = `
<div class="plyr__captions"></div>
<button type="button" class="plyr__control plyr__control--overlaid" data-plyr="play" aria-label="Play, View From A Blue Moon">
    
        <svg class="play__svg" xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 110 110">
            <defs>
                <style>
                    .aPlay{fill:rgba(255,255,255,0.1);stroke:#fff;}
                    .bPlay{fill:#fff;}
                    .cPlay{stroke:none;}
                    .dPlay{fill:none;}
                </style>
            </defs>
            <g transform="translate(-222 -336)">
                <g transform="translate(-809 -144)">
                    <g class="aPlay" transform="translate(1031 480)">
                        <circle class="cPlay" cx="55" cy="55" r="55"/>
                        <circle class="dPlay" cx="55" cy="55" r="54.5"/>
                    </g>
                    <path class="bPlay" d="M15,0V15H0Z" transform="translate(1075 534.607) rotate(-45)"/>
                </g>
            </g>
        </svg>
</button>
<div class="plyr__controls">
    <button type="button" class="plyr__control" aria-label="Play, {title}" data-plyr="play">
        <svg class="icon--pressed" role="presentation">
            <svg class="pause__svg" xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20">
                <defs>
                    <style>
                        .a{fill:#fff;}
                    </style>
                </defs>
                <g transform="translate(-1079 -525)">
                    <g transform="translate(1079 525)">
                        <rect class="a" width="4" height="20"/>
                        <rect class="a" width="4" height="20" transform="translate(12)"/>
                    </g>
                </g>
            </svg>
        </svg>
    </button>
    <div class="plyr__progress">
        <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
        <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
        <span role="tooltip" class="plyr__tooltip">00:00</span>
    </div>
    <div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
    <div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>
    <button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>
    </button>
    <!--<div class="plyr__volume">-->
        <!--<input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume">-->
    <!--</div>-->
    <button type="button" class="plyr__control" data-plyr="captions">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-captions-on"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-captions-off"></use></svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Disable captions</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">Enable captions</span>
    </button>
    <button type="button" class="plyr__control" data-plyr="fullscreen">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg>
        <svg class="icon--not-pressed" role="presentation">
            <svg class="fullscreen__svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <defs>
                    <style>
                        .a{fill:#ef5c3a;}
                    </style>
                </defs>
                <g transform="translate(0 -2.95)">
                    <g transform="translate(0 2.95)">
                        <path class="a" d="M.185,9.789.1,3.525A.566.566,0,0,1,.667,2.95l6.188.091a.568.568,0,0,1,.389.969L5.522,5.753l2.863,2.9L5.727,11.341l-2.863-2.9L1.142,10.186A.562.562,0,0,1,.185,9.789Z" transform="translate(-0.095 -2.95)"/>
                        <path class="a" d="M291.821,9.439l1.722,1.743a.56.56,0,0,0,.957-.393l.09-6.264a.566.566,0,0,0-.568-.575l-6.188.091a.568.568,0,0,0-.389.969l1.718,1.735-2.863,2.9,2.658,2.691Z" transform="translate(-274.59 -3.908)"/>
                        <path class="a" d="M287.345,290.779a.568.568,0,0,0,.389.969l6.188.091a.566.566,0,0,0,.569-.575L294.4,285a.56.56,0,0,0-.957-.393l-1.722,1.743-2.863-2.9-2.658,2.691,2.863,2.9Z" transform="translate(-274.494 -271.839)"/>
                        <path class="a" d="M.573,290.838l6.188-.091a.568.568,0,0,0,.389-.969L5.427,288.04l2.863-2.9-2.658-2.691-2.863,2.9-1.722-1.743A.56.56,0,0,0,.09,284L0,290.263A.572.572,0,0,0,.573,290.838Z" transform="translate(0 -270.88)"/>
                    </g>
                </g>
            </svg>
        </svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span>
    </button>
</div>
`;

// Setup the player
const player = new Plyr('#player', { controls });
window.player = player;

// const playerAudio = new Plyr('audio', {});
// window.playerAudio = playerAudio;
