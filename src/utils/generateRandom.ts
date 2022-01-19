export function generateRandom(min: number, max: number): number {
    const delta = max - min;
    return min + Math.random() * (delta);
}