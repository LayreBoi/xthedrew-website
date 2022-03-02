<script setup lang="ts">
// Load configuration
import config from './config';

// Get the #app element.
// Make sure you use if statement before using this one to avoid object is probably null error
const app = document.getElementsByTagName('body')[0];

// If user visits for the first time, set the theme mode to light
if (!localStorage.getItem('thememode')) {
  localStorage.setItem('thememode', 'light');
}

// Light theme and Dark theme configuration
const lightcol = {
    colorfg: '#eee',
    colorbg: 'white',
    colortx: 'black',
    logo: config.logo.black
}
const darkcol = {
    colorfg: '#222222',
    colorbg: 'black',
    colortx: 'white',
    logo: config.logo.white
}

var maxwidth:number = config.maxwidth;
var darkmode:boolean = localStorage.getItem('thememode') == 'light' ? false : true;
var vertical:boolean = window.innerWidth < maxwidth;
var devwidth:number = window.innerWidth;

// Make the website dynamic
window.onresize = function() {
  devwidth = window.innerWidth;

  if (devwidth < maxwidth) vertical = true;
  else vertical = false;

  if (app) app.style.cssText = loadTheme() + `--vertmode: ${vertical ? '95' : '80'}%;`;
}

// Update the button after theme change
function updateButton() {
  if (app) {
    const tbutton = app.getElementsByClassName('tmc');

    if (tbutton) tbutton[0].innerHTML = darkmode ? 'L' : 'D';
  }
}

// Update the theme
function changecolormode() {
  darkmode = !darkmode;
  localStorage.setItem('thememode', darkmode ? 'dark' : 'light');
  if (app) app.style.cssText = loadTheme();
  updateButton();
}

// Update the CSS text in the #app element
function loadTheme(): string {
  var curcol = localStorage.getItem('thememode');
  let currentcol = lightcol;
  if (curcol == 'dark') {
    currentcol = darkcol;
  }

  return  `--color-bg: ${currentcol.colorbg};`+
          `--color-fg: ${currentcol.colorfg};`+
          `--color-tx: ${currentcol.colortx};`+
          // `--xtdrew-lg: url('${currentcol.logo}');`+
          // `--maxdevwidth: ${config.maxwidth};`+
          `--invert-xtd: invert(${darkmode ? 1 : 0});`
}

if (app) app.style.cssText = loadTheme();

// Notice users opening devtools
console.log(`%c Yo, hold up!`, 'font-size: 32px; font-weight: bolder; color: #ff3392');
console.log(`%cWhat's up, curious developer? I've noticed you've opened the developer tools. If you're curious how this website is made, you can check out in my open-source repository at https://github.com/layreboi/xthedrew-website`, 'color: #171717');
</script>

<template>
  <div class="container">
    <button v-on:click="changecolormode()" class="tmc" v-html="darkmode ? 'L' : 'D'"></button>
    <header>
      <router-link to="/" class="navLinks">
        <svg class="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="316" height="208" viewBox="0 0 316 208"><defs><clipPath id="b"><rect width="316" height="208"/></clipPath></defs><g id="a" clip-path="url(#b)"><path d="M209.489,131.094V18.466h-23.1V131.094H165.352V18.466H144.708l-21.1,47.081,26.285,58.647,3.092,6.872h-.013l.013.028H0l.013-.028H0L29.364,65.547,0,.028H.013L0,0H246.078q70.085,0,70.085,63.9,0,30.351-19.444,48.771t-52.143,18.421Zm20.946-18.375h16.792q22.183,0,34.511-12.615T294.068,64.45q0-45.984-46.045-45.984H230.435v94.253ZM62.517,58.984l2,4.384v4.358l-2.061,4.52L44.441,111.988H108.53L88.467,67.726V63.368L108.53,19.106H44.441Z" transform="translate(0 38.453)" fill="#000"/></g></svg>
      </router-link>
      <nav>
        <router-link to="/projects" class="navLinks"><div class="navItem">Projects</div></router-link>
        <router-link to="/faq" class="navLinks"><div class="navItem">FAQ</div></router-link>
        <router-link to="/about" class="navLinks"><div class="navItem">About</div></router-link>
      </nav>
    </header>
    <div class="body">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
    </div>
    <!-- <span class="copyright">&copy; 2022 xtdrew</span> -->
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
  background: #00000000;
  transition: var(--transition-mode);
}

body::-webkit-scrollbar-thumb {
  background-color: var(--color-tx);
  border-radius: 20px;
  border: 5px solid #00000000;
  transition: var(--transition-mode);
}

body, #app {
  margin: 0;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--color-bg);
  height: 100vh;
  overflow: overlay;
  transition: var(--transition-mode);

  /** Configures */
  --transition-mode: all ease-in-out 0.25s;
}

.spoiler {
  color: #00000000;
  transition: var(--transition-mode);
}

.spoiler:hover, .spoiler:focus {
  color: var(--color-tx);
  transition: var(--transition-mode);
}

.spacer {
  width: 100%;
  height: 75px;
}

.spacer-small {
  width: 100%;
  height: 35px;
}

@media only screen and (max-device-width: 800px) {
  .spacer-mobile {
    width: 100%;
    height: 35px;
  }
}

.copyright {
  position: fixed;
  text-align: right;
  right: 5px;
  bottom: 5px;
  padding: 5px;
  border-radius: 4.5px;
  background-color: var(--color-bg);
  transition: var(--transition-mode);
}

.container {
  color: var(--color-tx);
  background-color: var(--color-bg);
  width: 100%;
  height: 100vh;
  transition: var(--transition-mode);
  .body {
    position: absolute;
    top: 110px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    @media only screen and (max-device-width: 800px) {
      width: 95%;
    }
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    height: calc(100vh - 110px);
    a {
      color: #ff3392;
      text-decoration: none;
    }
  }
  .tmc {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 10px;
    left: 10px;
    font-size: 30px;
    font-weight: bold;
    border: none;
    border-radius: 9px;
    color: var(--color-tx);
    background-color: var(--color-fg);
    transition: var(--transition-mode);
    -webkit-tap-highlight-color: transparent;
    z-index: 99;
  }
  .tmc:hover {
    transition: var(--transition-mode);
    transform: scale(1.1);
    cursor: pointer;
  }
  .tmc:active {
    transition: var(--transition-mode);
    transform: scale(1.2);
  }
  header {
    display: flex;
    align-items: center;
    width: 80%;
    @media only screen and (max-device-width: 800px) {
      width: 95%;
    }
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    height: 60px;
    background-color: var(--color-bg);
    transition: var(--transition-mode);
    z-index: 100;
    border-radius: 0 0 9px 9px;
    nav {
      position: absolute;
      right: 2px;

      display: flex;
      flex-direction: row;
      gap: 10px;
      .navLinks {
        text-decoration: none;
        color: var(--color-tx);
        transition: var(--transition-mode);
        .navItem {
          transition: var(--transition-mode);
          cursor: pointer;
          padding: 2px 4px;
          border-radius: 4.5px;
          -webkit-tap-highlight-color: transparent;
        }
       
        @media (hover: hover) and (pointer: fine) {
          .navItem:hover {
            transition: var(--transition-mode);
            transform: scale(1.1);
            background-color: var(--color-fg);
            // box-shadow: 0px 2px 2px #22222222;
          }
        }
        .navItem:active {
          transition: var(--transition-mode);
          transform: scale(1.2);
        }
      }
    }
    .logo {
      // background-image: var(--xtdrew-lg);
      width: 51.39px;
      height: 60px;
      background-size: cover;
      transition: var(--transition-mode);
      -webkit-tap-highlight-color: transparent;
      transform: scale(1.0);
      filter: var(--invert-xtd);
    }
    @media (hover: hover) and (pointer: fine) {
      .logo:hover {
        transform: scale(1.05);
        transition: var(--transition-mode);
        cursor: pointer;
      }
    }
    .logo:active {
      transition: var(--transition-mode);
      transform: scale(1.1);
    }
  }
}

.mulish {
  font-family: 'Mulish', Avenir, Helvetica, Arial, sans-serif;
}
</style>