export function clamp(value:number, min:number, max:number) {
    return Math.min(Math.max(value, min), max);
}

//assumes x and y to be inbetween 0 and 1
// a-b
// | |
// c-d
export function squareLerp(a:number,b:number,c:number,d:number,x:number,y:number) {
    
    return (a*x + b*(1-x))*y+(c*x + d*(1-x))*(1-y);
}

export function round(this :number) {
    return Math.round(this)
}