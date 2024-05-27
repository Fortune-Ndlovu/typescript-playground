
const multiplier = (a: number, b: number, plainText: string): number => {
    let result = a * b;
    console.log(plainText, result);
    return result;
}
 
multiplier(7, 7, "7 multiplied by 7 is ");