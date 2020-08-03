export function parser(str, lng) {
    let arr = [];
    let line = '';
    let word = '';

    for (let i = 0; i < str.length; i++) {
        let a = str.substr(i, 1);

        // составляем слово
        if(a !== ' ') {
            word += a;
        } else {
            if(line.length + word.length + 1 <= lng) {
                if(line.length > 0) {
                    line = line + ' ' + word
                } else {
                    line += word;
                }
                word = '';
            } else {
                arr.push(line);
                line = word;
            }
        }
    }

    if(line.length + word.length + 1 <= lng) {
        if(line.length > 0) {
            line = line + ' ' + word
        } else {
            line += word;
        }
        word = '';
    } else {
        arr.push(line);
        line = word;
    }
    
    arr.push(line);

    return arr;
}