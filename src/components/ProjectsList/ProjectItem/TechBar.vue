<script setup lang="ts">
defineProps<{
    items: Array<string>
}>();
</script>

<template>
    <div class="main">
        <div class="item" v-for="item in items">{{ item }}</div>
    </div>
</template>


<style scoped>
.main{
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: -15px;    
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    pointer-events: none;
    align-items: center;
    color: white;
}

.item{
    padding: 10px;
    padding-top: 1px;
    padding-bottom: 1px;
    border: 1px solid;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.377);
    border-radius: 2px;
    background-color: var(--color-primary);
    margin-right: 4px;
}
</style>