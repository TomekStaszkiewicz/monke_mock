export function generateRandom(min: number, max: number, isInt = false): number {
    const delta = max - min;
    let interval = Math.random() * (delta);
    if(isInt){
        interval = Math.floor(interval);
    }
    return min + interval;
}