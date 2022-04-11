const config = {
    maxwidth: 800,
    logo: { 
        // PLEASE use media.discordapp.net instead of cdn.discordapp.net to improve performance, unless you use a different image hosting service!!!
        /** Light theme */ black: 'https://media.discordapp.net/attachments/887007337284526110/934365756668411904/Untitled165_20220122093536.png?width=128&height=150',
        /** Dark theme  */ white: 'https://media.discordapp.net/attachments/887007337284526110/934365756441903114/Untitled165_20220122093532.png?width=128&height=150'
    }
}

interface PJLIST {
    name: string,
    type: string,
    cover: `https://${string}` | `http://${string}`,
    lang: string,
    link: `https://${string}` | `http://${string}`
}

export default config;

/**
 * PROJECTLIST V1.0
 * A hardcoded list of projects in the website
 * @author xtdrew
 */
export const projectlist:PJLIST[] = [
    {
        name: `Friday Night Funkin' Gemashy`,
        type: `Mod`,
        cover: `https://media.discordapp.net/attachments/887007337284526110/896024167827271760/Untitled108_20210924014714.png?width=400&height=400`,
        lang: `hx`,
        link: 'https://gamejolt.com/games/gemashy/647186'
    },
    {
        name: `LayreBoi Next`,
        type: `Website`,
        cover: `https://media.discordapp.net/attachments/833015294313496616/943253434952482867/Untitled171_20220215221041.png?width=400&height=400`,
        lang: `vue-ts`,
        link: 'https://next.layreboi.me'
    }
]
