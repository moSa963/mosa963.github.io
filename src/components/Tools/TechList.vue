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

const handleWheel = (e: WheelEvent) => {
    const target = (e.currentTarget as HTMLElement);
    target.scrollBy(e.deltaY, 0);
    e.preventDefault();
}
</script>

<template>
    <div class="l" @wheel="handleWheel">
        <p v-for="t in techs" @click="toggle(t)" :class="`item ${t.selected ? 'selected' : ''}`">{{ t.name }}</p>
    </div>
</template>

<style scoped>
.l {
    width: 100%;
    display: flex;
    overflow: auto;
    scrollbar-width: none;
    flex-direction: row;
    gap: 10px;
    padding: 5px;
    margin-bottom: 20px;
}

.selected {
    background-color: var(--color-border);
}

.item {
    padding: 6px;
    width: fit-content;
    text-wrap: nowrap;
    user-select: none;
    cursor: pointer;
    border: 1px solid var(--color-border);
    border-radius: 5px;
    color: var(--color-heading);
}

.item:hover {
    color: var(--color-text);
}

.l::-webkit-scrollbar {
    display: none;
}
</style>