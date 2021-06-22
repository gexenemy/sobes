export class Main {
    constructor() {
        this.sortArray([5, 8, 1, 6, 3, 4])
    }

    private sortArray(array: number[]) {
        const oddNumbers: number[] = array.filter((n: number) => n % 2 !== 0).sort((a, b) => a - b);
        console.log(array.entries())
        console.log(oddNumbers)
        console.log(oddNumbers)
        // Return a sorted array.
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
