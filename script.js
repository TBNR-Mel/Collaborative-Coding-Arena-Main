// Initialize Ace Editor
const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.setFontSize(16);

// Challenge Data
const challenges = {
    javascript: [
        {
            title: "Sum of Two Numbers",
            description: "Write a function `sum(a, b)` that returns the sum of two numbers.",
            testCases: [
                { input: [1, 2], expected: 3 },
                { input: [-1, 1], expected: 0 },
                { input: [5, 5], expected: 10 }
            ],
            timeLimit: 60,
            solution: "function sum(a, b) { return a + b; }",
            feedback: {
                wrongOutput: "Check your arithmetic operation. Ensure you're adding the two numbers correctly.",
                syntaxError: "There's a syntax error in your code. Check for missing parentheses, incorrect operators, or undefined variables.",
                wrongFunctionName: "Ensure your function is named `sum` and takes two parameters."
            },
            hints: {
                wrongOutput: "Try using the `+` operator to add the two parameters `a` and `b` and return the result directly.",
                syntaxError: "Ensure your function declaration uses the correct syntax, e.g., `function sum(a, b) { ... }`.",
                wrongFunctionName: "Your function must be named `sum` and accept two parameters, like `function sum(a, b)`.",
                timeUp: "For this challenge, you need to add two numbers. Use the `+` operator and ensure your function is named `sum`."
            }
        },
        {
            title: "Reverse a String",
            description: "Write a function `reverseString(str)` that returns the reversed string.",
            testCases: [
                { input: ["hello"], expected: "olleh" },
                { input: ["world"], expected: "dlrow" },
                { input: [""], expected: "" }
            ],
            timeLimit: 60,
            solution: "function reverseString(str) { return str.split('').reverse().join(''); }",
            feedback: {
                wrongOutput: "Your function is not reversing the string correctly. Try splitting the string into an array, reversing it, and joining it back.",
                syntaxError: "There's a syntax error in your code. Check for incorrect string methods or syntax issues.",
                wrongFunctionName: "Ensure your function is named `reverseString` and takes one parameter."
            },
            hints: {
                wrongOutput: "Use `str.split('')` to convert the string to an array, `.reverse()` to reverse it, and `.join('')` to convert back to a string.",
                syntaxError: "Check the syntax for string methods, e.g., `split('')`, `reverse()`, and `join('')`.",
                wrongFunctionName: "Your function must be named `reverseString` and accept one parameter, like `function reverseString(str)`.",
                timeUp: "To reverse a string, split it into an array with `split('')`, reverse the array, and join it back with `join('')`."
            }
        }
    ],
    python: [
        {
            title: "Factorial",
            description: "Write a function `factorial(n)` that returns the factorial of a non-negative integer n.",
            testCases: [
                { input: [5], expected: 120 },
                { input: [0], expected: 1 },
                { input: [3], expected: 6 }
            ],
            timeLimit: 60,
            solution: "def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)",
            feedback: {
                wrongOutput: "Check your recursive or iterative logic. Ensure you're multiplying correctly for the factorial.",
                syntaxError: "There's a syntax error in your code. Check indentation, colons, or undefined variables.",
                wrongFunctionName: "Ensure your function is named `factorial` and takes one parameter."
            },
            hints: {
                wrongOutput: "For factorial, multiply `n` by the factorial of `n-1`. Use recursion or a loop to calculate it.",
                syntaxError: "Ensure proper indentation and use `def factorial(n):` with a colon after the parameter.",
                wrongFunctionName: "Your function must be named `factorial`, like `def factorial(n):`.",
                timeUp: "Use recursion for factorial: return 1 if n is 0, otherwise return n * factorial(n-1)."
            }
        }
    ],
    java: [
        {
            title: "Is Even",
            description: "Write a method `isEven(n)` that returns true if n is even, false otherwise.",
            testCases: [
                { input: [4], expected: true },
                { input: [7], expected: false },
                { input: [0], expected: true }
            ],
            timeLimit: 60,
            solution: "public boolean isEven(int n) {\n    return n % 2 == 0;\n}",
            feedback: {
                wrongOutput: "Check your modulo operation. Ensure you're correctly determining if the number is even.",
                syntaxError: "There's a syntax error in your code. Check for missing semicolons, braces, or incorrect method signatures.",
                wrongFunctionName: "Ensure your method is named `isEven` and returns a boolean."
            },
            hints: {
                wrongOutput: "Use the modulo operator `%` to check if `n` is divisible by 2 with no remainder.",
                syntaxError: "Check your method signature, e.g., `public boolean isEven(int n) { ... }`.",
                wrongFunctionName: "Your method must be named `isEven`, like `public boolean isEven(int n)`.",
                timeUp: "To check if a number is even, return `n % 2 == 0` to see if it’s divisible by 2."
            }
        }
    ],
    html: [
        {
            title: "Create a Heading",
            description: "Write HTML code to create a centered h1 heading with the text 'Welcome'.",
            testCases: [
                { input: [], expected: /<h1[^>]*style\s*=\s*['"][^'"]*text-align\s*:\s*center[^'"]*['"][^>]*>Welcome<\/h1>/i }
            ],
            timeLimit: 60,
            solution: "<h1 style=\"text-align: center;\">Welcome</h1>",
            feedback: {
                wrongOutput: "Ensure your h1 tag includes a style attribute with text-align: center and the text 'Welcome'.",
                syntaxError: "There's a syntax error in your HTML. Check for proper tag closing or attribute syntax.",
                wrongFunctionName: "Ensure you're using an h1 tag with the specified style."
            },
            hints: {
                wrongOutput: "Use an `<h1>` tag with a `style` attribute set to `text-align: center;` and the text 'Welcome' inside.",
                syntaxError: "Ensure your HTML tags are properly closed, e.g., `<h1 style=\"text-align: center;\">Welcome</h1>`.",
                wrongFunctionName: "Use an `<h1>` tag, not another tag type, with the correct style attribute.",
                timeUp: "Create an `<h1>` tag with `style=\"text-align: center;\"` and put 'Welcome' inside it."
            }
        }
    ],
    css: [
        {
            title: "Style a Box",
            description: "Write CSS to style a div with a red background and 100px width and height.",
            testCases: [
                { input: [], expected: /div\s*{\s*background(-color)?\s*:\s*(red|#ff0000)\s*;\s*width\s*:\s*100px\s*;\s*height\s*:\s*100px\s*;/i }
            ],
            timeLimit: 60,
            solution: "div {\n    background-color: red;\n    width: 100px;\n    height: 100px;\n}",
            feedback: {
                wrongOutput: "Ensure your CSS sets the background-color to red and both width and height to 100px.",
                syntaxError: "There's a syntax error in your CSS. Check for missing semicolons or incorrect property names.",
                wrongFunctionName: "Ensure you're styling a div with the correct properties."
            },
            hints: {
                wrongOutput: "Set `background-color: red;`, `width: 100px;`, and `height: 100px;` for the `div` selector.",
                syntaxError: "Ensure each CSS property ends with a semicolon and is inside `div { ... }`.",
                wrongFunctionName: "Use the `div` selector, like `div { ... }`, to apply the styles.",
                timeUp: "Style a `div` with `background-color: red; width: 100px; height: 100px;`."
            }
        }
    ]
};

let currentChallengeIndex = 0;
let timer;
let timeLeft;
let failedAttempts = 0;
let currentLanguage = "javascript";
let lastSubmissionFailed = false;

// Load Challenge
function loadChallenge(index, language) {
    const challenge = challenges[language][index];
    document.getElementById("challengeTitle").textContent = challenge.title;
    document.getElementById("challengeDescription").textContent = challenge.description;
    document.getElementById("testResults").innerHTML = "";
    document.getElementById("viewSolution").classList.add("hidden");
    document.getElementById("getHint").classList.add("hidden");
    document.getElementById("backChallenge").disabled = index === 0;
    editor.setValue("// Write your code here");
    editor.session.setMode(`ace/mode/${language}`);
    failedAttempts = 0;
    lastSubmissionFailed = false;
    startTimer(challenge.timeLimit);
}

// Timer Functionality
function startTimer(seconds) {
    timeLeft = seconds;
    document.getElementById("timeRemaining").textContent = `Time Remaining: ${timeLeft}s`;
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timeRemaining").textContent = `Time Remaining: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("testResults").innerHTML = "<p class='text-red-500'>Time's up!</p>";
            document.getElementById("submitCode").disabled = true;
            if (lastSubmissionFailed) {
                document.getElementById("getHint").classList.remove("hidden");
            }
        }
    }, 1000);
    document.getElementById("submitCode").disabled = false;
}

// Syntax Highlighting for Feedback
function highlightCode(code, language) {
    let formattedCode = code;
    if (language === "javascript" || language === "python" || language === "java") {
        formattedCode = formattedCode
            .replace(/(function|def|public|boolean|int|return)\b/g, '<span class="keyword">$1</span>')
            .replace(/('.*?')|(".*?")/g, '<span class="string">$1$2</span>')
            .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
            .replace(/(\/\/.*$)/gm, '<span class="comment">$1</span>')
            .replace(/(true|false)\b/g, '<span class="keyword">$1</span>');
    } else if (language === "html") {
        formattedCode = formattedCode
            .replace(/(<[^>]+>)/g, '<span class="tag">$1</span>')
            .replace(/(\w+\s*=\s*".*?")/g, '<span class="attribute">$1</span>')
            .replace(/(".*?")/g, '<span class="string">$1</span>');
    } else if (language === "css") {
        formattedCode = formattedCode
            .replace(/(div|[a-z-]+\s*:)/g, '<span class="property">$1</span>')
            .replace(/(red|#ff0000|100px)/g, '<span class="string">$1</span>')
            .replace(/(div\s*{)/g, '<span class="selector">$1</span>');
    }
    return `<pre class="code-block"><code>${formattedCode}</code></pre>`;
}

// Format Expected Output
function formatExpectedOutput(expected, language) {
    if (language === "html" || language === "css") {
        return highlightCode(challenges[language][currentChallengeIndex].solution, language);
    }
    return highlightCode(JSON.stringify(expected), language);
}

// Verify Code
function verifyCode() {
    const code = editor.getValue();
    const challenge = challenges[currentLanguage][currentChallengeIndex];
    let results = "";
    let passed = true;
    let feedback = "";

    try {
        if (currentLanguage === "javascript") {
            const userFunction = new Function(`return ${code}`)();
            if (typeof userFunction !== "function") {
                feedback = challenge.feedback.wrongFunctionName;
                passed = false;
            } else {
                challenge.testCases.forEach((test, index) => {
                    const result = userFunction(...test.input);
                    const isCorrect = JSON.stringify(result) === JSON.stringify(test.expected);
                    results += `<p>Test ${index + 1}: ${isCorrect ? "Passed" : "Failed"}<br>Input: ${highlightCode(JSON.stringify(test.input), currentLanguage)}<br>Expected Output: ${formatExpectedOutput(test.expected, currentLanguage)}<br>Got: ${highlightCode(JSON.stringify(result), currentLanguage)}</p>`;
                    if (!isCorrect) {
                        passed = false;
                        feedback = challenge.feedback.wrongOutput;
                    }
                });
            }
        } else if (currentLanguage === "python") {
            const userFunction = code;
            challenge.testCases.forEach((test, index) => {
                const isCorrect = code.includes("factorial") && test.expected === evalPythonMock(code, test.input[0]);
                results += `<p>Test ${index + 1}: ${isCorrect ? "Passed" : "Failed"}<br>Input: ${highlightCode(JSON.stringify(test.input), currentLanguage)}<br>Expected Output: ${formatExpectedOutput(test.expected, currentLanguage)}</p>`;
                if (!isCorrect) {
                    passed = false;
                    feedback = challenge.feedback.wrongOutput;
                }
            });
        } else if (currentLanguage === "java") {
            const userFunction = code;
            challenge.testCases.forEach((test, index) => {
                const isCorrect = code.includes("isEven") && test.expected === evalJavaMock(code, test.input[0]);
                results += `<p>Test ${index + 1}: ${isCorrect ? "Passed" : "Failed"}<br>Input: ${highlightCode(JSON.stringify(test.input), currentLanguage)}<br>Expected Output: ${formatExpectedOutput(test.expected, currentLanguage)}</p>`;
                if (!isCorrect) {
                    passed = false;
                    feedback = challenge.feedback.wrongOutput;
                }
            });
        } else if (currentLanguage === "html" || currentLanguage === "css") {
            challenge.testCases.forEach((test, index) => {
                const isCorrect = test.expected.test(code);
                results += `<p>Test ${index + 1}: ${isCorrect ? "Passed" : "Failed"}<br>Expected Output: ${formatExpectedOutput(test.expected, currentLanguage)}</p>`;
                if (!isCorrect) {
                    passed = false;
                    feedback = challenge.feedback.wrongOutput;
                }
            });
        }
    } catch (e) {
        feedback = `${challenge.feedback.syntaxError}: ${e.message}`;
        passed = false;
    }

    lastSubmissionFailed = !passed;
    if (!passed) {
        failedAttempts++;
        results = `<p class="text-red-500">Some tests failed: ${feedback}</p>${results}`;
        if (failedAttempts >= 3) {
            document.getElementById("viewSolution").classList.remove("hidden");
        }
        if (timeLeft <= 0) {
            document.getElementById("getHint").classList.remove("hidden");
        }
    } else {
        results = `<p class="text-green-500">All tests passed! Well done!</p>${results}`;
        failedAttempts = 0;
        document.getElementById("viewSolution").classList.add("hidden");
        document.getElementById("getHint").classList.add("hidden");
    }

    document.getElementById("testResults").innerHTML = results;
    clearInterval(timer);
}

// Mock Python and Java evaluation
function evalPythonMock(code, input) {
    if (code.includes("factorial")) {
        let n = input;
        let result = 1;
        for (let i = 1; i <= n; i++) result *= i;
        return result;
    }
    return null;
}

function evalJavaMock(code, input) {
    if (code.includes("isEven")) {
        return input % 2 === 0;
    }
    return null;
}

// Get Hint
function getHint() {
    const challenge = challenges[currentLanguage][currentChallengeIndex];
    const code = editor.getValue();
    let hint = challenge.hints.timeUp;

    try {
        if (currentLanguage === "javascript") {
            const userFunction = new Function(`return ${code}`)();
            if (typeof userFunction !== "function") {
                hint = challenge.hints.wrongFunctionName;
            } else {
                let anyFailed = false;
                challenge.testCases.forEach((test) => {
                    const result = userFunction(...test.input);
                    if (JSON.stringify(result) !== JSON.stringify(test.expected)) {
                        anyFailed = true;
                    }
                });
                if (anyFailed) {
                    hint = challenge.hints.wrongOutput;
                }
            }
        } else if (currentLanguage === "python" && !code.includes("factorial")) {
            hint = challenge.hints.wrongFunctionName;
        } else if (currentLanguage === "java" && !code.includes("isEven")) {
            hint = challenge.hints.wrongFunctionName;
        } else if (currentLanguage === "html" || currentLanguage === "css") {
            if (!challenge.testCases[0].expected.test(code)) {
                hint = challenge.hints.wrongOutput;
            }
        }
    } catch (e) {
        hint = challenge.hints.syntaxError;
    }

    document.getElementById("testResults").innerHTML = `<p class="text-purple-500">Hint: ${hint}</p>`;
    document.getElementById("getHint").classList.add("hidden");
}

// View Solution
function showSolution() {
    const challenge = challenges[currentLanguage][currentChallengeIndex];
    editor.setValue(challenge.solution);
    document.getElementById("testResults").innerHTML = `<p class='text-yellow-500'>Solution displayed:</p>${highlightCode(challenge.solution, currentLanguage)}<p class='text-yellow-500'>Try to understand it and move to the next challenge.</p>`;
    document.getElementById("viewSolution").classList.add("hidden");
    document.getElementById("getHint").classList.add("hidden");
    clearInterval(timer);
}

// Event Listeners
document.getElementById("languageSelect").addEventListener("change", (e) => {
    currentLanguage = e.target.value;
    currentChallengeIndex = 0;
    loadChallenge(currentChallengeIndex, currentLanguage);
});

document.getElementById("submitCode").addEventListener("click", verifyCode);
document.getElementById("nextChallenge").addEventListener("click", () => {
    currentChallengeIndex = (currentChallengeIndex + 1) % challenges[currentLanguage].length;
    loadChallenge(currentChallengeIndex, currentLanguage);
});
document.getElementById("backChallenge").addEventListener("click", () => {
    if (currentChallengeIndex > 0) {
        currentChallengeIndex--;
        loadChallenge(currentChallengeIndex, currentLanguage);
    }
});
document.getElementById("getHint").addEventListener("click", getHint);

// Load first challenge
editor.session.setMode("ace/mode/javascript");
loadChallenge(currentChallengeIndex, currentLanguage);