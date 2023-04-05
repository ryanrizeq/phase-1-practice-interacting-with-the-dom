document.addEventListener('DOMContentLoaded', () => {
    
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');
    const like = document.getElementById('heart');
    const pause = document.getElementById('pause');
    const submit = document.getElementById('submit');
    const commentList = document.getElementById('list');
    let isPaused = true;
    const numbersLiked = [];

    let intervalID = setInterval(() => {
        let timer = document.getElementById('counter');
        let currentNum = parseInt(timer.textContent);

        timer.innerText = currentNum + 1;
    }, 1000)

    pause.addEventListener('click', () => {
        if (isPaused === true) {
            clearInterval(intervalID);
            pause.innerText = 'resume'
            minus.disabled = true;
            plus.disabled = true;
            like.disabled = true;
            submit.disabled = true;
            isPaused = false;
        } else {
            isPaused = true;
            pause.innerText = 'pause'
            minus.disabled = false;
            plus.disabled = false;
            like.disabled = false;
            submit.disabled = false;
            intervalID = setInterval(() => {
                let timer = document.getElementById('counter');
                let currentNum = parseInt(timer.textContent);
        
                timer.innerText = currentNum + 1;
            }, 1000)
        }
        
    })

    minus.addEventListener('click', () => {
        let timer = document.getElementById('counter');
        let currentNum = parseInt(timer.textContent);

        timer.innerText = currentNum - 1;
    })

    plus.addEventListener('click', () => {
        let timer = document.getElementById('counter');
        let currentNum = parseInt(timer.textContent);

        timer.innerText = currentNum + 1;
    })

    like.addEventListener('click', () => {
        let currentNum = parseInt(document.getElementById('counter').textContent);
        const statement = document.createElement('li');
        numbersLiked.push(currentNum);
        let countOfCurrentNum = 0;
        for (i = 0; i < numbersLiked.length; i++) {
            if (numbersLiked[i] === currentNum) {
                countOfCurrentNum++;
            }
        }
        
        
        statement.textContent = `${currentNum} has been liked ${countOfCurrentNum} times!`;

        document.querySelector('ul').append(statement);
    })

        submit.addEventListener('click', (event) => {
            event.preventDefault();
            const newComment = document.createElement('p');
            newComment.innerText = document.querySelector('input').value;
            commentList.append(newComment);
        })
})