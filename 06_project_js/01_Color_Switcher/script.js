const btns = document.querySelectorAll('.button')
const body = document.querySelector('body')


btns.forEach( function (button){
    button.addEventListener('click', function(e){
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id
            body.style.color = 'black'
        }
        if (e.target.id === 'aqua') {
            body.style.backgroundColor = e.target.id
            body.style.color = 'blacj'
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id
            body.style.color = 'white'
            
        }
        if (e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id
            body.style.color = 'black'
        }

    });
});

