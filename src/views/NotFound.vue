<script setup lang="ts">
var randomTextArray:string[] = [
    "Look for any typos in the URL.",
    "Make sure the link is up to date.",
    "Perhaps the content has been removed.",
    "Report me if something is missing!",
    "Please wait before trying again.",
    "Report me any bugs you find."
]
</script>

<template>
    <div class="boots-with-da-fur"> <!-- To avoid problems with transitions -->
        <h1 data-text="Page not found!" class="glitchEffect">Page not found!</h1>
        <span>Looks like the application has reported a status code of 404. <span v-html="randomTextArray[Math.floor(Math.random() * randomTextArray.length)]"></span></span>
        <div class="apple-bottom-jeans"></div>
    </div>
</template>

<style scoped lang="scss">
.boots-with-da-fur {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .apple-bottom-jeans {
        padding-bottom: 50px;
        width: 100%;
    }

    h1 {
        font-size: 80px;
    }

    .glitchEffect {
        &::before, &::after {
            content: attr(data-text);
            // position: absolute;
            // top: 0;
            // left: 0;
            // right: 0;
            position: absolute;
            left: 0px;
            right: 2px;
            overflow: hidden;
            background: none;
            clip: rect(0, 900px, 0, 0);
        }

        &::before {
            left: 7px;
            text-shadow: 1px 0 #0F0;
            animation: glitch 3s infinite linear alternate-reverse;
        }

        &::after {
            left: 3px;
            text-shadow: -1px 0 #F00;
            animation: glitch 2s infinite linear alternate-reverse;
        }
    }
}

@keyframes glitch {
    @for $i from 0 through 20 {
        #{
            percentage($i*calc(1/20))
        }{
            clip: rect(random(100)+px,9999px,random(100)+px,0);
        }
    }
}
</style>

<style lang="scss">

</style>