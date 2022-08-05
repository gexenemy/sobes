// import {finalize, interval, of, switchMap, tap} from "rxjs";

export class Main {
    constructor() {
        // this.pigIt('Pig latin is cool')
        console.log(this.add('1', '1'))
        console.log(this.add('123', '456'))
        console.log(this.add('888', '222'))
        console.log(this.add('1372', '69'))
        console.log(this.add('12', '456'))
        console.log(this.add('101', '100'))
        console.log(this.add('123', '321'))
        console.log(this.add('11', '99'))
        console.log(this.add('63829983432984289347293874', '90938498237058927340892374089'))
        // console.log(this.pigIt('Hello world !'))
    }

    private add(a, b) {
        return (Number(a) < Number.MAX_SAFE_INTEGER && Number(b) < Number.MAX_SAFE_INTEGER ? Number(a) + Number(b) : BigInt(a) + BigInt(b)).toString();
    }

    private pigIt(str){
        // pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
        // pigIt('Hello world !');     // elloHay orldway !
        const splitWords = str.split(' ');
        const modifiedWords = splitWords.map((word) => /\w/.test(word) ? `${word.slice(1)}${word.charAt(0)}ay` : word);
        return modifiedWords.join(' ');

        // лучшее решение кодварс:
        // return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
    }

    private capitalizeWord(word) {
        return `${word[0].toUpperCase()}${word.slice(1)}`;
    }

    private derive(coefficient,exponent) {
        // derive(7, 8) --> this should output "56x^7"
        // derive(5, 9) --> this should output "45x^8"
        return `${coefficient * exponent}x^${exponent - 1}`
    }

    private stringy(size) {
        console.log(Array(size).join('1'))
    }

    private stringClean(s){
        console.log(s.replace(/(\d)/g, ''))
    }

    private RomanNumerals(){
        const a = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

        const romanNumerals = {
            matrix: {
                'I': 1,
                'V': 5,
                'X': 10,
                'L': 50,
                'C': 100,
                'D': 500,
                'M': 1000
            },
            toRoman: (num) => {
                console.log(romanNumerals.matrix);
            }
        }

        romanNumerals.toRoman(1000);
    }

    private removeConsecutiveDuplicates(){
        const a = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
        console.log(a.split(' ').reduce((t,c,i,a) => {
            if (c !== a[i - 1]) {
                t += ` ${c}`;
            }
            return t;
        }, '').trim())
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
