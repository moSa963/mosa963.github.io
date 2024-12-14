<script setup lang="ts">
import ThemeButton from '../ThemeButton.vue';

</script>

<template>
    <div class="root">
        <ThemeButton class="icon-button" />
    </div>
</template>

<style scoped>
.root {
    position: fixed;
    left: 0;
    right: 0;
    display: flex;
    justify-content: end;
    z-index: 10;
    padding: 10px;
}

.icon-button {
    width: 40px;
    height: 40px;
    padding: 5px;
    cursor: pointer;
    border-radius: 999px;
    border: 1px solid;
}

.icon-button:hover {
    color: var(--color-heading);
}
</style>