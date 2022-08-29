const arrOfLetters = [];
const arrOfNumbers = [1,2,3,4,5,6,7,8,9,0];
for (let index = 65; index <= 90; index++) {
    arrOfLetters.push(String.fromCharCode(index).toLocaleLowerCase());
}

console.log(arrOfLetters);

const keyboard_wrapper = document.querySelector('.keyboard_wrapper');
const wrapper_of_numbers = document.querySelector('.wrapper_of_numbers');
const wrapper_of_keys = document.querySelector('.wrapper_of_keys');
const input = document.querySelector('.wrapper_of_input input');

for (let i = 0; i < arrOfNumbers.length; i++) {
    const key = document.createElement('button');
    key.innerHTML = arrOfNumbers[i];
    key.classList.add('number');
    key.addEventListener('click', () => input.value += key.innerHTML);
    wrapper_of_numbers.append(key);
}

createKeys();

(function createCaps() {
    const CapsLock = document.createElement('button');
    CapsLock.innerHTML = 'Caps Lock';
    CapsLock.classList.add('CL');
    wrapper_of_keys.append(CapsLock); 

    CapsLock.addEventListener('click', function () {
        if (arrOfLetters[0] === 'a') {
            for (let index = 0; index < arrOfLetters.length; index++) {
                const element = arrOfLetters[index];
                arrOfLetters[index] = element.toUpperCase();
            }
            changeKeys(arrOfLetters);
        }else{
            for (let index = 0; index < arrOfLetters.length; index++) {
                const element = arrOfLetters[index];
                arrOfLetters[index] = element.toLocaleLowerCase();
            }
            changeKeys(arrOfLetters);
        }
            
        }
    );
})();

function changeKeys(arrOfKeys) {
    let keys = document.querySelectorAll('.wrapper_of_keys .key');
    arrOfKeys.forEach((elem, index) => {
        keys[index].innerHTML = elem;
    });
}


function createKeys() {
    for (let i = 0; i < arrOfLetters.length; i++) {
        const key = document.createElement('button');
        key.innerHTML = arrOfLetters[i];
        key.classList.add('key');
        key.addEventListener('click', () => input.value += key.innerHTML);
        wrapper_of_keys.append(key);
    }
}

const Space = document.createElement('button');
Space.innerHTML = '—';
Space.classList.add('Space');
Space.addEventListener('click', () => input.value += ' ');
wrapper_of_keys.append(Space); 
