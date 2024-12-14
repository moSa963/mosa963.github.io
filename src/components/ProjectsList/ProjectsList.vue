<script setup lang="ts">
import { ref } from "vue";
import type { ProjectGroupType } from "../../data/projects";
import TechList from "../Tools/TechList.vue";
import ProjectsGroup from "./ProjectsGroup.vue";

defineProps<{
    list: Array<ProjectGroupType>,
}>();

const filter = ref<string[]>([]);

const checkFilter = (group: ProjectGroupType): boolean => {
    if (filter.value.length === 0) {
        return true;
    }

    for (const p of group.projects) {
        for (const f of filter.value) {
            if (p.technologies.find(e => e == f)) {
                return true;
            }
        }
    }

    return false;
}

const handleChange = (v: string[]) => {
    filter.value = v;
}
</script>


<template>
    <TechList @change="handleChange" />
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