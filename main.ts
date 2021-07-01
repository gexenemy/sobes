export class Main {
    constructor() {
        // this.solution("apples !applesauce plums % and bananas\npears oranges !applesauce", ["%", "!"])
        // 1   1
        // 2   2
        // 4   6 / 3 = 2 ... -2
        // 8   20 / 4 = 5 ... -3
        // 16   70 / 5 = 14 ... -2
        // 32   252 / 6 = 42
        // 64   924 / 7 = 132
        // 128   3432 / 8 = 429
        console.log(this.sumPairs([1, 4, 8, 7, 3, 15], 8))
        console.log(this.sumPairs([1, -2, 3, 0, -6, 1], -6))
        console.log(this.sumPairs([20, -13, 40], -7))
        console.log(this.sumPairs([1, 2, 3, 4, 1, 0], 2))
        console.log(this.sumPairs([10, 5, 2, 3, 7, 5], 10))
        console.log(this.sumPairs([4, -2, 3, 3, 4], 8))
        console.log(this.sumPairs([0, 2, 0], 0))
        console.log(this.sumPairs([5, 9, 13, -3], 10))

    }

    private sumPairs(ints: number[], s: number) {
        let arr: number[] = [];
        for (let i = 0; i < ints.length; i++) {
            if (arr.length) {
                break;
            }
            ints.reduce((t, c, ind, a) => {
                if (ind + i < a.length && !arr.length && t + a[ind + i] === s) {
                    arr.push(t, a[ind + i])
                }
                return c
            })
        }
        return arr.length ? arr : undefined;
    }

    private easyLine(n: number) {
        const binCoef = (a: number, b: number) => {
            b = Math.min(b, a - b);
            let c: number = 1;
            for (let i = 0; i < b; i++) {
                c *= (a - i);
                c /= i + 1;
            }
            return c;
        }
        return binCoef(n * 2, n);
    }

    // private easyLine(n: number) {
    //     const factorial: any = (num: any) => num ? num * factorial(num - 1) : 1;
    //     let result: number[] = [];
    //     for (let i = 0; i <= n; i++) {
    //         result.push(factorial(n) / (factorial(i) * factorial(n - i)))
    //     }
    //     console.log((result.reduce((t, c) => t + (c ** 2), 0)))
    // }

    private isSatorSquare(tablet: string[][]) {
        const hor = tablet.flat().join('');
        const horR = tablet.flat().reverse().join('');
        const vert = tablet.reduce((t, c, i, a) => {
            a.forEach((v) => t.push(v[i]))
            return t
        }, []);
        const vertR = vert.reverse().join('');
        return [hor, horR, vert.join(''), vertR].every((d) => d === hor);
    }

    private findSquares(num: number) {
        const max = Math.pow((num + 1) / 2, 2);
        const min = Math.pow((num - 1) / 2, 2);
        return `${max}-${min}`
    }

    private overTheRoad(address: number, n: number) {
        console.log((n * 2) - address + 1)
    }

    private solution(input: string, markers: string[]) {
        console.log(input.replace(/((\w|\s)(!)(\w|\s)+)/g, ''))
    }

    private sortArray(array: number[]) {
        const oddNumbers: number[] = array.filter((n: number) => n % 2 !== 0).sort((a, b) => a - b);
        return array.map((n: number) => n % 2 !== 0 ? oddNumbers.shift() : n);
    }

    private songDecoder(string: string) {
        // console.log(string.replace(/WUB/g, ' ').replace(/\s+/g, ' ').trim())
        console.log(string.replace(/(WUB)+/g, ' ').trim())
    }

    private isPangram(string: string) {
        console.log(string.split('').reduce((t, c) => {
            if (/[A-Za-z]/g.test(c) && !t.some((l) => c === l.toLowerCase())) {
                t.push(c)
            }
            return t
        }, []))
    }

    private calc2() {
        const one = function (op?: any) {
            console.log(...arguments)
            return arguments.length === 0 ? 1 : arguments[0](1);
        }
        const two = function (op?: any) {
            console.log(...arguments)
            return arguments.length === 0 ? 2 : arguments[0](2);
        }

        const plus = function (op?: any) {
            console.log(...arguments)
            const n = arguments[0];
            return (x: number) => x + n;
        }
        console.log(one(plus(two())))
    }

    private calc() {
        const one = (digit?: any) => {
            return ((op: any) => {
                return op
            })(1)
        }
        const two = (digit?: any) => {
            return ((op: any) => {
                return op
            })(2)
        }
        const plus = (a: any) => {
            console.log(a)
            return ((b: any) => {
                console.log(a)
                console.log(b)
                return a + b
            })(a)
        }
        console.log(one(plus(two())))
    }

    private moveZeros(arr: any[]) {
        console.log(arr.reduceRight((t, c) => {
            c !== 0 ? t.unshift(c) : t.push(c)
            return t
        }, []));
    }

    private list(simpsons: { [name: string]: string }[]) {
        console.log(simpsons.reduce((t, c, i, a) => {
            t += (i === a.length - 1 ? c.name : i === a.length - 2 ? `${c.name} & ` : `${c.name}, `);
            return t
        }, ''));
    }

    private createPhoneNumber(numbers: number[]) {
        console.log(numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/g, '($1) $2-$3'));
    }

    private toCamelCase(str: string) {
        console.log(str.replace(/([-_]\w)/g, (match) => {
            return match.substr(1).toUpperCase()
        }))
    }
}

new Main();
