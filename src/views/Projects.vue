<script setup lang="ts">
import { projectlist } from '../config';

const proj:any[] = projectlist;
</script>

<template>
    <div> <!-- To avoid problems with transitions -->
        <p>Select projects of mine:</p>
        <div class="projectlist">
            <div class="projectitem" v-for="pj in proj" :key="pj">
                <a :href="pj.link" style="text-decoration: none"><div class="projectcover" :style="`background: url(${pj.cover});background-size: cover`"><div class="pjtext">{{ pj.name }}</div></div></a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
div {
    .projectlist {
        display: flex;
        gap: 10px;
        .projectitem {
            .projectcover {
                width: 200px;
                height: 200px;
                .pjtext {
                    border-radius: 9px;
                    backdrop-filter: blur(10px);
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
</style>

<style lang="scss">
div {
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