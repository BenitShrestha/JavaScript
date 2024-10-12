console.log('Password Generator')

class PasswordGenerator {
    constructor(length, strength) {
        this.len = length
        this.str = strength
    }
    generate() {
        let pass = ''
        let comps = {
            'upper': '',
            'lower': '',
            'num': '',
            'symb': ''
        }
        let collection = {
            1 : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            2 : 'abcdefghijklmnopqrstuvwxyz',
            3 : '0123456789',
            4 : '!@#$%^&*()_+'
        }

        // console.log('Collection: ' + collection[Math.floor(Math.random() * Object.keys(collection).length) + 1])
        // console.log(collection[1][Math.floor(Math.random() * collection[1].length)])
        if (this.str == 'strong') {
            let counts = this.distri()
            for(let i = 0; i < counts['uppercount']; i++) {
                comps['upper'] += collection[1][Math.floor(Math.random() * collection[1].length)]
            }
            for(let i = 0; i < counts['lowercount']; i++) {
                comps['lower'] += collection[2][Math.floor(Math.random() * collection[2].length)]
            }
            for(let i = 0; i < counts['numcount']; i++) {
                comps['num'] += collection[3][Math.floor(Math.random() * collection[3].length)]
            }
            for(let i = 0; i < counts['symbolcount']; i++) {
                comps['symb'] += collection[4][Math.floor(Math.random() * collection[4].length)]
            }
            pass = comps['upper'] + comps['lower'] + comps['num'] + comps['symb']

            let passlist = pass.split('')
            passlist = passlist.sort(() => Math.random() - 0.5) // Less than zero - Previous element, more than zero - Next element
            // console.log('Original Password: ' + pass)
            console.log("Strong Password: " + passlist.join(''))
        }
    }
    distri() {
        let uppercount = Math.floor(Math.random() * (this.len - (this.len/2))) + 1
        console.log('Upper count: ' + uppercount)
        let lowercount = Math.floor(Math.random() * (this.len - uppercount - (this.len/3))) + 1
        console.log('Lower count: ' + lowercount)
        let numcount = Math.floor(Math.random() * (this.len - uppercount - lowercount - (this.len/4))) + 1
        console.log('Number count: ' + numcount)
        let symbolcount = this.len - uppercount - lowercount - numcount
        console.log('Symbol count: ' + symbolcount)

        return {uppercount, lowercount, numcount, symbolcount}
    }
}

let pg = new PasswordGenerator(10, 'strong')
pg.generate()