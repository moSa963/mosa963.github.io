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

//main canvas
const canv = ref<HTMLCanvasElement | null>(null);

/* 
| On this canvas the static background will be drawn so that it will be used 
| to erase any effect drawn on the main canvas using 
| the "drawImage" method instead of redrawing everything every time an event occurs
*/
const fixedCnv = document.createElement("canvas"); 

let color = "#000";
let radius = 800;
let id = -1;
let lastHover: Point | undefined;

onMounted(() => {
    if (canv.value === null) return;

    init();

    window.addEventListener("resize", onResize);
    window.addEventListener("click", onClick);
    window.addEventListener("mousemove", onMousemove);
    window.addEventListener("mouseout", onMouseleave);
});

onUnmounted(() => {
    window.removeEventListener("resize", onResize);
    window.removeEventListener("click", onClick);
    window.removeEventListener("mousemove", onMousemove);
    window.removeEventListener("mouseout", onMouseleave);
});

const init = () => {
    color = getComputedStyle(canv.value! as Element).getPropertyValue("--color-background");

    setSize();

    //draw the fixed background
    drawGrid(fixedCnv.getContext("2d")!, color);

    draw(canv.value!);
}

const onResize = () => {
    setSize();
    drawGrid(fixedCnv.getContext("2d")!, color);
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
        draw(canv.value!, new Point((lastHover?.x || 0) - counter, lastHover?.y || 0));

        if (counter >= radius / 5) {
            clearInterval(id);
            id = -1;
        }
    }, 20);
}

const onClick = (e: MouseEvent) => {
    color = getComputedStyle(canv.value! as Element).getPropertyValue("--color-background");
    setSize();
    drawGrid(fixedCnv.getContext("2d")!, color);
    draw(canv.value!);
}

const setSize = () => {
    if (window.innerWidth == null) {
        return;
    };

    radius = window.innerHeight * .75;
    canv.value!.width = fixedCnv.width = window.innerWidth;
    canv.value!.height = fixedCnv.height = window.innerHeight;
}

const draw = (e: HTMLCanvasElement, hover?: Point) => {
    lastHover = hover;

    const ctx = e.getContext("2d");

    ctx?.reset();
    ctx?.drawImage(fixedCnv, 0, 0);

    if (!hover) return;
    
    //if there is hover, clear the affected area and draw the hover effect 
    const area = getAffectedRect(hover, radius, props.size);

    ctx?.clearRect(area.p1.x, area.p1.y, area.p2.x - area.p1.x + props.size, area.p2.y - area.p1.y + props.size);
    ctx!.beginPath();

    drawGrid(ctx!, color, area, hover);
}

const drawGrid = (ctx: CanvasRenderingContext2D, color: string, area?: any, hover?: Point) => {
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
            if (area == undefined || ( x >= area.p1.x && x <= area.p2.x && y >= area.p1.y && y <= area.p2.y  )) {
                drawRect(ctx, { x, y }, props.margin, color, hover);
            }
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

    margin = Math.min(0.99, ratio) * margin;

    ctx.transform(0.99, 0, 0, 0.99, p.x + (offset.x - (offset.x * ratio)), p.y + (offset.y - (offset.y * ratio)));

    ctx.fillRect(0, 0, props.size, props.size);

    ctx.shadowBlur = 0;

    ctx.resetTransform();
}


const getAffectedRect = (c: Point, radius: number, size: number) => {
    const offset = size * ((radius / size) + 2);

    const p1 = {
        x: c.x - offset,
        y: c.y - offset,
    };

    p1.x -= p1.x % size;
    p1.y -= p1.y % size;


    const p2 = {
        x: c.x + offset,
        y: c.y + offset,
    };

    p2.x -= p2.x % size;
    p2.y -= p2.y % size;

    return { p1, p2 };
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