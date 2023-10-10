<script setup lang="ts">
    import type { ProjectGroupType } from "../../data/projects";
import ProjectItem from "./ProjectItem/ProjectItem.vue";

    defineProps<{
        group: ProjectGroupType,
    }>();
</script>

<template>
    <main>
        <h1>{{ group.name }}</h1>
        <p>{{ group.description }}</p>
        <div class="list">
            <ProjectItem v-for="project in group.projects" :project="project" />
        </div>
    </main>
</template>


<style scoped>
main{
    width: 100%;
}
h1{
    font-size: 3rem;
}
p{
    padding-left: 100px;
    padding-right: 100px;
    font-size: 1.2rem;
}
.list{
    width: 100%;
    flex-wrap: wrap;
    display: flex;
}
</style>