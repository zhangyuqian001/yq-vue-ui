<template>
    <aside class="yq-aside" :style="{width}">
        <slot>
            
        </slot>
    </aside>
</template>

<script>
export default {
    name:'yq-aside',
    props:{
        width:{
            type:String,
            default:'300px'
        }
    }
}
</script>