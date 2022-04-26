export function generateRandom(min: number, max: number): number {
    const delta = max - min;
    return min + Math.floor(Math.random() * (delta));
}