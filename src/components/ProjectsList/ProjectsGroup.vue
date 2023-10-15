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
        <p class="description">{{ group.description }}</p>
        <div class="list">
            <ProjectItem v-for="project in group.projects" :project="project" />
        </div>
    </main>

    <div class="divider"></div>
</template>


<style scoped>
main{
    width: 100%;
}
h1{
    font-size: 3rem;
}
.description{
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.2rem;
}
.list{
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
}

.divider{
    width: 100%;
    height: 1px;
    background-color: var(--color-primary);
    margin-top: 50px;
    margin-bottom: 50px;

}

@media (min-width: 720px) {
    .description {
        padding-left: 100px;
        padding-right: 100px;
    }
}
</style>