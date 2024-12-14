<script setup lang="ts">
import type { ProjectGroupType, ProjectType } from '../../../data/projects';
import Card from '@/components/Card.vue';
import TechBar from './TechBar.vue';
import Preview from "./Preview.vue";
import GithubButton from './GithubButton.vue';

const props = defineProps<{
    group: ProjectGroupType
    project: ProjectType
}>();


const emit = defineEmits<{
    click: [project: ProjectType]
}>();

const handleClick = () => {
    emit("click", props.project)
}

const getTechs = () => {
    var res: Set<string> = new Set<string>();

    props.group.projects.forEach(project => project.technologies.forEach(v => res.add(v)));

    return res;
}

const getImages = () => {
    var res: Set<string> = new Set<string>();

    props.group.projects.forEach(project => project.images.forEach(v => res.add(v)));

    return res;
} 
</script>


<template>
    <div style="width: 100%;">
        <div class="root" @click="handleClick">
            <Card class="main-card">
                <div class="image-div">
                    <Preview class="img" :images="new Array(...getImages())" />
                </div>
                <GithubButton class="git-button" :href="project.link" />
            </Card>
            <TechBar :items="new Array(...getTechs())" />
        </div>
    </div>

</template>


<style scoped>
.root {
    position: relative;
    width: 100%;
    perspective: 700px;
    cursor: pointer;
}

.main-card {
    position: relative;
    display: flex;
    overflow: hidden;
    aspect-ratio: 7/4;
    border-radius: 15px;
    border: 1px solid;
    background-color: var(--color-background);
    width: 100%;
}

h2 {
    color: var(--color-heading);
    font-size: 1.5rem;
    font-weight: bold;
}

.image-div {
    flex: 1;
    overflow: hidden;
    transition: all 300ms;
}

.image-div .img {
    object-fit: contain;
    object-position: 50% 50%;
}

.main-card:hover .image-div {
    background-color: var(--color-background);
}

.git-button {
    display: none;
}

.main-card:hover .git-button {
    display: block;
}

@media (min-width: 720px) {

    h2 {
        font-size: 2rem;
    }

    main {
        flex: 2;
    }

    .image-div {
        flex: 3;
    }
}
</style>