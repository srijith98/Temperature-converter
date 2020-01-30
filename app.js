document.getElementById('convert').addEventListener('click', function(e) {
    // Get temperature value from input field
    let tempInCelsius = document.getElementById('temp-value').value;
    
    // Validate input
    if(tempInCelsius === '') {
        alert("Please enter a value..");
        window.location.reload();
    }
    else {
    //Display loading symbol
    document.getElementById('loading').style.display = 'block';
    e.target.textContent = 'Converting..';

    //call converTemperature after 2s
    setTimeout(convertTemperature, 1500);

    }
    e.preventDefault();
})


function convertTemperature() {
    //Hide loading symbol
    document.getElementById('loading').style.display = 'none';

    //Get input value
    const tempInCelsius = parseFloat(document.getElementById('temp-value').value);
    //Calculate F and K
    const farenheit = (tempInCelsius * 9/5) + 32;
    const kelvin = tempInCelsius + 273.15;

    const fOutput = document.getElementById('temp-farenheit');
    const kOutput = document.getElementById('temp-kelvin');

    fOutput.value = `${farenheit} °F`;
    kOutput.value = `${kelvin} K`;

    //Display output
    document.querySelector('.results').style.display = 'block';
    
    //Display reset button
    button = document.getElementById('convert');
    button.textContent = 'Reset';
    button.addEventListener('mousedown', function(e) {
        window.location.reload();
    })

}