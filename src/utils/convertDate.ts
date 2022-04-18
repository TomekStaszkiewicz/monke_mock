export function convertDate(d: string | Date): Date {
    if(typeof d === 'string'){
        return new Date(d);
    }
    return d;
}