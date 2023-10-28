<script setup lang="ts">
import { Point } from '@/models/Point';
import { onMounted, ref, onUnmounted } from 'vue';
import { lineLength } from "@/utils/line";

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
let lastPoint: Point | undefined;

onMounted(() => {
    if (canv.value === null) return;
    setSize(canv.value!);
    draw(canv.value!);
    window.addEventListener("resize", onResize);
    window.addEventListener("click", onMousemove);
    window.addEventListener("mousemove", onMousemove);
    window.addEventListener("mouseout", onMouseleave);
});

onUnmounted(() => {
    window.removeEventListener("resize", onResize);
    window.removeEventListener("click", onMousemove);
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
    draw(canv.value!, new Point(e.clientX, e.clientY));
}

const onMouseleave = () => {
    if (id != -1) return;

    var counter = 0;

    //start animation
    id = setInterval(() => {
        counter += 2;
        draw(canv.value!, new Point((lastPoint?.x || 0) - counter, lastPoint?.y || 0));

        if (counter >= radius / 5) {
            clearInterval(id);
            id = -1;
        }
    }, 20);
}

const setSize = (e: HTMLCanvasElement) => {
    if (window.innerWidth == null) {
        return;
    };

    radius = window.innerHeight * .75;
    e.width = window.innerWidth;
    e.height = window.innerHeight;
}

const draw = (e: HTMLCanvasElement, hover?: Point) => {
    lastPoint = hover;

    const ctx = e.getContext("2d");
    var backgroundColor = getComputedStyle(e as Element).getPropertyValue("--color-background");

    ctx!.reset();
    ctx!.beginPath();

    drawGrid(ctx!, backgroundColor, hover);
}

const drawGrid = (ctx: CanvasRenderingContext2D, color: string, hover?: Point) => {
    var y = 0;
    var offsety = props.size;

    //Start drawing from right to left
    if (hover && hover.y > window.innerHeight / 2) {
        y = window.innerHeight - (window.innerHeight % props.size);
        offsety *= -1;
    }

    while (y >= 0 && y <= window.innerHeight) {
        var x = 0;
        var offsetx = props.size;

        //Start drawing from bottom to top
        if (hover && hover.x >= window.innerWidth / 2) {
            x = window.innerWidth - (window.innerWidth % props.size);
            offsetx *= -1;
        }

        while (x >= 0 && x <= window.innerWidth) {
            drawRect(ctx, { x, y }, props.margin, color, hover);
            x += offsetx;
        }

        y += offsety;
    }
}

const drawRect = (ctx: CanvasRenderingContext2D, p: Point, margin: number, color: string, hover?: Point) => {
    let ratio = 1;
    let offset = { x: 0, y: 0 };

    ctx.shadowColor = "#00000055";
    ctx.shadowBlur = 1;

    if (hover) {
        ratio = lineLength(p, hover) / radius;
        offset = getOffset(hover);

        if (ratio <= 1.1) {
            ctx.shadowBlur = 10;
        }
    }

    ratio = ratio > 1 ? 1 : ratio;

    ctx.fillStyle = color;

    margin = (Math.min(0.99, ratio) * margin);

    ctx.transform(0.99, 0, 0, 0.99, p.x + (offset.x - (offset.x * ratio)), p.y + (offset.y - (offset.y * ratio)));

    ctx.fillRect(0, 0, props.size, props.size);

    ctx.shadowBlur = 0;

    ctx.resetTransform();
}

const getOffset = (p: Point) => {
    return {
        x: ((p.x / window.innerWidth) - 0.5) * -300,
        y: ((p.y / window.innerHeight) - 0.5) * -300,
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
    pointer-events: none;
}
</style>