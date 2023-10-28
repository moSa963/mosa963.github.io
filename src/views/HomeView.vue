<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import Background from '@/components/Background.vue';
import ProjectsList from '@/components/ProjectsList/ProjectsList.vue';
import { projects } from '@/data/projects';
import Tools from '@/components/Tools/Tools.vue';
import { ref } from 'vue';
import user from '@/data/user';

const filter = ref<string[]>([]);

const setFilter = (data: string[]) => {
    filter.value = data;
}

const getBackSize = () => {
    return navigator.userAgent.indexOf('Firefox') === -1 ? 50 : 75;
}
</script>

<template>
    <Tools @filter-change="setFilter"/>
    <Background :size="getBackSize()"/>
    <div class="info">
        <AppHeader :title="`Hi, I'm ${user.name}`" :info="user.info" />
        <ProjectsList :list="projects" :filter="filter"/>
    </div>
</template>


<style scoped>
.info {
    position: absolute;
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

