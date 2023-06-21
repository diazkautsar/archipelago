// level 1 
/**
Create a function that counts the word frequency in this string "Four One two two three Three three four  four   four".  Case insensitive, ignore punctuation.
Expected Answer:
one => 1
two => 2
three => 3
four => 4
*/

const countString = (data: string) => {
    const libs: string[] = [
        'one',
        'two',
        'three',
        'four'
    ]

    const datas: string[] = data.split(' ')

    const result: {[K: string]: any} = {}

    for (let i = 0; i < datas.length; i++) {
        const item = datas[i]

        const data = item.length && libs.find(li => li.toLowerCase() === item.toLowerCase())

        if (!data) {
            continue
        }

        if (result[data]) {
            result[data] = result[data] + 1
        } else {
            result[data] = 1
        }
    }

    Object.keys(result).forEach(item => {
        console.log(`${item} => ${result[item]}`)
    })

}

countString("Four One two two three Three three four  four   four")