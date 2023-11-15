const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);

        //-------- {method 1} ---------
        // if (e.target.id === 'grey') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'white') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'blue') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'yellow') {
        //     body.style.backgroundColor = e.target.id;
        // }
        //---------- {method 2} ----------
        const color = e.target.id;
        switch (color) {
            case 'grey':
                body.style.backgroundColor = e.target.id;
                break;
            case 'white':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
            default:
                body.style.backgroundColor = 'lightYellow';
                break;
        }
    });
});