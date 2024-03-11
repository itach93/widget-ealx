// Create a button to show the widget
const showButton = document.createElement("button");
showButton.textContent = "EALX";

showButton.addEventListener("click", () => {
  if (formContainer.style.display === "none") {
    const orderNumberInput = document.getElementById("orderNumber");
    if (orderNumberInput && orderNumberInput.value !== "") {
      console.log("orderNumberInput exists");
      // Set the value of the input to the value of the text input
      document.getElementById("orderNumber").value = orderNumberInput.value;
      document.getElementById("orderNumberWidget").textContent =
        orderNumberInput.value;

      // Hide element with id "textInput"
      orderNumberInput.style.display = "none";
    } else {
      // Create an alert if the input does not exist
      alert("Input with id 'orderNumber' does not exist.");
      return;
    }
    console.log("inside");
    formContainer.style.display = "flex";
    showButton.style.display = "none";

    document.getElementById("orderNumber").style.display = "none";

    // Set style for body
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh";
    document.body.style.margin = "0";
    document.body.backgroundColor = "#f9f9f9";
  } else {
    console.log("outside");
    formContainer.style.display = "none";
    showButton.style.display = "block";

    // Remove style for body
    document.body.style.display = "block";
    document.body.style.justifyContent = "none";
    document.body.style.alignItems = "none";
    document.body.style.height = "none";
    document.body.style.margin = "none";
    document.body.backgroundColor = "none";
  }
});

// Create the main container div
const formContainer = document.createElement("div");
formContainer.classList.add("form-container");
formContainer.id = "widget";
formContainer.style.display = "none";

// Create the order number heading
const orderNumberHeading = document.createElement("h3");
orderNumberHeading.textContent = "Your order number: ";

// Create the span for the order number
const orderNumberSpan = document.createElement("span");
orderNumberSpan.classList.add("spanText");
orderNumberSpan.id = "orderNumberWidget";
orderNumberHeading.appendChild(orderNumberSpan);

// Append the order number heading to the form container
formContainer.appendChild(orderNumberHeading);

// Create the "Choose the quality" paragraph
const qualityParagraph = document.createElement("p");
qualityParagraph.style.marginTop = "25px";
qualityParagraph.style.marginBottom = "10px";
qualityParagraph.textContent = "Choose the quality to see the price";
formContainer.appendChild(qualityParagraph);

// Create the wrapper div
const wrapperDiv = document.createElement("div");
wrapperDiv.classList.add("wrapper");

// Create the options
const options = ["poor", "fair", "good"];
options.forEach((option) => {
  const optionDiv = document.createElement("div");
  optionDiv.classList.add("option");

  const radioInput = document.createElement("input");
  radioInput.classList.add("input");
  radioInput.type = "radio";
  radioInput.name = "btn";
  radioInput.value = option;
  radioInput.onchange = handleOptionChange;

  const btnDiv = document.createElement("div");
  btnDiv.classList.add("btn");

  const span = document.createElement("span");
  span.classList.add("span");
  span.textContent = option.charAt(0).toUpperCase() + option.slice(1);

  btnDiv.appendChild(span);
  optionDiv.appendChild(radioInput);
  optionDiv.appendChild(btnDiv);
  wrapperDiv.appendChild(optionDiv);
});

// Append the wrapper div to the form container
formContainer.appendChild(wrapperDiv);

// Create the "You have selected" paragraph
const selectedOptionParagraph = document.createElement("p");
selectedOptionParagraph.style.display = "flex";
selectedOptionParagraph.classList.add("optionSelected");
selectedOptionParagraph.textContent = "$ ";
// Create the span for the selected option
const selectedOptionSpan = document.createElement("span");
selectedOptionSpan.classList.add("spanText");
selectedOptionSpan.id = "selectedOption";
selectedOptionParagraph.appendChild(selectedOptionSpan);

// Append the selected option paragraph to the form container
formContainer.appendChild(selectedOptionParagraph);

// Create the submit button
const submitButton = document.createElement("button");
const transitionSpan = document.createElement("span");
transitionSpan.classList.add("transition");
const gradientSpan = document.createElement("span");
gradientSpan.classList.add("gradient");
const labelSpan = document.createElement("span");
labelSpan.classList.add("label");
labelSpan.textContent = "Submit";
submitButton.appendChild(transitionSpan);
submitButton.appendChild(gradientSpan);
submitButton.appendChild(labelSpan);
formContainer.appendChild(submitButton);

submitButton.addEventListener("click", orderDiscount);

document.body.appendChild(showButton);
// Append the form container to the document body
document.body.appendChild(formContainer);

document.head.innerHTML = `
<style>
/* Form Container */
.form-container {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px 40px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    width: 300px;

    /* Center all container content */
    display: flex;
    flex-direction: column;
    align-items: center;

}

/* Widget Styles */

.wrapper {
    --font-color-dark: #323232;
    --font-color-light: #FFF;
    --bg-color: #fff;
    --main-color: #323232;
    position: relative;
    width: 250px;
    height: 36px;
    background-color: var(--bg-color);
    border: 2px solid var(--main-color);
    border-radius: 34px;
    display: flex;
    flex-direction: row;
    box-shadow: 4px 4px var(--main-color);
}

.option {
    width: 80.5px;
    height: 28px;
    position: relative;
    top: 2px;
    left: 2px;
}

.input {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    appearance: none;
    cursor: pointer;
}

.btn {
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.span {
    color: var(--font-color-dark);
}

.input:checked+.btn {
    background-color: var(--main-color);
}

.input:checked+.btn .span {
    color: var(--font-color-light);
}

.optionSelected {
    margin-top: 15px;
    font-family: fantasy;
}


button {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", "Courier New", monospace;
    font-size: 17px;
    padding: 1em 2.7em;
    font-weight: 500;
    background: #1f2937;
    color: white;
    border: none;
    position: relative;
    margin-top: 25px;
    overflow: hidden;
    border-radius: 0.6em;
    cursor: pointer;
}

.gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 0.6em;
    margin-top: -0.25em;
    background-image: linear-gradient(rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.3));
}

.label {
    position: relative;
    top: -1px;
}

.transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: rgba(16, 185, 129, 0.6);
    border-radius: 9999px;
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

button:hover .transition {
    width: 14em;
    height: 14em;
}

button:active {
    transform: scale(0.97);
}

.spanText {
    font-weight: bold;
}
</style>
`;

async function handleOptionChange(event) {
  const selectedValue = event.target.value;
  console.log("selectedValue", selectedValue);
  const selectedOption = document.getElementById("selectedOption");

  if (selectedValue) {
    const price = await fetchQualityPrice(selectedValue);
    selectedOption.textContent = price;
    selectedOption.style.fontFamily = "arial";
    selectedOption.style.fontWeight = "bold";
    selectedOption.style.textTransform = "capitalize";
    selectedOption.style.display = "block";
  } else {
    selectedOption.style.display = "none";
  }
}

async function fetchQualityPrice(value) {
  // const orderNumber = document.getElementById("orderNumber").value;
  const selectedOption = document.getElementById("selectedOption").textContent;
  console.log("selectedOption", selectedOption);

  const apiUrl = `https://ealx-5b5328789e08.herokuapp.com/v1/quality_based_prices/search?quality=${value}`;
  console.log("apiUrl", apiUrl);
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("data", data);

    return data.quality_based_price.price;
  } catch (error) {
    alert("An error occurred while fetching the price");
  }
  const price = await getPrice(orderNumber, selectedOption);
  alert(`The price for the order number ${orderNumber} is $${price}`);
}

async function orderDiscount() {
  const orderNumber = document.getElementById("orderNumber").value;
  const selectedOption = document.getElementById("selectedOption").textContent;
  const apiUrl = `https://ealx-5b5328789e08.herokuapp.com/v1/order_discounts`;

  // This endpoint is a post request
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_number: orderNumber,
        price: selectedOption,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("data", data);

    // Create a div below the input id 'orderNumber' to display the discount
    const discountDiv = document.createElement("div");
    discountDiv.textContent = `The discount for the order number ${orderNumber} is $${data.order_discount.price}`;
    discountDiv.style.marginTop = "20px";
    document.body.appendChild(discountDiv);

    // Hide the widget
    // formContainer.style.display = "none";

    console.log("outside");
    formContainer.style.display = "none";
    document.getElementById("orderNumber").style.display = "block";
    showButton.style.display = "block";

    // Remove style for body
    document.body.style.display = "block";
    document.body.style.justifyContent = "none";
    document.body.style.alignItems = "none";
    document.body.style.height = "none";
    document.body.style.margin = "none";
    document.body.backgroundColor = "none";
  } catch (error) {
    alert("An error occurred while fetching the discount");
  }
}
