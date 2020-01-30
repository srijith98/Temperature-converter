document.getElementById('convert').addEventListener('click', function(e) {
    // Get temperature value from input field
    const tempField = document.getElementById('temp-value')
    const tempInCelsius = parseFloat(tempField.value);
    console.log(tempInCelsius);
    
    //Calculate F and K
    const farenheit = (tempInCelsius * 9/5) + 32;
    const kelvin = tempInCelsius + 273.15;

    const fOutput = document.getElementById('temp-farenheit');
    const kOutput = document.getElementById('temp-kelvin');

    fOutput.value = farenheit;
    kOutput.value = kelvin;

    const output = document.querySelector('.results');
    output.style.display = 'block';

    tempField.value = '';
    e.preventDefault();
})