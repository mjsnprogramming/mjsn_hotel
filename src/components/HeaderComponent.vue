<template>
        <div id = "main">
            <div class = "rectangle"></div>
            <div class = "rectangle"></div>
            <div class = "rectangle"></div>
        </div>

</template>

<script>

</script>

<style lang = scss>
#main {
    width: 1110px;
    height: 56px;
    background-color: blue;
    margin-left: auto;
    margin-right: auto;
}
.rectangle {
    position: relative;
    margin-bottom: 0;
}
.rectangle:nth-child(1) {
    height: 46px;
    width: 10px;
    background-color: #AAC7F0;
    float: left;
}
.rectangle:nth-child(2) {
    height: 28px;
    width: 10px;
    background-color: #597193;
    float: left;
}
.rectangle:nth-child(3) {
    height: 34px;
    width: 10px;
    background-color: #353637;
    float: left;
}
</style>