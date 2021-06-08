const parts = [' ', 'в', 'с']
const endings = ['овый', 'овая', 'овой', 'ый', 'ий', 'ая', 'яя', 'ое', 'ее', 'ого', 'его', 'ой', 'ей', 'ыми', 'ими', 'ым', 'им',  'ых', 'их', 'ом', 'ем', 'а', 'я', 'о', 'е', 'ы', 'и' ]

export async function edit (string: string) {
        let arr = string.split(' ')

        for (let k = 0; k < arr.length; k++){
            arr[k] = arr[k].toLowerCase()
            if (parts.indexOf(arr[k],0)!= -1) {
                arr.splice(k, 0)
                k--
            }
        }

        for (let k = 0; k < arr.length; k++) {
            for (let i = 0; i < endings.length; i++) {
                let number = arr[k].lastIndexOf(endings[i])
                if (number == arr[k].length - endings[i].length) {
                    arr[k] = arr[k].slice(0, number)
                }
            }
        }

        return arr
    }
