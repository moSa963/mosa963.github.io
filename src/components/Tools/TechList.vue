<script setup lang="ts">
import { projects } from '@/data/projects';
import { onMounted, ref } from 'vue';

const emits = defineEmits<{
    change: [
        techs: string[],
    ],
}>();

const techs = ref<Array<{ name: string, selected: boolean }>>([]);

onMounted(() => {
    projects.forEach(e => {
        e.projects.forEach(v => {
            v.technologies.forEach(t => {
                if (!techs.value.find(e => e.name === t)) {
                    techs.value.push({ name: t, selected: false });
                }
            })
        })
    });
});

const toggle = (tech: { name: string, selected: boolean }) => {
    tech.selected = !tech.selected;
    techs.value = [...techs.value];
    emits('change', techs.value.filter(e => e.selected).map(e => e.name));
}

</script>

<template>
    <div class="l">
        <p v-for="t in techs" @click="toggle(t)" :class="`item ${t.selected ? 'selected' : ''}`">{{ t.name }}</p>
    </div>
</template>

<style scoped>
.l {
    flex: 1;
    display: flex;
    overflow: auto;
    scrollbar-width: none;
    flex-direction: row;
}

.selected {
    background-color: var(--color-border);
}

.item {
    padding: 3px;
    text-wrap: nowrap;
    user-select: none;
    height: fit-content;
    cursor: pointer;
    border: 1px solid rgba(120, 120, 120, 0.46);
    border-radius: 5px;
    margin: 3px;
}

.item:hover {
    color: var(--color-heading);
}

.l::-webkit-scrollbar {
    display: none;
}



@media (min-width: 1080px) {
    .l {
        flex-direction: column;
    }
}
</style>