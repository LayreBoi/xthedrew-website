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
    <div> <!-- To avoid problems with transitions -->
        <h1>Page not found!</h1>
        <span>Looks like the application has reported a status code of 404. <span v-html="randomTextArray[Math.floor(Math.random() * randomTextArray.length)]"></span></span>
    </div>
</template>

<style scoped lang="scss">

</style>

<style lang="scss">

</style>