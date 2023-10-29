<script setup lang="ts">

const props = defineProps<{
    src: string,
    open: boolean,
}>();

const emits = defineEmits<{
    close: [],
}>();

</script>


<template>
    <dialog v-if="props.open" class="dialog" :open="props.open" @click="() => emits('close')">
        <video controls autoplay>
            <source :src="src"
                type="video/mp4">
        </video>
    </dialog>
</template>

<style scoped>
.dialog {
    position: fixed;
    width: 100%;
    height: 100%;
    inset: 0 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    z-index: 100;
    padding: 5px;
}

.dialog::after {
    content: "×";
    position: absolute;
    top: 0;
    right: 0;
    color: var(--color-text);
    font-size: 4rem;
}

.dialog>video {
    width: 100%;
    height: 100%;
    max-width: 1080px;
    max-height: 607px;
    background-color: black;
}
</style>