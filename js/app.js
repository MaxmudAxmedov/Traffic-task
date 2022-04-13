const elRed = document.querySelector('.red');
const elYellow = document.querySelector('.yellow');
const elGreen = document.querySelector('.green');



function func () {
    setTimeout( () => {
        elRed.style.backgroundColor = 'red';
        setTimeout(function() {
            elRed.style.backgroundColor = 'rgb(129, 129, 129)';
        }, 3000)
    }, 0);

    setTimeout(() => {
        elYellow.style.backgroundColor = 'yellow';
        setTimeout(() => {
            elYellow.style.backgroundColor = 'rgb(129, 129, 129)';
            setTimeout(() => {
                elYellow.style.backgroundColor = 'yellow';
                setTimeout(() => {
                    elYellow.style.backgroundColor = 'rgb(129, 129, 129)';
                    setTimeout(() => {
                        elYellow.style.backgroundColor = 'yellow';
                        setTimeout(() => {
                            elYellow.style.backgroundColor = 'rgb(129, 129, 129)';
                        }, 1000)
                    }, 1000);
                }, 1000)
            }, 1000);
        }, 1000)
    },3000);

    setTimeout(() => {
        elGreen.style.backgroundColor = 'green';
        setTimeout(() => {
            elGreen.style.backgroundColor = 'rgb(129, 129, 129)';
        }, 3000)
    },8000);

    setTimeout(() => {
        elYellow.style.backgroundColor = 'yellow';
        setTimeout(() => {
            elYellow.style.backgroundColor = 'rgb(129, 129, 129)';
            setTimeout(() => {
                elYellow.style.backgroundColor = 'yellow';
                setTimeout(() => {
                    elYellow.style.backgroundColor = 'rgb(129, 129, 129)';
                    setTimeout(() => {
                        elYellow.style.backgroundColor = 'yellow';
                        setTimeout(() => {
                            elYellow.style.backgroundColor = 'rgb(129, 129, 129)';
                        }, 1000)
                    }, 1000);
                }, 1000)
            }, 1000);
        }, 1000)
    },11000);

    setTimeout(() => {
        elRed.style.backgroundColor = 'red';
        setTimeout(() => {
            elRed.style.backgroundColor = 'rgb(129, 129, 129)';
        }, 3000)
    },16000);
}


func();
setInterval ( ()=> {
    func();
}, 16000);
