<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import Background from '@/components/Background.vue';
import ProjectsList from '@/components/ProjectsList/ProjectsList.vue';
import { projects } from '@/data/projects';
import Tools from '@/components/Tools/Tools.vue';
import { ref } from 'vue';

const filter = ref<string[]>([]);

const setFilter = (data: string[]) => {
    filter.value = data;
}

</script>

<template>
    <Tools @filter-change="setFilter"/>
    <Background />
    <div class="info">
        <AppHeader title="Hi, I'm mohamad" info="I am Mohamad, a passionate programmer, who thrives on a full range of programming challenges from
        crafting seamless front-end experiences to designing powerful back-end solutions.
        For me, programming is not just a profession; it's a boundless journey of creativity and
        problem-solving." />
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

