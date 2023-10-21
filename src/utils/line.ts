import type { Point } from "@/models/Point";

export const lineLength = (p1: Point, p2: Point) => {
    return Math.sqrt(Math.pow(Math.abs(p2.x - p1.x), 2) + Math.pow(Math.abs(p2.y - p1.y), 2))
}