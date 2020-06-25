const greet = (param) => {
    if (typeof(param) === 'string') {
        return `Hola ${param}!`
    } else {
        if (param.length > 1) {
            // let result = 'Hola '
            // for(let i = 0; i < param.length - 2; i++) {
            //     result = result + param[i] + ', '
            // }
            // result = result + param[param.length - 2 ] + ' y ' + param[param.length - 1] + '!'
            // return result
            return `Hola ${param.slice(0, -1).join(', ')} y ${param[param.length - 1]}!`
        } else {
            return `Hola ${param.join(', ')}!`
        }

    }
}


export default greet