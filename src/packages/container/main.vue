<template>
    <main class="yq-main">
        <slot></slot>
    </main>
</template>
<script>
export default {
    name:'yq-main'
}
</script>

<style lang="scss">
.yq-main{
    flex:1;
    padding:20px;
}
</style>