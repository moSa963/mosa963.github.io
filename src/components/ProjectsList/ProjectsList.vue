<script setup lang="ts">
    import type { ProjectGroupType } from "../../data/projects";
import ProjectsGroup from "./ProjectsGroup.vue";

    defineProps<{
        list: Array<ProjectGroupType>,
    }>();
</script>


<template>
    <div class="list">
        <ProjectsGroup v-for="group in list" :group="group" />
    </div>
</template>


<style>
.list{
  display: flex;
  flex-wrap: wrap;
}
</style>