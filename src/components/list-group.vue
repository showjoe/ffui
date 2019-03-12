<template>
<ul :class="['list-group',{'list-group-flush':flush}]">
    <slot ></slot>
</ul>
</template>
<script>
export default {
  name:'list-group',
    props: {
        flush:Boolean
    },
    methods:{
    }
}
</script>