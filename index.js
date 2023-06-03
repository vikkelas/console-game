const readline = require('readline');
const {
    stdin: input,
    stdout: output,
} = require('node:process');

const rl = readline.createInterface({ input, output });

const message = {
    start: 'Загадано число в диапазоне от 0 до 100\n',
    write: 'введите число\n',
    more: 'Больше\n',
    less: 'Меньше\n',
    end: 'Отгадано число',
    nan: 'Должно быть введено число\n'
}

const start = () => {
    //Функция случайного получения числа от макс до мин
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const result = getRandomInt(1,100);
    console.log(message["start"]);
    console.log(message['write'])
    rl.on('line', (input)=> {
        const number = Number(input)
        if(!number){
            console.log(message['nan'])
        }else if(number>result){
            console.log(message['more'])
        }else if(number<result){
            console.log(message['less'])
        }else{
            rl.close()
        }
    })

    rl.on('close', ()=>{
        console.log(`${message['end']} - ${result}`)
    })

}
start();