<script setup lang="ts">
import { ref } from "vue";
import Light from "./icons/light.vue";
import Dark from "./icons/dark.vue";
const theme = ref("dark");

const toggleTheme = () => {
    if (!document.body.classList.replace("dark", "light")) {
        document.body.classList.replace("light", "dark");
        theme.value = 'dark';
        return;
    }
    theme.value = 'light';
}
</script>


<template>
    <div class="icon-button" @click="toggleTheme">
        <Light v-if="theme === 'dark'" />
        <Dark v-else />
    </div>
</template>