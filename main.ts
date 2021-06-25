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

        this.easyLine(2)
        this.easyLine(3)
        this.easyLine(4)
        this.easyLine(5)
        this.easyLine(6)
        this.easyLine(7)
        this.easyLine(8)
    }

    private easyLine(n: number) {
        const factorial: any = (num: any) => num ? num * factorial(num - 1) : 1;
        let result: number[] = [];
        for (let i = 0; i <= n; i++) {
            result.push(factorial(n) / (factorial(i) * factorial(n - i)))
        }
        console.log((result.reduce((t, c) => t + (c ** 2), 0)))
    }

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

    private sumPairs(ints: number[], s: number) {
        ints.reduce((t, c, i, a) => {
            console.log(t, c)
            return t
        }, [])
        console.log()
        return [0, 0] || undefined;
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
