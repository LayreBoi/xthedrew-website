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
        <h1>Page not found!</h1>
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
}
</style>

<style lang="scss">

</style>