<!-- <script setup lang="ts">
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

//     updateBanner();k
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
</script> -->

<template>
    <div class="pagecont">
        <!-- To avoid problems with transitions -->
        <div class="containere">
            <!-- <div class="spacer" v-if="vertical"></div> -->
            <div class="bannerdiv">
                <!-- <img class="banner" src="https://media.discordapp.net/attachments/887007337284526110/948251749381177374/xtdrew-xyz_SHIT.png?width=2600&height=800" alt="xthedrew logo"> -->
                <svg xmlns="http://www.w3.org/2000/svg" width="6424.09" height="600" viewBox="0 0 6424.09 600">
                    <path id="xtdrew-logo" d="M2289.3,600,2157.845,309.911V290.089L2290.116,0h163.012l-134.7,299.394L2453.129,600Zm-536.363,0,134.7-299.395L1752.942,0h163.82l131.464,290.089v19.821L1915.954,600Zm-794.137,0V84.517H853.062V600H756.792V84.517H662.307L565.732,300l120.3,268.418,14.154,31.454h-.058l.058.128H0l.058-.128H0L134.4,300,0,.128H.058L0,0H1126.266q320.771,0,320.769,292.47,0,138.911-88.991,223.218T1119.392,600Zm95.866-277.25V515.9h76.856q101.53,0,157.954-57.739t56.429-163.181q0-210.461-210.741-210.461h-80.5Zm-768.54-52.787,9.153,20.065v19.945l-9.433,20.687L203.4,512.554H496.728L404.9,309.972V290.027L496.728,87.446H203.4ZM6156.31,589.883l-110.427-405.8a277.4,277.4,0,0,1-8.493-56.643h-1.619a274.843,274.843,0,0,1-9.709,55.836l-110.831,406.6H5803.992L5641.791,9.709h105.575l105.167,424.815a309.42,309.42,0,0,1,8.091,55.831h2.022q1.619-20.631,11.328-55.831L5992.894,9.709H6092L6202.02,437.762q5.667,21.848,8.494,51.786h1.619q1.211-20.229,9.3-53.405L6324.583,9.709h99.507L6265.122,589.883Zm-1166.169,0,.408-85.366H5381.7v85.366Zm-359.6,0-92.632-155.359a324.755,324.755,0,0,0-24.473-36.615,147.255,147.255,0,0,0-24.27-24.88,81.843,81.843,0,0,0-26.9-14.162,111.988,111.988,0,0,0-32.764-4.449h-38.831V589.883h-95.866V9.709h190.923q40.854,0,75.233,9.713t59.868,29.329a136.864,136.864,0,0,1,39.841,48.956q14.365,29.331,14.363,68.576,0,30.752-9.1,56.441a146.751,146.751,0,0,1-25.889,45.719,158.2,158.2,0,0,1-40.45,34.185,202.037,202.037,0,0,1-53.191,21.848V326.1a149.412,149.412,0,0,1,27.508,19.624q11.727,10.72,22.248,22.05a263.781,263.781,0,0,1,20.831,25.691q10.313,14.359,22.854,33.378l103.148,163.045ZM4390.677,276.331h80.088a118.6,118.6,0,0,0,41.056-6.879,93.9,93.9,0,0,0,32.562-19.821,89.733,89.733,0,0,0,21.44-31.561q7.687-18.61,7.687-41.67,0-41.676-26.293-65.141T4471.577,87.8h-80.9ZM3472.869,589.883V9.709H3640.33q320.771,0,320.769,282.807,0,134.32-88.99,215.845t-238.653,81.523Zm95.866-81.321h76.856q101.529,0,157.954-55.831t56.429-157.789q0-203.5-210.745-203.5h-80.493Zm-671.468,81.321V91.438h-166.25V9.709H3160.19V91.438H2993.537V589.883ZM5057.7,338.638V256.506h256.452v82.132Zm-57.034-244.37V9.709h370.521V94.267Z" fill="#000" />
                </svg>
            </div>
            <!-- <div class="fuckOverflow"><div class="bananana"><h1 class="mulish">Welcome</h1></div></div> -->
            <!-- <div class="spacer"></div> -->
            <div class="homedesc"><span>
                    <div class="appeartext">Hi, I'm xtdrew, a young guy who does programming! I develop frontend
                        applications with Vue and Angular, backend applications, discord bots with discordjs, and a mod
                        for the popular open-source rhythm game.<br>Thank you for visiting my website. If you'd like to
                        know more about me, you can check out the FAQ page. &lt;3</div>
                </span></div>
            <div class="spacer-mobile"></div>
            <div class="spacer-mobile"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');

.pagecont {
    width: 100%;
    height: 100%;
    .containere {
        width: 100%;
        height: 90%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
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

            // .banner {
            //     height: auto;
            //     width: 100%;

            //     border-radius: 18px;

            //     animation-name: onOpening001;
            //     animation-duration: 1s;
            //     animation-timing-function: ease-in-out;
            //     animation-delay: 0s;
            //     animation-iteration-count: 1;
            //     animation-fill-mode: forwards;
            // }

            svg {
                height: auto;
                width: 90%;
                // height: 50%;
                // width: auto;

                animation-name: onOpening001;
                animation-duration: 0.5s;
                animation-timing-function: ease-in-out;
                animation-delay: 0s;
                animation-iteration-count: 1;
                animation-fill-mode: forwards;
            }
        }
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

// .fuckOverflow {
//     overflow: hidden;

//     display: flex;
//     justify-content: center;
//     align-items: center;

//     width: 100%;
//     .bananana {
//         width: 200px;
//         text-align: center;
//         .mulish {
//             // opacity: 0;

//             animation-name: typea;
//             animation-duration: 0.5s;
//             animation-timing-function: ease-in-out;
//             animation-delay: 0.25s;
//             animation-iteration-count: 1;
//             animation-fill-mode: forwards;

//             text-transform: uppercase;
//             letter-spacing: 5px;

//             border-right: none;
//             white-space: nowrap;
//             width: 0%;
//             overflow: hidden;
//         }
//     }
// }
</style>

<style lang="scss">
// Apply transition to everything

// .bannerdiv {
//     transition: var(--transition-mode);
//     // .banner {
//     //     transition: var(--transition-mode);
//     // }
// }

.bannerdiv,
.bannerdivv {
    transition: var(--transition-mode);

    svg {
        transition: var(--transition-mode);
        filter: var(--invert-xtd);
    }
}

.mulish {
    color: var(--color-tx)
}
</style>
