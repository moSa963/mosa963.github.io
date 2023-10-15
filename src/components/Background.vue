<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue';
const props = withDefaults(defineProps<{
    size?: number,
    margin?: number,
}>(), {
    size: 50,
    margin: 1,
});

const canv = ref<HTMLCanvasElement | null>(null);
let radius = 800;
let id = -1;
let lastPoint = { x: 0, y: 0 };

onMounted(() => {
    if (canv.value === null) return;
    setSize(canv.value!);
    draw(canv.value!);
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMousemove);
    window.addEventListener("mouseout", onMouseleave);
});

onUnmounted(() => {
    window.removeEventListener("resize", onResize);
    window.removeEventListener("mousemove", onMousemove);
    window.removeEventListener("mouseout", onMouseleave);
});

const onResize = () => {
    setSize(canv.value!);
    draw(canv.value!);
}

const onMousemove = (e: MouseEvent) => {
    clearInterval(id);
    id = -1;
    draw(canv.value!, e.clientX, e.clientY);
}

const onMouseleave = () => {
    if (id != -1) return;

    var counter = 0;

    id = setInterval(() => {
        counter += 1;
        draw(canv.value!, lastPoint.x - counter, lastPoint.y);

        if (counter >= radius * 2) {
            clearInterval(id);
            id = -1;
        }
    }, 15);
}

const setSize = (e: HTMLCanvasElement) => {
    if (window.innerWidth == null) return;
    radius = window.innerHeight * .75;
    e.width = window.innerWidth;
    e.height = window.innerHeight;
}

const draw = (e: HTMLCanvasElement, hoverX?: number, hoverY?: number) => {
    lastPoint = {
        x: hoverX || 0,
        y: hoverY || 0,
    };

    const ctx = e.getContext("2d");
    var backgroundColor = getComputedStyle(e as Element).getPropertyValue("--color-background");

    ctx?.reset();
    ctx!.beginPath();

    for (var y = 0; y <= window.innerHeight; y += props.size) {
        for (var x = 0; x <= window.innerWidth; x += props.size) {
            let ratio = 1;
            let color = backgroundColor;
            let offset = { x: 0, y: 0 };

            if (hoverX != null && hoverY != null) {
                ratio = ratioFromCenter(x, y, hoverX, hoverY, radius);
                color += (155 + Math.floor(100 * ratio)).toString(16);
                offset = getOffset(hoverX, hoverY);
            }

            drawRect(ctx!,
                x + offset.x - (offset.x * ratio),
                y + offset.y - (offset.y * ratio),
                props.margin - (Math.min(0.7, ratio) * props.margin),
                color
            );
        }
    }

}

const drawRect = (ctx: CanvasRenderingContext2D, x: number, y: number, margin: number, color: string) => {
    ctx.fillStyle = color;
    ctx.fillRect(x + margin, y + margin, props.size - margin * 2, props.size - margin * 2);
}

const ratioFromCenter = (x1: number, y1: number, cX: number, cY: number, radius: number) => {
    const l = Math.sqrt(Math.pow(Math.abs(cX - x1), 2) + Math.pow(Math.abs(cY - y1), 2));
    return l < radius ? l / radius : 1
}

const getOffset = (x: number, y: number) => {
    return {
        x: ((x / window.innerWidth) - 0.5) * -300,
        y: ((y / window.innerHeight) - 0.5) * -300,
    };
}

</script>

<template>
    <canvas ref="canv" width="1080" height="720"></canvas>
</template>

<style scoped>
canvas {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: var(--color-background-mute);
    z-index: -1;
}
</style>