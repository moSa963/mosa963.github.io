<script setup lang="ts">
import ThemeButton from '../ThemeButton.vue';
import TechList from './TechList.vue';

const emits = defineEmits<{
    filterChange: [
        techs: string[],
    ],
}>();

</script>

<template>
    <div class="root">
        <div class="sec tl">
            <TechList @change="(e) => emits('filterChange', e)"/>
        </div>
        <div class="sec">
            <ThemeButton class="icon-button" />
        </div>
    </div>
</template>

<style scoped>
.root {
    position: fixed;
    inset: 0 0 0 0;
    overflow: hidden;
    display: flex;

}

.icon-button {
    width: 40px;
    height: 40px;
    padding: 5px;
    cursor: pointer;
    border-radius: 999px;
    border: 1px solid;
}

.icon-button:hover {
    color: var(--color-heading);
}

.sec {
    padding: 8px;
    min-width: 60px;
    display: flex;
    flex-direction: row;
}


@media (min-width: 1080px) {
    .root {
        justify-content: space-between;
    }

    .sec {
        height: 100%;
        flex-direction: column;
    }

}
</style>