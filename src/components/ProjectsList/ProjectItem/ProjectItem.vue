<script setup lang="ts">
import type { ProjectType } from '../../../data/projects';
import Card from '@/components/Card.vue';
import TechBar from './TechBar.vue';
import Preview from "./Preview.vue";
import GithubButton from './GithubButton.vue';

defineProps<{
    project: ProjectType
}>();

</script>


<template>
    <div class="root">
        <Card class="main-card">
            <main>
                <div class="info">
                    <h2>{{ project.name }}</h2>
                    <br />
                    <p>{{ project.description }}</p>
                </div>
            </main>
            <div class="image-div">
                <Preview class="img" :project="project" />
            </div>
            <GithubButton class="git-button" :href="project.link" />
        </Card>
        <TechBar :items="project.technologies" />
    </div>
</template>


<style scoped>
.root {
    position: relative;
    width: 100%;
    perspective: 700px;
    cursor: pointer;
    margin: 10px;
    margin-bottom: 80px;
}

.main-card {
    position: relative;
    height: 300px;
    display: flex;
    overflow: hidden;
    border-radius: 15px;
    border: 1px solid;
}

.main-card:hover {
    --marg: -100%;
}

main {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
}

.info {
    position: relative;
    flex: 1;
    word-wrap: break-word;
    text-align: center;
    padding: 3px;
    padding-right: 10px;
    overflow: hidden;
    z-index: -1;
}

h2 {
    color: var(--color-heading);
    font-size: 1.5rem;
    font-weight: bold;
}

.image-div {
    flex: 1;
    height: 100%;
    overflow: hidden;
    transition: all 300ms;
    margin-left: var(--marg);
}

.image-div .img {
    object-fit: cover;
    object-position: 0% 50%;
}

.main-card:hover .img {
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
    .root {
        width: 45%;
    }

    h2 {
        font-size: 2rem;
    }

    .main-card:hover {
        --marg: -67%;
    }

    main {
        flex: 2;
    }

    .image-div {
        flex: 3;
    }
}</style>