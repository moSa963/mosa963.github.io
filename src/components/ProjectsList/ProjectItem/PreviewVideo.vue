<script setup lang="ts">
import type { ProjectGroupType, ProjectType } from '@/data/projects';
import Button from '@/components/Button.vue';
import Github from '@/components/icons/github.vue';


const props = defineProps<{
    project: ProjectType,
    group: ProjectGroupType,
    open: boolean,
}>();

const emits = defineEmits<{
    close: [],
}>();

</script>


<template>
    <dialog v-if="props.open" class="dialog" :open="props.open">
        <div class="bar">
            <h2>{{ group.name }}</h2>
            <div style="flex-grow: 1;"></div>
            <div class="close" @click="() => emits('close')">X</div>
        </div>
        <div class="vidCont">
            <div class="infoCard">
                <h2>{{ project.name }}</h2>
                <hr style="width: 50%;" />
                <Button>
                    <a :href="project.link" style="display: flex; align-items: center;">
                        <Github style="height: 50px; width: 50px;" />
                        <p>Github</p>
                    </a>
                </Button>
                <p>{{ group.description }}</p>
            </div>
            <div style="flex: 2; overflow: hidden; ">
                <video v-if="project.preview" controls autoplay style="background-color: transparent;">
                    <source :src="project.preview" type="video/mp4">
                </video>
            </div>
        </div>
    </dialog>
</template>

<style scoped>
.dialog {
    position: fixed;
    width: 100%;
    height: 100%;
    inset: 0 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    z-index: 100;
    padding: 2px;
    backdrop-filter: blur(20px);
    background-color: #11111122;
}

hr {
    margin: 15px;
}

h2 {
    color: var(--color-heading);
    font-size: 2rem;
    font-weight: bold;
}

.bar {
    width: 100%;
    padding: 10px;
    display: flex;
}

.close {
    color: red;
    font-size: 2rem;
    cursor: pointer;
    padding: 5px;
    font-weight: bolder;
}

.dialog video {
    width: 100%;
    height: 100%;
    background-color: black;
}

.vidCont {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden
}

.infoCard {
    width: 100%;
    flex: 1;
    overflow: auto;
    text-align: center;
    color: var(--color-heading);
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

@media (min-width: 1080px) {
    .vidCont {
        flex-direction: row;
    }

    .infoCard {
        width: 40%;
        height: 100%;
        flex: none;
    }
}
</style>