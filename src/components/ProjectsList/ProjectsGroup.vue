<script setup lang="ts">
import type { ProjectGroupType, ProjectType } from "../../data/projects";
import PreviewVideo from "./ProjectItem/PreviewVideo.vue";
import ProjectItem from "./ProjectItem/ProjectItem.vue";
import { ref } from 'vue';

const props = defineProps<{
    group: ProjectGroupType,
}>();

const selected = ref<ProjectType | null>(null);

const handleClick = (project: ProjectType | null) => {
    selected.value = project || props.group.projects[0];
}

const handleClose = () => {
    selected.value = null;
}

</script>

<template>
    <main>
        <h1 class="button" @click="() => handleClick(null)">{{ group.name }}</h1>
        <p class="description">{{ group.description }}</p>
        <div class="list">
            <ProjectItem v-for="project in group.projects" :group="group" :project="project" @click="handleClick" />
        </div>
    </main>

    <div class="divider"></div>

    <PreviewVideo v-if="selected && selected.preview" :open="Boolean(selected)" @close="handleClose" :group="group"
        :project="selected" />
</template>


<style scoped>
main {
    width: 100%;
}

h1 {
    font-size: 3rem;
}

.description {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.2rem;
}

.list {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
}

.divider {
    width: 100%;
    height: 1px;
    background-color: var(--color-primary);
    margin-top: 50px;
    margin-bottom: 50px;

}

.button {
    cursor: pointer;
}

.button:hover {
    color: #5555ff;
}

@media (min-width: 720px) {
    .description {
        padding-left: 100px;
        padding-right: 100px;
    }
}
</style>