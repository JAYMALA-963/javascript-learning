const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight. This ${weight} is not a valid option.`;
    }
    else if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height. This ${height} is not a valid option.`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            results.innerHTML = `<span>${bmi}</span></br><span>Under Weight</span>`
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `<span>${bmi}</span></br><span>Normal Range</span>`
        }
        else {
            results.innerHTML = `<span>${bmi}</span></br><span>Over Weight</span>`
        }
    }
});
