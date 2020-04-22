<template>
    <svg class="yq-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
</template>
<script>
import '../styles/icon'

export default {
    name:'yq-icon',
    props:{
        icon:{
            type:String,
            required:true
        }
    }
}
</script>
<style lang="scss">
    .yq-icon{
        width: 25px;
        height: 25px;
        vertical-align: middle;
    }
</style>