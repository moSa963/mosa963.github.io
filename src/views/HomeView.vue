<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import Background from '@/components/Background.vue';
import ProjectsList from '@/components/ProjectsList/ProjectsList.vue';
import { projects } from '@/data/projects';


</script>

<template>
    <Background />
    <main>
        <AppHeader 
            title="Hi, I'm mohamad" 
            info="I am Mohamad, a passionate programmer, who thrives on a full range of programming challenges from
                crafting seamless front-end experiences to designing powerful back-end solutions.
                For me, programming is not just a profession; it's a boundless journey of creativity and
                problem-solving." />
        <ProjectsList :list="projects" />
    </main>
</template>


<style scoped>
main {
    padding-left: 10px;
    padding-right: 10px;
}

@media (min-width: 1080px) {
    main {
        padding-left: 100px;
        padding-right: 100px;
    }
}
</style>

