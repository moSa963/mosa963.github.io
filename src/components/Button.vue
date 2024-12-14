<script setup lang="ts">
import { ref } from 'vue';


const down = ref(false);

const handleDown = () => {
    down.value = true;
}

const handleUp = () => {
    down.value = false;
}
</script>


<template>
    <div class="root" @mousedown="handleDown" @mouseup="handleUp" @mouseleave="handleUp"
        :style="{ transform: `scale(${down ? 0.95 : 1})` }">
        <slot />
    </div>
</template>

<style scoped>
.root {
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    gap: 6px;
    font-weight: bold;
    padding: 4px;
    cursor: pointer;
    user-select: none;
    width: fit-content;
    border: 1px solid;
    border-radius: 5px;
    background-color: rgba(19, 53, 98, 0.755);
}

.root:hover {
    background-color: rgba(19, 53, 98, 0.355);
}
</style>