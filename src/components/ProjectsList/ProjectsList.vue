<script setup lang="ts">
import type { ProjectGroupType } from "../../data/projects";
import ProjectsGroup from "./ProjectsGroup.vue";

const props = defineProps<{
    list: Array<ProjectGroupType>,
    filter?: string[],
}>();

const checkFilter = (group: ProjectGroupType): boolean => {
    if (!props.filter || props.filter.length === 0) {
        return true;
    }

    for (const p of group.projects) {
        for (const f of props.filter) {
            if (p.technologies.find(e => e == f)) {
                return true;
            }
        }
    }

    return false;
}
</script>


<template>
    <div class="root">
        <div class="list">
            <ProjectsGroup v-for="group in list.filter(checkFilter)" :group="group" />
        </div>
    </div>
</template>


<style>
.root {
    width: 100%;
    display: flex;
    justify-content: center;
}

.list {
    display: flex;
    width: 100%;
    max-width: 1180px;
    flex-wrap: wrap;
}
</style>