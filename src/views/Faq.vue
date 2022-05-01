<script setup lang="ts">
var faqs:any = [
    {
        question: "Who is xtdrew and who is LayreBoi?",
        answer: "Both xtdrew and LayreBoi are the same person. I use LayreBoi as my music artist name, while I use xthedrew as a programmer name or username."
    },
    {
        question: "Where did you get these names?",
        answer: "I've got my name xthedrew from my older sister, while LayreBoi is from myself. The name xthedrew came back in 2016 after my sister was creating "+
                "an account for me so I can play the popular rhythm game. My music artist name came back in 2020 where I was brainstorming for artist names I "+
                "could choose, and then I've got an idea to remove the first two letters of my surname. I mostly looked for names that end with \"Boi\"."
    },
    {
        question: "How are they pronounced?",
        answer: "xthedrew: Ex-the-drew<br>LayreBoi: La-ih-reh-boy"
    },
    {
        question: "How should I call you?",
        answer: "You can call me Layre."
    },
    {
        question: "What are your goals as xtdrew?",
        answer: "My goal is to get my dream job as a part of IT, like software/game developing and website developing."
    },
    {
        question: "What are your goals as LayreBoi?",
        answer: "As LayreBoi, my goal is to enjoy the making of music and learn more in the future."
    },
    {
        question: "What softwares do you use?",
        answer: "I use Visual Studio Code as my editor."
    },
    {
        question: "What are your specs?",
        answer: "I own two computers, but I'll show the specs of my main PC:<br><br>"+
                "CPU: Intel Core i5-2320<br>"+
                "MBO: Medion MS-7728 v2.0<br>"+
                "RAM: 12 GB DDR3 1333MHz<br>"+
                "GPU: MSI GeForce GTX 960 4G<br>"+
                "PSU: be quiet! System Power 9, 600W<br>"+
                "OS: Windows Pro Edition, 64 bit<br>"+
                "Boot mode: UEFI (formerly Legacy)<br>"+
                "BIOS: AMI E7728MLN.208, 08/15/2011<br><br>"+
                "If you'd like to view the specs of my other PC, contact me."
    }
]
</script>

<template>
    <div class="pagecont_FAQ"> <!-- To avoid problems with transitions -->
        <div class="typea"><h1>Frequently Asked Questions</h1></div>
        <div class="spacer-small"></div>
        <div class="faqboxes">
            <div class="faqboxitem" v-for="q in faqs" :key="q">
                <h4 class="Merlin">{{ q.question }}</h4>
                <p v-html="q.answer"></p>
            </div>
        </div>
        <div class="spacer-small"></div>
        <p>If you have more questions, simply contact me by Discord or by email (contact@layreboi.me).</p>
        <div class="spacer-small"></div>
        <div class="spacer-mobile"></div>
    </div>
</template>

<style scoped lang="scss">
.pagecont_FAQ {
    border-radius: 18px;
}

.faqboxes {
    .faqboxitem {
        border-radius: 9px;
        padding: 2px 8px;

        animation-name: appear;
        animation-duration: 0.5s;
        animation-timing-function: ease-in-out;
        animation-delay: 0.25s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        transform: translateY(-100%);
        opacity: 0;
    }
    display: flex;
    flex-direction: column;
    gap: 5px;
    overflow: hidden;
    border-radius: 18px;
}

@keyframes appear {
    from {
        opacity: 0;
        transform: translateY(-100%);
    } to {
        opacity: 1;
        transform: translateY(0);
    }
}

.typea {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    h1 {
        animation-name: typea;
        animation-duration: 0.75s;
        animation-timing-function: ease-in-out;
        animation-delay: 0.1s;
        animation-iteration-count: 1;
        animation-fill-mode: both;
        overflow: hidden;

        border-right: none;
        white-space: nowrap;
        width: 0%;

        font-size: 25px;
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
        width: 358px;
        border-right: 5px solid #ff3392;
        transition: 0.25s;
        margin-right: -5px;
    }
    99% {
        width: 358px;
        border-right: 1px solid #ff3392;
        margin-right: -1px;
    }
    100% {
        width: 358px;
        border-right: none;
        transition: 0.25s;
        margin-right: none;
    }
}

@media only screen and (max-device-width: 285px) {
    .typea {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        h1 {
            animation: none;
            overflow: hidden;

            border-right: none;
            width: auto;

            font-size: 17px !important;
        }
    }
}

@media only screen and (max-device-width: 360px) {
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
            width: 280px;
            border-right: 5px solid #ff3392;
            transition: 0.25s;
            margin-right: -5px;
        }
        99% {
            width: 280px;
            border-right: 1px solid #ff3392;
            margin-right: -1px;
        }
        100% {
            width: 280px;
            border-right: none;
            transition: 0.25s;
            margin-right: none;
        }
    }

    .typea {
        h1 {
            font-size: 20px;
        }
    }
}
</style>

<style lang="scss">
.pagecont_FAQ {
    background-color: var(--color-bg);
}
.faqboxes {
    .faqboxitem {
        transition: var(--transition-mode);
        background-color: var(--color-fg);
    }
}
</style>
