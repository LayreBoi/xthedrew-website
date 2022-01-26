<script setup lang="ts">
// Load configuration
import config from '../config';

// Check device width
var vertical:boolean = window.innerWidth < config.maxwidth;
var devwidth:number = window.innerWidth;

// Make the website dynamic
window.onresize = function() {
    devwidth = window.innerWidth;

    if (devwidth < config.maxwidth) vertical = true;
    else vertical = false;

    updateBanner();
}

// Update the class name of the banner
function updateBanner() {
    if (document.getElementsByClassName('bannerdiv')[0] && vertical) {
        document.getElementsByClassName('bannerdiv')[0]
            .className = 'bannerdivv';
    } else if (document.getElementsByClassName('bannerdivv')[0] && !vertical) {
        document.getElementsByClassName('bannerdivv')[0]
            .className = 'bannerdiv';
    }
}

updateBanner();
</script>

<template>
    <div> <!-- To avoid problems with transitions -->
        <div class="spacer" v-if="vertical"></div>
        <div class="bannerdiv"><img class="banner" src="https://media.discordapp.net/attachments/887007337284526110/893925197231583295/Untitled116.jpg" alt="xthedrew logo"></div>
        <h1 class="mulish">Welcome!</h1>
        <span>Hi, I'm xthedrew, a young guy who does programming! I develop frontend applications with Vue and Angular, backend applications, discord bots with discordjs, and a mod for the popular open-source rhythm game.<br>Thank you for visiting my website. If you'd like to know more about me, you can check out the FAQ page. &lt;3</span>
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
    .banner {
        height: auto;
        width: 100%;
    }
}

.bannerdivv {
    border-radius: 18px;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    .banner {
        height: auto;
        width: 100%;
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
</style>
