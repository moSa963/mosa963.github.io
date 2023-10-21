<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import Background from '@/components/Background.vue';
import ProjectsList from '@/components/ProjectsList/ProjectsList.vue';
import { projects } from '@/data/projects';
import ThemeButton from '@/components/ThemeButton.vue';

</script>

<template>
    <div class="tools">
        <ThemeButton />
    </div>
    <Background />
    <div class="info">
        <AppHeader title="Hi, I'm mohamad" info="I am Mohamad, a passionate programmer, who thrives on a full range of programming challenges from
        crafting seamless front-end experiences to designing powerful back-end solutions.
        For me, programming is not just a profession; it's a boundless journey of creativity and
        problem-solving." />
        <ProjectsList :list="projects" />
    </div>
</template>


<style scoped>
.tools {
    padding: 8px;
    position: fixed;
    pointer-events: auto;
}

.info {
    position: absolute;
    margin-left: 10px;
    margin-right: 10px;
    pointer-events: auto;
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

@media (min-width: 1080px) {
    .info {
        margin-left: 100px;
        margin-right: 100px;
    }
}
</style>

