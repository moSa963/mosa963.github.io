<script setup lang="ts">
import type { ProjectType } from '@/data/projects';
import { ref } from 'vue';

const props = defineProps<{
    project: ProjectType
}>();

const index = ref(0);
var id: number | undefined;

const handleMouseEnter = () => {
    id = setInterval(() => {
        index.value = (index.value + 1) % props.project.images.length;
    }, 2000);
}

const handleMouseLeave = () => {
    index.value = 0;
    clearInterval(id);
}

</script>


<template>
    <div class="main">
        <img @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" v-for="(image, i) in project.images" :key="i"
            :src="image" :style="{ opacity: i === index ? 1 : 0 }" />
    </div>
</template>


<style scoped>
.main {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.main img {
    position: absolute;
    inset: 0 0 0 0;
    width: 100%;
    height: 100%;
    object-position: inherit;
    object-fit: inherit;
    transition: all 500ms;
}
</style>