<script setup lang="ts">
var faqs:any = [
    {
        question: "Who is xthedrew and who is LayreBoi?",
        answer: "Both xthedrew and LayreBoi are the same person. I use LayreBoi as my music artist name, while I use xthedrew as a programmer name or username."
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
        question: "What are your goals as xthedrew?",
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
                "RAM: 8 GB DDR3 DIMM<br>"+
                "GPU: MSI GeForce GTX 960 4G<br>"+
                "PSU: 400W (idk the brand)<br>"+
                "OS: Windows Pro Edition<br>"+
                "Boot mode: UEFI (formerly Legacy)<br>"+
                "BIOS: AMI 08/15/2011<br><br>"+
                "If you'd like to view the specs of my other PC, contact me."
    }
]
</script>

<template>
    <div> <!-- To avoid problems with transitions -->
        <h1>Frequently Asked Questions</h1>
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
    </div>
</template>

<style scoped lang="scss">
.faqboxes {
    .faqboxitem {
        border-radius: 9px;
        padding: 2px 8px;
    }
    display: flex;
    flex-direction: column;
    gap: 5px;
    overflow: hidden;
    border-radius: 18px;
}
</style>

<style lang="scss">
.faqboxes {
    .faqboxitem {
        transition: var(--transition-mode);
        background-color: var(--color-fg);
    }
}
</style>