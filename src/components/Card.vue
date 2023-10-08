<script setup lang="ts">
const handleMouseMove = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    target.style.setProperty("--pos-x", x * 100 + "%");
    target.style.setProperty("--pos-y", y * 100 + "%");

    target.style.setProperty("--rot-x", ((y - 0.5) * 7) + "deg");
    target.style.setProperty("--rot-y", -((x - 0.5) * 3) + "deg");
}

const handleMouseLeave = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    target.style.setProperty("--rot-x", "0deg");
    target.style.setProperty("--rot-y", "0deg");
}
</script>
<template>
    <div class="card" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    --pos-x: 0%;
    --pos-y: 0%;
    --rot-x: 0;
    --rot-y: 0;
    transform: rotateX(var(--rot-x)) rotateY(var(--rot-y));
    transition: all 100ms;

}

.card::after {
    content: "";
    position: absolute;
    inset: 0 0 0 0;
    transition: all 1s;
    pointer-events: none;
}

.card:hover::after {
    background-image: radial-gradient(circle 500px at var(--pos-x) var(--pos-y), rgba(113, 113, 113, 0.2), transparent 75%);
}
</style>