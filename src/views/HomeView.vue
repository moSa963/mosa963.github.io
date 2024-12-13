<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import Background from '@/components/Background.vue';
import ProjectsList from '@/components/ProjectsList/ProjectsList.vue';
import { projects } from '@/data/projects';
import Tools from '@/components/Tools/Tools.vue';
import { ref } from 'vue';
import user from '@/data/user';
import ResumeCard from '@/components/ResumeCard.vue';

const filter = ref<string[]>([]);

const setFilter = (data: string[]) => {
    filter.value = data;
}

</script>

<template>
    <Tools @filter-change="setFilter" />
    <Background :size="70" />
    <div class="info">
        <AppHeader :title="`Hi, I'm ${user.name}`" :info="user.info" />
        <ResumeCard />
        <ProjectsList :list="projects" :filter="filter" />
    </div>
</template>


<style scoped>
.info {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 60px;
    pointer-events: auto;
}

@media (min-width: 1080px) {
    .info {
        margin-left: 100px;
        margin-right: 100px;
        margin-top: 0px;
    }
}
</style>
