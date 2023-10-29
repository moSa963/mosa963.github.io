<script setup lang="ts">
import Github from "../../icons/github.vue";
defineProps<{
    href: string,
}>();
</script>

<template>
    <a class="git-button-root" :href="href" target="_blank">
        <Github />
    </a>
</template>


<style>
.git-button-root {
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    transition: 1s;
    border-radius: 999px;
    background-color: var(--color-background);
}

.git-button-root:hover {
    transform: scale(1.1);
}
</style>