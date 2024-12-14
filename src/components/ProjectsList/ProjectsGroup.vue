<script setup lang="ts">
import type { ProjectGroupType, ProjectType } from "../../data/projects";
import Button from "../Button.vue";
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
        <div style="flex: 1; display: flex; flex-direction: column;">
            <h1 class="button" @click="() => handleClick(null)">{{ group.name }}</h1>

            <div style="width: 100%; padding: 20px; flex: 1;">
                <p class="description">{{ group.description }}</p>
            </div>

            <div style="width: 100%; display: flex; gap: 20px; flex-wrap: wrap;">
                <Button v-for="p in group.projects" @click="() => handleClick(p)">
                    <p>{{ p.name }}</p>
                </Button>
            </div>
        </div>
        <div class="list">
            <ProjectItem :group="group" :project="group.projects[0]" @click="handleClick" />
        </div>
    </main>

    <div class="divider"></div>

    <PreviewVideo v-if="selected && selected.preview" :open="Boolean(selected)" @close="handleClose" :group="group"
        :project="selected" />
</template>


<style scoped>
main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

h1 {
    font-size: 3rem;
}

.description {
    font-size: 1.2rem;
}

.list {
    flex: 1;
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

@media (min-width: 1080px) {
    main {
        flex-direction: row;
        gap: 0px;
    }
}
</style>