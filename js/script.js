function convertTemperature() {
    // Get input values
    const temperatureInput = document.getElementById("temperature").value;
    const scale = document.getElementById("scale").value;

    // Validate input
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    // Convert temp
    let result;
    let explanation;
    let formula;

    if (scale === "celsius") {
        result = (temperatureInput * 9 / 5) + 32;
        explanation = `${temperatureInput} Celsius is equal to ${result.toFixed(2)} Fahrenheit.`;
        formula = `The formula used for conversion : F = (C * 9/5) + 32`;
    } else if (scale === "fahrenheit") {
        result = (temperatureInput - 32) * 5 / 9;
        explanation = `${temperatureInput} Fahrenheit is equal to ${result.toFixed(2)} Celsius.`;
        formula = `The formula used for conversion  : C = (F - 32) * 5/9`;
    } else {
        result = temperatureInput * 5 / 4;
        explanation = `${temperatureInput} Reamur is equal to ${result.toFixed(2)} Celsius.`;
        formula = `The formula used for conversion : C = Re * 5/4`;
    }

    // Print result
    document.getElementById("resultExplanation").textContent = explanation;
    document.getElementById("resultContainer").classList.remove("hidden");

    // Print formula
    document.getElementById("formulaExplanation").textContent = formula;
    document.getElementById("formulaContainer").classList.remove("hidden");
}

function resetForm() {
    document.getElementById("tempForm").reset();
    document.getElementById("resultContainer").classList.add("hidden");
    document.getElementById("formulaContainer").classList.add("hidden");
}

// Reverse function converts
function reverseConversion() {
    const scale = document.getElementById("scale").value;
    if (scale === "celsius") {
        document.getElementById("scale").value = "fahrenheit";
    } else if (scale === "fahrenheit") {
        document.getElementById("scale").value = "reamur";
    } else { // scale === "reamur"
        document.getElementById("scale").value = "celsius";
    }
    convertTemperature();
}

function toggleDark() {
    var body = document.body;
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
    }
}