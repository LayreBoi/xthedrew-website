<script setup lang="ts">
// Load configuration
import config from '../config';

// Check device width
var vertical:boolean = window.innerWidth < config.maxwidth;
var devwidth:number = window.innerWidth;

// Make the website dynamic
// window.onresize = function() {
//     devwidth = window.innerWidth;

//     if (devwidth < config.maxwidth) vertical = true;
//     else vertical = false;

//     updateBanner();
// }

// Update the class name of the banner
// function updateBanner() {
//     if (document.getElementsByClassName('bannerdiv')[0] && vertical) {
//         document.getElementsByClassName('bannerdiv')[0]
//             .className = 'bannerdivv';
//     } else if (document.getElementsByClassName('bannerdivv')[0] && !vertical) {
//         document.getElementsByClassName('bannerdivv')[0]
//             .className = 'bannerdiv';
//     }
// }

// updateBanner();
</script>

<template>
    <div> <!-- To avoid problems with transitions -->
        <div class="spacer" v-if="vertical"></div>
        <div class="bannerdiv"><img class="banner" src="https://media.discordapp.net/attachments/887007337284526110/948251749381177374/xtdrew-xyz_SHIT.png?width=2600&height=800" alt="xthedrew logo"></div>
        <div class="fuckOverflow"><div class="bananana"><h1 class="mulish">Welcome</h1></div></div>
        <div class="homedesc"><span><div class="appeartext">Hi, I'm xtdrew, a young guy who does programming! I develop frontend applications with Vue and Angular, backend applications, discord bots with discordjs, and a mod for the popular open-source rhythm game.<br>Thank you for visiting my website. If you'd like to know more about me, you can check out the FAQ page. &lt;3</div></span></div>
    </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');

.bannerdiv {
    border-radius: 18px;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    position: relative;
    left: 50%;
    transform: translate(-50%);

    @media only screen and (max-device-width: 800px) {
        border-radius: 18px;
        height: auto;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .banner {
        height: auto;
        width: 100%;

        border-radius: 18px;

        animation-name: onOpening001;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-delay: 0s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
}

.homedesc {
    overflow: hidden;
    span .appeartext {
        animation-name: onOpening002;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-delay: 0.3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;

        transform: translateY(-100%);
    }
}

@keyframes onOpening001 {
    0% {
        transform: translateY(100%);
    }
    to {
        transform: translateY(0);
    }
}
@keyframes onOpening002 {
    0% {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
    }
}
@keyframes onOpening003 {
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes typea {
    0% {
        width: 0%;
        transition: 0.25s;
        border-right: 1px solid #ff3392;
        margin-right: -1px;
    }
    30% {
        transition: 0.25s;
        border-right: 40px solid #ff3392;
        margin-right: -40px;
    }
    90% {
        width: 200px;
        border-right: 5px solid #ff3392;
        transition: 0.25s;
        margin-right: -5px;
    }
    99% {
        width: 200px;
        border-right: 1px solid #ff3392;
        margin-right: -1px;
    }
    100% {
        width: 200px;
        border-right: none;
        transition: 0.25s;
        margin-right: none;
    }
}

.fuckOverflow {
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    .bananana {
        width: 200px;
        text-align: center;
        .mulish {
            // opacity: 0;

            animation-name: typea;
            animation-duration: 0.5s;
            animation-timing-function: ease-in-out;
            animation-delay: 0.25s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;

            text-transform: uppercase;
            letter-spacing: 5px;

            border-right: none;
            white-space: nowrap;
            width: 0%;
            overflow: hidden;
        }
    }
}
</style>

<style lang="scss">
// Apply transition to everything

.bannerdiv {
    transition: var(--transition-mode);
    .banner {
        transition: var(--transition-mode);
    }
}

.bannerdivv {
    transition: var(--transition-mode);
    .banner {
        transition: var(--transition-mode);
    }
}

.mulish {
    color: var(--color-tx)
}
</style>
