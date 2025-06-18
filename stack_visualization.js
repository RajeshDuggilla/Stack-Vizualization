let stackOutputContainer = document.querySelector('.stack-output-container');
let userInput = document.querySelector('.user_input');
let errMsg = document.querySelector('.err-msg');

const topStack = document.querySelector('#top-stack');
let lastPushedStack = document.querySelector('#last_pushed_stack_btn');
let lastPoppedStack = document.querySelector('#last_popped_stack_btn');

let outputMsg = document.querySelector('.result-msg');


const stack = [];

const pushBtn = document.querySelector('#pushBtn');
let index1 = 0;

pushBtn.addEventListener('click', () => {
    errMsg.textContent = "";
    if (stack.length === 5) return;
    if (userInput.value !== '') {
        // Create a new button element for the stack entry
        let btnEl = document.createElement('button');
        btnEl.classList.add('deleteBtn');
        btnEl.textContent = userInput.value;

        // Store a reference to the button
        btnEl.dataset.stackIndex = stack.length; // Associate the button with its index in the stack

        // Append the button to the container
        stackOutputContainer.appendChild(btnEl);

        const input = userInput.value.trim();

        stack.push(input); // Add the input to the stack

        // Update the last pushed stack display
        lastPushedStack.textContent = input;
        outputMsg.textContent = `Item ${input} is pushed`
        index1++;
    } else {
        errMsg.textContent = "Please enter your Item";
    }
});

const popBtn = document.querySelector('#popBtn');
let index = 1;
popBtn.addEventListener('click', () => {
    outputMsg.textContent = "";
    if (stack.length === 0) {
        lastPushedStack.textContent = ''; // Clear last pushed if the stack is empty
        lastPoppedStack.textContent = ''; // Clear last popped message
        return;
    }

    // Pop the last element from the stack
    let poppedEl = stack.pop();

    // Find and remove the button associated with the popped element
    let btnToRemove = document.querySelector(`.deleteBtn[data-stack-index="${stack.length}"]`);
    if (btnToRemove) {
        btnToRemove.remove(); // Remove the button
        outputMsg.textContent = `Item ${poppedEl} is popped`
    }

    // Update the last popped stack display
    lastPoppedStack.textContent = poppedEl;
    lastPushedStack.textContent = stack[stack.length - 1] || ''; // Update last pushed with the current top of the stack (if any)
    index++;
});


const resetBtn = document.querySelector('#resetBtn');

resetBtn.addEventListener('click', (e) => {
    console.log("Reset button clicked");

    // Clear the user input field
    userInput.value = '';

    // Clear the stack array
    stack.length = 0;

    // Clear the stack output container (remove all buttons)
    stackOutputContainer.innerHTML = '';

    // Reset the display for last pushed and last popped stack elements
    lastPushedStack.textContent = '';
    lastPoppedStack.textContent = '';
    outputMsg.textContent = "Stack is empty";
});
