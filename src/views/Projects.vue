<script setup lang="ts">
import { projectlist } from '../config';

const proj:any[] = projectlist;
</script>

<template>
    <div> <!-- To avoid problems with transitions -->
        <div class="headds">
            <div class="wtf">
                <p>Select projects of mine:</p>
            </div>
        </div>
        <div class="projectlist">
            <div class="projectitem" v-for="pj of proj" :key="pj">
                <a :href="pj.link" target="_blank" style="text-decoration: none">
                    <div class="projectcover" :style="`background: url(${pj.cover});background-size: cover`">
                        <div class="pjtext">{{ pj.name }}</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
div {
    .headds {
        // width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        // k that didn't work, but too tired to fix it
        .wtf {
            width: 185px;
            text-align: center;
            // background-color: #eee;
            p {
                animation-name: typea;
                animation-duration: 0.75s;
                animation-timing-function: ease-in-out;
                animation-delay: 0s;
                animation-iteration-count: 1;
                animation-fill-mode: forwards;

                // transform: translateY(-100%);
                // opacity: 0;
                overflow: hidden;
                border-right: none;
                white-space: nowrap;
                width: 0%;

                position: relative;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
    .projectlist {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: space-around;
        // overflow: hidden;

        text-align: center;

        animation-name: onOpening003;
        animation-duration: 0.75s;
        animation-timing-function: ease-in-out;
        animation-delay: 0.25s;
        animation-iteration-count: 1;
        animation-fill-mode: both;

        transform: translateY(100%);
        opacity: 0;
        .projectitem {
            .projectcover {
                width: 200px;
                height: 200px;
                .pjtext {
                    border-radius: 9px;
                    backdrop-filter: blur(10px);
                    width: 100%;
                }
            }
            width: 200px;
            height: 200px;
            border-radius: 9px;
            overflow: hidden;
            text-decoration: none;
        }
        .projectitem:hover {
            transform: scale(1.05);
        }
    }
}
@keyframes onOpening003 {
    0% {
        opacity: 0;
        transform: translateY(100%);
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
        width: 185px;
        border-right: 5px solid #ff3392;
        transition: 0.25s;
        margin-right: -5px;
    }
    99% {
        width: 185px;
        border-right: 1px solid #ff3392;
        margin-right: -1px;
    }
    100% {
        width: 185px;
        border-right: none;
        transition: 0.25s;
        margin-right: none;
    }
}
</style>

<style lang="scss">
div {
    .headds {
        background-color: var(--color-bg);
        transition: var(--transition-mode);
    }
    .projectlist {
        .projectitem {
            background-color: var(--color-fg);
            .projectcover {
                .pjtext {
                    background-color: #66666655;
                    color: white;
                }
            }
            transition: var(--transition-mode);
        }
        .projectitem:hover {
            transition: var(--transition-mode);
        }
    }
}
</style>