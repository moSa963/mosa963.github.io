<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/Button.vue';
import Contact from '@/components/icons/contact.vue';

const open = ref(false);

const setOpen = (v: boolean) => {
    open.value = v;
}

</script>


<template>
    <dialog v-if="open" class="dialog" :open="open" @click="() => setOpen(false)">
        <a href="/resume_en.pdf" target="_blank">
            <Button style="min-width: 200px;">
                <p>Resume in English</p>
            </Button>
        </a>
        <a href="/resume_ar.pdf" target="_blank">
            <Button style="min-width: 200px;">
                <p>السيرة الذاتية باللغة العربية</p>
            </Button>
        </a>
    </dialog>
    <div class="resume">
        <Button @click="() => setOpen(true)">
            <Contact style="height: 35px;" />
            <p>Resume with contact information</p>
        </Button>
    </div>
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
    gap: 20px;
}

.resume {
    display: flex;
    justify-content: center;
}
</style>