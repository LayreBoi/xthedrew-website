<script setup lang="ts">
import themeService from './services/ThemeService';

const script = new (class {
  // The <body>
  private app: HTMLBodyElement = document.getElementsByTagName('body')[0]!;

  // Run
  constructor() {
    if (!localStorage.getItem('thememode')) localStorage.setItem('thememode', 'light');

    console.log(`%c Yo, hold up!`, 'font-size: 32px; font-weight: bolder; color: #ff3392');
    console.log(`%cWhat's up, curious developer? I've noticed you've opened the developer tools. If you're curious how this website is made, you can check out in my open-source repository at https://github.com/layreboi/xthedrew-website`, 'color: #171717');

    this.app.style.cssText = themeService.getCSS();
  }

  // Switch the theme
  public themeSwitcher(): void {
    themeService.switchTheme();
    this.app.getElementsByClassName('tmc')![0].innerHTML = themeService.darkMode ? 'L' : 'D';
    this.app.style.cssText = themeService.getCSS();
  }
})();
</script>

<script lang="ts">
import transHeader from './services/HeaderTransparent';
import themeSvc from './services/ThemeService';
const body = document.getElementsByTagName('body')[0];

export default {
  watch: {
    $route(to: any, from: any) {
      console.log('Path changed!');
      transHeader.setCSS(
        to.path == '/'
      );
      themeSvc.reloadTheme();
      body!.style.cssText = themeSvc.getCSS();
    }
  }
}
</script>

<template>
  <Particles id="background-part" :options="{
    background: {
      color: {
        //value: currentcol.colorbg,
        value: '#FFFFFF',
        opacity: 0.5
      }
    },
    fpsLimit: 30,
    particles: {
      //color: currentcol.colorfg
      color: {
        //value: currentcol.colortx,
        value: '#222222',
        opacity: 0.5
      },
      links: {
        //color: currentcol.colorfg,
        //color: currentcol.colortx,
        color: '#222222',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      move: {
        direction: 'none',
        enable: true,
        outMode: 'bounce',
        random: false,
        speed: 1,
        straight: false,
        warp: true
      },
      number: {
        density: {
          enable: true,
          value_area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.75
      },
      shape: {
        type: 'circle'
      },
      size: {
        random: true,
        value: 3
      }
    },
    detectRetina: true
  }" />
  <div class="container">
    <button v-on:click="script.themeSwitcher()" class="tmc" v-html="themeSvc.darkMode ? 'L' : 'D'"></button>
    <header>
      <router-link to="/" class="navLinks">
        <svg class="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="316"
          height="208" viewBox="0 0 316 208">
          <defs>
            <clipPath id="b">
              <rect width="316" height="208" />
            </clipPath>
          </defs>
          <g id="a" clip-path="url(#b)">
            <path
              d="M209.489,131.094V18.466h-23.1V131.094H165.352V18.466H144.708l-21.1,47.081,26.285,58.647,3.092,6.872h-.013l.013.028H0l.013-.028H0L29.364,65.547,0,.028H.013L0,0H246.078q70.085,0,70.085,63.9,0,30.351-19.444,48.771t-52.143,18.421Zm20.946-18.375h16.792q22.183,0,34.511-12.615T294.068,64.45q0-45.984-46.045-45.984H230.435v94.253ZM62.517,58.984l2,4.384v4.358l-2.061,4.52L44.441,111.988H108.53L88.467,67.726V63.368L108.53,19.106H44.441Z"
              transform="translate(0 38.453)" fill="#000" />
          </g>
        </svg>
      </router-link>
      <nav>
        <router-link to="/projects" class="navLinks">
          <div class="navItem">Projects</div>
        </router-link>
        <router-link to="/faq" class="navLinks">
          <div class="navItem">FAQ</div>
        </router-link>
        <router-link to="/about" class="navLinks">
          <div class="navItem">About</div>
        </router-link>
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

body {
  height: 100vh;
}

body,
#app {
  margin: 0;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--color-bg);
  overflow: overlay;
  transition: var(--transition-mode);

  /** Configures */
  --transition-mode: all ease-in-out 0.25s;
}

.spoiler {
  color: #00000000;
  transition: var(--transition-mode);
}

.spoiler:hover,
.spoiler:focus {
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

#background-part {
  width: 100%;
  height: 100%;
  z-index: 0;

  //filter: var(--invert-xtd);
  canvas {
    filter: var(--invert-xtd);
    transition: var(--transition-mode);
    opacity: var(--hide-bg);
  }

  opacity: 0;

  animation-name: background_part_fade;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.container {
  color: var(--color-tx);
  background-color: var(--color-bg);
  width: 100%;
  height: 100vh;
  transition: var(--transition-mode);
  z-index: 10;

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
    background: var(--headerbg);
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

@keyframes background_part_fade {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>