require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs' } });
require(['vs/editor/editor.main'], function () {
    // Initialize Monaco Editor
    const editor = monaco.editor.create(document.getElementById('editor'), {
        value: '// Write your code here',
        language: 'javascript',
        theme: 'vs-dark',
        fontSize: 16,
        lineNumbers: 'on',
        wordWrap: 'on',
        automaticLayout: true,
        minimap: { enabled: false },
        suggest: { showSnippets: true, showKeywords: true }
    });

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
                boilerplate: "function sum(a, b) {\n    // Your code here\n}",
                feedback: {
                    wrongOutput: "Check your arithmetic operation. Ensure you're adding the two numbers correctly.",
                    syntaxError: "There's a syntax error in your code. Check for missing parentheses, incorrect operators, or undefined variables.",
                    wrongFunctionName: "Ensure your function is named `sum` and takes two parameters."
                },
                hints: [
                    "Name your function exactly `sum` with parameters `a` and `b`.",
                    "Use the `+` operator to add `a` and `b` inside the function.",
                    "Return the result directly without extra calculations."
                ],
                points: 100,
                difficulty: "Easy",
                category: "Basics"
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
                boilerplate: "function reverseString(str) {\n    // Your code here\n}",
                feedback: {
                    wrongOutput: "Your function is not reversing the string correctly. Try splitting the string into an array, reversing it, and joining it back.",
                    syntaxError: "There's a syntax error in your code. Check for incorrect string methods or syntax issues.",
                    wrongFunctionName: "Ensure your function is named `reverseString` and takes one parameter."
                },
                hints: [
                    "Name your function `reverseString` and ensure it accepts a `str` parameter.",
                    "Split the string into an array using `str.split('')`, then use `reverse()` to reverse the array.",
                    "Join the array back into a string with `join('')` and return it."
                ],
                points: 100,
                difficulty: "Easy",
                category: "Basics"
            },
            {
                title: "Fibonacci Sequence",
                description: "Write a function `fibonacci(n)` that returns the nth number in the Fibonacci sequence (0-based index).",
                testCases: [
                    { input: [5], expected: 5 },
                    { input: [0], expected: 0 },
                    { input: [3], expected: 2 }
                ],
                timeLimit: 90,
                solution: "function fibonacci(n) { if (n <= 1) return n; let a = 0, b = 1; for (let i = 2; i <= n; i++) { let temp = a + b; a = b; b = temp; } return b; }",
                boilerplate: "function fibonacci(n) {\n    // Your code here\n}",
                feedback: {
                    wrongOutput: "Check your loop or recursive logic for generating Fibonacci numbers.",
                    syntaxError: "Ensure proper syntax for loops or recursion.",
                    wrongFunctionName: "Ensure your function is named `fibonacci` and takes one parameter."
                },
                hints: [
                    "Name your function `fibonacci` with a single parameter `n`.",
                    "Use a loop starting with `a = 0`, `b = 1`, and iterate from `i = 2` to `n`.",
                    "In each iteration, compute `temp = a + b`, update `a = b`, `b = temp`, and return `b`."
                ],
                points: 150,
                difficulty: "Medium",
                category: "Algorithms"
            },
            {
                title: "Palindrome Check",
                description: "Write a function `isPalindrome(str)` that returns true if the string is a palindrome (reads the same forwards and backwards), false otherwise.",
                testCases: [
                    { input: ["racecar"], expected: true },
                    { input: ["hello"], expected: false },
                    { input: ["A man a plan a canal Panama"], expected: true }
                ],
                timeLimit: 60,
                solution: "function isPalindrome(str) { str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); return str === str.split('').reverse().join(''); }",
                boilerplate: "function isPalindrome(str) {\n    // Your code here\n}",
                feedback: {
                    wrongOutput: "Check your string comparison. Ensure you're handling case and non-alphanumeric characters correctly.",
                    syntaxError: "There's a syntax error in your code. Check for incorrect string methods or syntax issues.",
                    wrongFunctionName: "Ensure your function is named `isPalindrome` and takes one parameter."
                },
                hints: [
                    "Name your function `isPalindrome` and ensure it accepts a `str` parameter.",
                    "Convert the string to lowercase and remove non-alphanumeric characters using `toLowerCase()` and a regex like `/[^a-z0-9]/g`.",
                    "Compare the cleaned string with its reverse using `split('').reverse().join('')`."
                ],
                points: 100,
                difficulty: "Easy",
                category: "Basics"
            },
            {
                title: "Array Max",
                description: "Write a function `findMax(arr)` that returns the maximum value in an array of numbers.",
                testCases: [
                    { input: [[1, 5, 3, 8, 2]], expected: 8 },
                    { input: [[-1, -5, -2]], expected: -1 },
                    { input: [[10]], expected: 10 }
                ],
                timeLimit: 90,
                solution: "function findMax(arr) { return Math.max(...arr); }",
                boilerplate: "function findMax(arr) {\n    // Your code here\n}",
                feedback: {
                    wrongOutput: "Check your logic for finding the maximum value. Ensure you're comparing all array elements.",
                    syntaxError: "There's a syntax error in your code. Check for incorrect loop or array access syntax.",
                    wrongFunctionName: "Ensure your function is named `findMax` and takes one parameter."
                },
                hints: [
                    "Name your function `findMax` and ensure it accepts an `arr` parameter.",
                    "Iterate through the array or use `Math.max(...arr)` to find the largest value.",
                    "If using a loop, initialize a variable with the first element and update it if a larger value is found."
                ],
                points: 150,
                difficulty: "Medium",
                category: "Algorithms"
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
                boilerplate: "def factorial(n):\n    # Your code here\n",
                feedback: {
                    wrongOutput: "Check your recursive or iterative logic. Ensure you're multiplying correctly for the factorial.",
                    syntaxError: "There's a syntax error in your code. Check indentation, colons, or undefined variables.",
                    wrongFunctionName: "Ensure your function is named `factorial` and takes one parameter."
                },
                hints: [
                    "Define the function as `def factorial(n):` with proper indentation.",
                    "Set the base case to return 1 if `n == 0`.",
                    "Use recursion with `n * factorial(n - 1)` for other cases."
                ],
                points: 100,
                difficulty: "Easy",
                category: "Basics"
            },
            {
                title: "Prime Check",
                description: "Write a function `is_prime(n)` that returns True if n is prime, False otherwise.",
                testCases: [
                    { input: [7], expected: true },
                    { input: [4], expected: false },
                    { input: [2], expected: true }
                ],
                timeLimit: 90,
                solution: "def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n ** 0.5) + 1):\n        if n % i == 0:\n            return False\n    return True",
                boilerplate: "def is_prime(n):\n    # Your code here\n",
                feedback: {
                    wrongOutput: "Check your prime number logic. Ensure you're testing divisibility correctly.",
                    syntaxError: "Check loop syntax and conditions.",
                    wrongFunctionName: "Ensure your function is named `is_prime` and takes one parameter."
                },
                hints: [
                    "Define the function as `def is_prime(n):` with proper indentation.",
                    "Return `False` if `n < 2`, as numbers less than 2 are not prime.",
                    "Loop from 2 to `int(n ** 0.5) + 1` and check if `n` is divisible by `i`."
                ],
                points: 150,
                difficulty: "Medium",
                category: "Algorithms"
            },
            {
                title: "List Sum",
                description: "Write a function `list_sum(numbers)` that returns the sum of all numbers in a list.",
                testCases: [
                    { input: [[1, 2, 3]], expected: 6 },
                    { input: [[-1, 1]], expected: 0 },
                    { input: [[]], expected: 0 }
                ],
                timeLimit: 60,
                solution: "def list_sum(numbers):\n    return sum(numbers)",
                boilerplate: "def list_sum(numbers):\n    # Your code here\n",
                feedback: {
                    wrongOutput: "Check your summing logic. Ensure you're adding all numbers in the list.",
                    syntaxError: "There's a syntax error in your code. Check for incorrect loop or sum syntax.",
                    wrongFunctionName: "Ensure your function is named `list_sum` and takes one parameter."
                },
                hints: [
                    "Define the function as `def list_sum(numbers):` with proper indentation.",
                    "Use Python's built-in `sum(numbers)` function or a loop to add all elements.",
                    "Return 0 if the list is empty."
                ],
                points: 100,
                difficulty: "Easy",
                category: "Basics"
            },
            {
                title: "Binary Search",
                description: "Write a function `binary_search(arr, target)` that returns the index of `target` in a sorted list `arr`, or -1 if not found.",
                testCases: [
                    { input: [[1, 2, 3, 4, 5], 3], expected: 2 },
                    { input: [[1, 2, 3], 4], expected: -1 },
                    { input: [[1], 1], expected: 0 }
                ],
                timeLimit: 90,
                solution: "def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1",
                boilerplate: "def binary_search(arr, target):\n    # Your code here\n",
                feedback: {
                    wrongOutput: "Check your binary search logic. Ensure you're updating the search range correctly.",
                    syntaxError: "There's a syntax error in your code. Check loop conditions or indexing.",
                    wrongFunctionName: "Ensure your function is named `binary_search` and takes two parameters."
                },
                hints: [
                    "Define the function as `def binary_search(arr, target):` with two parameters.",
                    "Initialize `left = 0` and `right = len(arr) - 1`, then use a while loop with `left <= right`.",
                    "Calculate `mid = (left + right) // 2` and adjust `left` or `right` based on `arr[mid]` vs `target`."
                ],
                points: 150,
                difficulty: "Medium",
                category: "Algorithms"
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
                boilerplate: "public boolean isEven(int n) {\n    // Your code here\n}",
                feedback: {
                    wrongOutput: "Check your modulo operation. Ensure you're correctly determining if the number is even.",
                    syntaxError: "There's a syntax error in your code. Check for missing semicolons, braces, or incorrect method signatures.",
                    wrongFunctionName: "Ensure your method is named `isEven` and returns a boolean."
                },
                hints: [
                    "Define the method as `public boolean isEven(int n)`.",
                    "Use the modulo operator `%` to check if `n` is divisible by 2.",
                    "Return `n % 2 == 0` to indicate an even number."
                ],
                points: 100,
                difficulty: "Easy",
                category: "Basics"
            },
            {
                title: "Count Vowels",
                description: "Write a method `countVowels(s)` that returns the number of vowels in a string.",
                testCases: [
                    { input: ["hello"], expected: 2 },
                    { input: ["JAVA"], expected: 2 },
                    { input: [""], expected: 0 }
                ],
                timeLimit: 90,
                solution: "public int countVowels(String s) {\n    int count = 0;\n    s = s.toLowerCase();\n    for (char c : s.toCharArray()) if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') count++;\n    return count;\n}",
                boilerplate: "public int countVowels(String s) {\n    // Your code here\n}",
                feedback: {
                    wrongOutput: "Check your logic for counting vowels.",
                    syntaxError: "Check string iteration and condition syntax.",
                    wrongFunctionName: "Ensure your method is named `countVowels` and returns an int."
                },
                hints: [
                    "Define the method as `public int countVowels(String s)`.",
                    "Convert `s` to lowercase using `toLowerCase()` and iterate over each character.",
                    "Check if each character is a vowel (`a`, `e`, `i`, `o`, `u`) and increment a counter."
                ],
                points: 150,
                difficulty: "Medium",
                category: "Algorithms"
            },
            {
                title: "Square Number",
                description: "Write a method `squareNumber(n)` that returns the square of a number n.",
                testCases: [
                    { input: [4], expected: 16 },
                    { input: [0], expected: 0 },
                    { input: [-2], expected: 4 }
                ],
                timeLimit: 60,
                solution: "public int squareNumber(int n) {\n    return n * n;\n}",
                boilerplate: "public int squareNumber(int n) {\n    // Your code here\n}",
                feedback: {
                    wrongOutput: "Check your multiplication logic. Ensure you're squaring the number correctly.",
                    syntaxError: "There's a syntax error in your code. Check for missing semicolons or incorrect operators.",
                    wrongFunctionName: "Ensure your method is named `squareNumber` and returns an int."
                },
                hints: [
                    "Define the method as `public int squareNumber(int n)`.",
                    "Multiply `n` by itself using the `*` operator.",
                    "Return the result directly without extra calculations."
                ],
                points: 100,
                difficulty: "Easy",
                category: "Basics"
            },
            {
                title: "Longest Word",
                description: "Write a method `longestWord(s)` that returns the longest word in a string (return the first if multiple have the same length).",
                testCases: [
                    { input: ["hello world"], expected: "hello" },
                    { input: ["cat dog"], expected: "cat" },
                    { input: ["a"], expected: "a" }
                ],
                timeLimit: 90,
                solution: "public String longestWord(String s) {\n    String[] words = s.split(\" \");\n    String longest = \"\";\n    for (String word : words) {\n        if (word.length() > longest.length()) longest = word;\n    }\n    return longest;\n}",
                boilerplate: "public String longestWord(String s) {\n    // Your code here\n}",
                feedback: {
                    wrongOutput: "Check your logic for finding the longest word. Ensure you're comparing word lengths correctly.",
                    syntaxError: "There's a syntax error in your code. Check for incorrect string splitting or loop syntax.",
                    wrongFunctionName: "Ensure your method is named `longestWord` and returns a String."
                },
                hints: [
                    "Define the method as `public String longestWord(String s)`.",
                    "Split the string into words using `s.split(\" \")`.",
                    "Loop through the words and track the one with the maximum length using `word.length()`."
                ],
                points: 150,
                difficulty: "Medium",
                category: "Algorithms"
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
                boilerplate: "<h1>\n    <!-- Your code here -->\n</h1>",
                feedback: {
                    wrongOutput: "Ensure your h1 tag includes a style attribute with text-align: center and the text 'Welcome'.",
                    syntaxError: "There's a syntax error in your HTML. Check for proper tag closing or attribute syntax.",
                    wrongFunctionName: "Ensure you're using an h1 tag with the specified style."
                },
                hints: [
                    "Use an `<h1>` tag and set its content to 'Welcome'.",
                    "Add a `style` attribute to the `<h1>` tag with `text-align: center;`.",
                    "Ensure the tag is properly closed with `</h1>`."
                ],
                points: 100,
                difficulty: "Easy",
                category: "Web Development"
            },
            {
                title: "Create a Form",
                description: "Write HTML code to create a form with one text input and a submit button.",
                testCases: [
                    { input: [], expected: /<form[^>]*>[\s\S]*<input[^>]*type\s*=\s*['"]text['"][^>]*>[\s\S]*<input[^>]*type\s*=\s*['"]submit['"][^>]*>[\s\S]*<\/form>/i }
                ],
                timeLimit: 90,
                solution: "<form>\n    <input type=\"text\" name=\"input\">\n    <input type=\"submit\" value=\"Submit\">\n</form>",
                boilerplate: "<form>\n    <!-- Your code here -->\n</form>",
                feedback: {
                    wrongOutput: "Ensure your form contains a text input and a submit button.",
                    syntaxError: "Check for proper form and input tag syntax.",
                    wrongFunctionName: "Ensure you're using a form tag with the correct inputs."
                },
                hints: [
                    "Start with a `<form>` tag and close it with `</form>`.",
                    "Add an `<input>` tag with `type=\"text\"` for the text field.",
                    "Add an `<input>` tag with `type=\"submit\"` for the submit button."
                ],
                points: 150,
                difficulty: "Medium",
                category: "Web Development"
            },
            {
                title: "Image Gallery",
                description: "Write HTML code to create a gallery with three images, each with an alt attribute.",
                testCases: [
                    { input: [], expected: /<div[^>]*>[\s\S]*<img[^>]*src\s*=\s*['"][^'"]*['"][^>]*alt\s*=\s*['"][^'"]*['"][^>]*>[\s\S]*<img[^>]*src\s*=\s*['"][^'"]*['"][^>]*alt\s*=\s*['"][^'"]*['"][^>]*>[\s\S]*<img[^>]*src\s*=\s*['"][^'"]*['"][^>]*alt\s*=\s*['"][^'"]*['"][^>]*>[\s\S]*<\/div>/i }
                ],
                timeLimit: 60,
                solution: "<div>\n    <img src=\"image1.jpg\" alt=\"Image 1\">\n    <img src=\"image2.jpg\" alt=\"Image 2\">\n    <img src=\"image3.jpg\" alt=\"Image 3\">\n</div>",
                boilerplate: "<div>\n    <!-- Your code here -->\n</div>",
                feedback: {
                    wrongOutput: "Ensure your div contains three img tags, each with src and alt attributes.",
                    syntaxError: "There's a syntax error in your HTML. Check for proper tag closing or attribute syntax.",
                    wrongFunctionName: "Ensure you're using a div with three img tags."
                },
                hints: [
                    "Use a `<div>` tag to wrap your gallery.",
                    "Add three `<img>` tags, each with a `src` attribute (e.g., 'image1.jpg').",
                    "Include an `alt` attribute for each image (e.g., 'Image 1')."
                ],
                points: 100,
                difficulty: "Easy",
                category: "Web Development"
            },
            {
                title: "Navigation Bar",
                description: "Write HTML code to create a navigation bar with three links inside a nav tag.",
                testCases: [
                    { input: [], expected: /<nav[^>]*>[\s\S]*<a[^>]*href\s*=\s*['"][^'"]*['"][^>]*>[\s\S]*<\/a>[\s\S]*<a[^>]*href\s*=\s*['"][^'"]*['"][^>]*>[\s\S]*<\/a>[\s\S]*<a[^>]*href\s*=\s*['"][^'"]*['"][^>]*>[\s\S]*<\/a>[\s\S]*<\/nav>/i }
                ],
                timeLimit: 90,
                solution: "<nav>\n    <a href=\"home.html\">Home</a>\n    <a href=\"about.html\">About</a>\n    <a href=\"contact.html\">Contact</a>\n</nav>",
                boilerplate: "<nav>\n    <!-- Your code here -->\n</nav>",
                feedback: {
                    wrongOutput: "Ensure your nav tag contains three a tags with href attributes.",
                    syntaxError: "There's a syntax error in your HTML. Check for proper tag closing or href syntax.",
                    wrongFunctionName: "Ensure you're using a nav tag with three links."
                },
                hints: [
                    "Use a `<nav>` tag to wrap your navigation bar.",
                    "Add three `<a>` tags, each with an `href` attribute (e.g., 'home.html').",
                    "Include text inside each `<a>` tag (e.g., 'Home') and close with `</a>`."
                ],
                points: 150,
                difficulty: "Medium",
                category: "Web Development"
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
                boilerplate: "div {\n    /* Your code here */\n}",
                feedback: {
                    wrongOutput: "Ensure your CSS sets the background-color to red and both width and height to 100px.",
                    syntaxError: "There's a syntax error in your CSS. Check for missing semicolons or incorrect property names.",
                    wrongFunctionName: "Ensure you're styling a div with the correct properties."
                },
                hints: [
                    "Use the `div` selector followed by curly braces `{}`.",
                    "Set `background-color: red;` inside the braces.",
                    "Add `width: 100px;` and `height: 100px;` with proper semicolons."
                ],
                points: 100,
                difficulty: "Easy",
                category: "Web Development"
            },
            {
                title: "Hover Effect",
                description: "Write CSS to change a div's background to blue when hovered.",
                testCases: [
                    { input: [], expected: /div\s*:hover\s*{\s*background(-color)?\s*:\s*(blue|#0000ff)\s*;/i }
                ],
                timeLimit: 90,
                solution: "div:hover {\n    background-color: blue;\n}",
                boilerplate: "div:hover {\n    /* Your code here */\n}",
                feedback: {
                    wrongOutput: "Ensure your CSS changes the background to blue on hover.",
                    syntaxError: "Check for proper hover pseudo-class syntax.",
                    wrongFunctionName: "Ensure you're using the div:hover selector."
                },
                hints: [
                    "Use the `div:hover` selector to target the hover state.",
                    "Set `background-color: blue;` inside the `div:hover` block.",
                    "Ensure the syntax is `div:hover {}` with no spaces in `:hover`."
                ],
                points: 150,
                difficulty: "Medium",
                category: "Web Development"
            },
            {
                title: "Center Div",
                description: "Write CSS to center a div horizontally and vertically within its parent.",
                testCases: [
                    { input: [], expected: /div\s*{\s*display\s*:\s*(flex|grid|block)\s*;[^}]*((margin\s*:\s*auto\s*;[^}]*top\s*:\s*50%\s*;[^}]*transform\s*:\s*translateY\s*\(\s*-50%\s*\)\s*;|justify-content\s*:\s*center\s*;[^}]*align-items\s*:\s*center\s*;|place-items\s*:\s*center\s*;))/i }
                ],
                timeLimit: 60,
                solution: "div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}",
                boilerplate: "div {\n    /* Your code here */\n}",
                feedback: {
                    wrongOutput: "Ensure your CSS centers the div both horizontally and vertically.",
                    syntaxError: "There's a syntax error in your CSS. Check for missing semicolons or incorrect properties.",
                    wrongFunctionName: "Ensure you're styling a div with the correct centering properties."
                },
                hints: [
                    "Use the `div` selector followed by curly braces `{}`.",
                    "Set `display: flex;` to enable flexbox centering.",
                    "Add `justify-content: center;` and `align-items: center;` to center the div."
                ],
                points: 100,
                difficulty: "Easy",
                category: "Web Development"
            },
            {
                title: "Button Hover Animation",
                description: "Write CSS to scale a button to 1.2 times its size on hover.",
                testCases: [
                    { input: [], expected: /button\s*:hover\s*{\s*transform\s*:\s*scale\s*\(\s*1\.2\s*\)\s*;/i }
                ],
                timeLimit: 90,
                solution: "button:hover {\n    transform: scale(1.2);\n}",
                boilerplate: "button:hover {\n    /* Your code here */\n}",
                feedback: {
                    wrongOutput: "Ensure your CSS scales the button to 1.2 times on hover.",
                    syntaxError: "There's a syntax error in your CSS. Check for proper transform syntax.",
                    wrongFunctionName: "Ensure you're using the button:hover selector."
                },
                hints: [
                    "Use the `button:hover` selector to target the hover state.",
                    "Set `transform: scale(1.2);` to increase the button size by 20%.",
                    "Ensure the transform property is inside the `button:hover` block."
                ],
                points: 150,
                difficulty: "Medium",
                category: "Web Development"
            }
        ]
    };

    let currentChallengeIndex = 0;
    let timer;
    let timeLeft;
    let failedAttempts = 0;
    let currentLanguage = "javascript";
    let lastSubmissionFailed = false;
    let hintStep = 0;
    let totalScore = 0;
    let completedChallenges = {};

    // Load Challenge
    function loadChallenge(index, language) {
        const filteredChallenges = filterChallenges(document.getElementById("categorySelect").value);
        if (index >= filteredChallenges.length) {
            index = 0; // Reset to first challenge if index is out of bounds
        }
        currentChallengeIndex = index;
        const challenge = filteredChallenges[index];
        document.getElementById("challengeTitle").textContent = challenge.title;
        document.getElementById("challengeDescription").textContent = challenge.description;
        document.getElementById("challengeDifficulty").textContent = `Difficulty: ${challenge.difficulty}`;
        document.getElementById("testResults").innerHTML = "";
        document.getElementById("validationFeedback").classList.add("hidden");
        document.getElementById("viewSolution").classList.add("hidden");
        document.getElementById("hintSection").classList.add("hidden");
        document.getElementById("getHint").textContent = "Get Hint"; // Reset hint button text
        document.getElementById("getHint").classList.add("hidden");
        document.getElementById("backChallenge").disabled = index === 0;
        document.getElementById("backChallenge").classList.toggle("dimmed", index === 0);
        document.getElementById("nextChallenge").disabled = index === filteredChallenges.length - 1;
        document.getElementById("nextChallenge").classList.toggle("dimmed", index === filteredChallenges.length - 1);
        editor.setValue(challenge.boilerplate || "// Write your code here");
        editor.getModel().setLanguage(language);
        failedAttempts = 0;
        lastSubmissionFailed = false;
        hintStep = 0;
        updateProgressBar();
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
                document.getElementById("validateCode").disabled = true;
                if (lastSubmissionFailed) {
                    document.getElementById("getHint").classList.remove("hidden");
                }
            }
        }, 1000);
        document.getElementById("submitCode").disabled = false;
        document.getElementById("validateCode").disabled = false;
    }

    // Update Progress Bar
    function updateProgressBar() {
        const totalChallenges = filterChallenges(document.getElementById("categorySelect").value).length;
        const completed = completedChallenges[currentLanguage]?.length || 0;
        const percentage = totalChallenges ? (completed / totalChallenges) * 100 : 0;
        document.getElementById("progressBar").style.width = `${percentage}%`;
    }

    // Filter Challenges by Category
    function filterChallenges(category) {
        if (category === "all") {
            return challenges[currentLanguage];
        }
        return challenges[currentLanguage].filter(challenge => challenge.category === category);
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
                .replace(/(div|button|[a-z-]+\s*:)/g, '<span class="property">$1</span>')
                .replace(/(red|#ff0000|blue|#0000ff|100px|1\.2)/g, '<span class="string">$1</span>')
                .replace(/(div\s*{|div:hover\s*{|button:hover\s*{)/g, '<span class="selector">$1</span>');
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

    // Validate Code (Real-time Feedback)
    function validateCode() {
        const code = editor.getValue();
        const challenge = challenges[currentLanguage][currentChallengeIndex];
        let feedback = "";
        monaco.editor.setModelMarkers(editor.getModel(), "owner", []);

        try {
            if (currentLanguage === "javascript") {
                const userFunction = new Function(`return ${code}`)();
                if (typeof userFunction !== "function") {
                    feedback = challenge.feedback.wrongFunctionName;
                    monaco.editor.setModelMarkers(editor.getModel(), "owner", [{
                        startLineNumber: 1,
                        startColumn: 1,
                        endLineNumber: 1,
                        endColumn: code.length + 1,
                        message: feedback,
                        severity: monaco.MarkerSeverity.Error
                    }]);
                }
            } else if (currentLanguage === "python" && !code.includes(challenge.title.toLowerCase().replace(" ", "_"))) {
                feedback = challenge.feedback.wrongFunctionName;
                monaco.editor.setModelMarkers(editor.getModel(), "owner", [{
                    startLineNumber: 1,
                    startColumn: 1,
                    endLineNumber: 1,
                    endColumn: code.length + 1,
                    message: feedback,
                    severity: monaco.MarkerSeverity.Error
                }]);
            } else if (currentLanguage === "java" && !code.includes(challenge.title.toLowerCase().replace(" ", ""))) {
                feedback = challenge.feedback.wrongFunctionName;
                monaco.editor.setModelMarkers(editor.getModel(), "owner", [{
                    startLineNumber: 1,
                    startColumn: 1,
                    endLineNumber: 1,
                    endColumn: code.length + 1,
                    message: feedback,
                    severity: monaco.MarkerSeverity.Error
                }]);
            } else if (currentLanguage === "html" || currentLanguage === "css") {
                if (!challenge.testCases[0].expected.test(code)) {
                    feedback = "Your code doesn't match the expected structure. Check the challenge requirements.";
                    monaco.editor.setModelMarkers(editor.getModel(), "owner", [{
                        startLineNumber: 1,
                        startColumn: 1,
                        endLineNumber: 1,
                        endColumn: code.length + 1,
                        message: feedback,
                        severity: monaco.MarkerSeverity.Warning
                    }]);
                }
            }
        } catch (e) {
            feedback = `${challenge.feedback.syntaxError}: ${e.message}`;
            monaco.editor.setModelMarkers(editor.getModel(), "owner", [{
                startLineNumber: 1,
                startColumn: 1,
                endLineNumber: 1,
                endColumn: code.length + 1,
                message: feedback,
                severity: monaco.MarkerSeverity.Error
            }]);
        }

        const feedbackElement = document.getElementById("validationFeedback");
        if (feedback) {
            feedbackElement.textContent = feedback;
            feedbackElement.classList.remove("hidden");
        } else {
            feedbackElement.textContent = "Code looks good so far!";
            feedbackElement.classList.remove("hidden");
            feedbackElement.classList.remove("text-red-500");
            feedbackElement.classList.add("text-green-500");
        }
    }

    // Verify Code
    function verifyCode() {
        const code = editor.getValue();
        const challenge = challenges[currentLanguage][currentChallengeIndex];
        let results = "";
        let passed = true;
        let feedback = "";
        monaco.editor.setModelMarkers(editor.getModel(), "owner", []);

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
                challenge.testCases.forEach((test, index) => {
                    const isCorrect = code.includes(challenge.title.toLowerCase().replace(" ", "_")) && test.expected === evalPythonMock(code, test.input);
                    results += `<p>Test ${index + 1}: ${isCorrect ? "Passed" : "Failed"}<br>Input: ${highlightCode(JSON.stringify(test.input), currentLanguage)}<br>Expected Output: ${formatExpectedOutput(test.expected, currentLanguage)}</p>`;
                    if (!isCorrect) {
                        passed = false;
                        feedback = challenge.feedback.wrongOutput;
                    }
                });
            } else if (currentLanguage === "java") {
                challenge.testCases.forEach((test, index) => {
                    const isCorrect = code.includes(challenge.title.toLowerCase().replace(" ", "")) && test.expected === evalJavaMock(code, test.input);
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
            totalScore = Math.max(0, totalScore - 10);
            results = `<p class="text-red-500">Some tests failed: ${feedback}</p>${results}`;
            if (failedAttempts >= 3) {
                document.getElementById("viewSolution").classList.remove("hidden");
            }
            document.getElementById("getHint").classList.remove("hidden");
        } else {
            if (!completedChallenges[currentLanguage]?.includes(currentChallengeIndex)) {
                totalScore += challenge.points;
                if (!completedChallenges[currentLanguage]) completedChallenges[currentLanguage] = [];
                completedChallenges[currentLanguage].push(currentChallengeIndex);
            }
            results = `<p class="text-green-500">All tests passed! Well done! (+${challenge.points} points)</p>${results}`;
            failedAttempts = 0;
            document.getElementById("viewSolution").classList.add("hidden");
            document.getElementById("getHint").classList.add("hidden");
        }

        document.getElementById("testResults").innerHTML = results;
        document.getElementById("totalScore").textContent = totalScore;
        updateProgressBar();
        clearInterval(timer);
    }

    // Mock Python and Java evaluation
    function evalPythonMock(code, input) {
        if (code.includes("factorial")) {
            function factorial(n) {
                if (n === 0) return 1;
                return n * factorial(n - 1);
            }
            return factorial(input[0]);
        } else if (code.includes("is_prime")) {
            if (input[0] < 2) return false;
            for (let i = 2; i <= Math.sqrt(input[0]); i++) {
                if (input[0] % i === 0) return false;
            }
            return true;
        } else if (code.includes("list_sum")) {
            return input[0].reduce((sum, num) => sum + num, 0);
        } else if (code.includes("binary_search")) {
            let arr = input[0], target = input[1];
            let left = 0, right = arr.length - 1;
            while (left <= right) {
                let mid = Math.floor((left + right) / 2);
                if (arr[mid] === target) return mid;
                else if (arr[mid] < target) left = mid + 1;
                else right = mid - 1;
            }
            return -1;
        }
        return null;
    }

    function evalJavaMock(code, input) {
        if (code.includes("isEven")) {
            return input[0] % 2 === 0;
        } else if (code.includes("countVowels")) {
            let count = 0;
            for (let c of input[0].toLowerCase()) {
                if ("aeiou".includes(c)) count++;
            }
            return count;
        } else if (code.includes("squareNumber")) {
            return input[0] * input[0];
        } else if (code.includes("longestWord")) {
            let words = input[0].split(" ");
            let longest = "";
            for (let word of words) {
                if (word.length > longest.length) longest = word;
            }
            return longest;
        }
        return null;
    }

    // Get Hint
    function getHint() {
        const challenge = challenges[currentLanguage][currentChallengeIndex];
        const code = editor.getValue();
        let hint = challenge.hints[hintStep];
        const pointDeduction = [10, 20, 30][hintStep];

        try {
            if (currentLanguage === "javascript") {
                const userFunction = new Function(`return ${code}`)();
                if (typeof userFunction !== "function") {
                    hint = challenge.hints[0];
                } else {
                    let anyFailed = false;
                    challenge.testCases.forEach((test) => {
                        const result = userFunction(...test.input);
                        if (JSON.stringify(result) !== JSON.stringify(test.expected)) {
                            anyFailed = true;
                        }
                    });
                    if (anyFailed) {
                        hint = challenge.hints[hintStep];
                    }
                }
            } else if (currentLanguage === "python" && !code.includes(challenge.title.toLowerCase().replace(" ", "_"))) {
                hint = challenge.hints[0];
            } else if (currentLanguage === "java" && !code.includes(challenge.title.toLowerCase().replace(" ", ""))) {
                hint = challenge.hints[0];
            } else if (currentLanguage === "html" || currentLanguage === "css") {
                if (!challenge.testCases[0].expected.test(code)) {
                    hint = challenge.hints[hintStep];
                }
            }
        } catch (e) {
            hint = challenge.hints[0];
        }

        document.getElementById("hintSection").classList.remove("hidden");
        document.getElementById("hintText").textContent = hint;
        document.getElementById("hintStep").textContent = hintStep + 1;
        totalScore = Math.max(0, totalScore - pointDeduction);
        document.getElementById("totalScore").textContent = totalScore;
        hintStep = (hintStep + 1) % 3;
        document.getElementById("getHint").textContent = hintStep === 0 ? "Get Hint" : "Next Hint";
        if (hintStep === 0) {
            document.getElementById("getHint").classList.add("hidden");
        }
    }

    // View Solution
    function showSolution() {
        const challenge = challenges[currentLanguage][currentChallengeIndex];
        editor.setValue(challenge.solution);
        document.getElementById("testResults").innerHTML = `<p class='text-yellow-500'>Solution displayed:</p>${highlightCode(challenge.solution, currentLanguage)}<p class='text-yellow-500'>Try to understand it and move to the next challenge.</p>`;
        document.getElementById("viewSolution").classList.add("hidden");
        document.getElementById("getHint").classList.add("hidden");
        document.getElementById("hintSection").classList.add("hidden");
        document.getElementById("validationFeedback").classList.add("hidden");
        document.getElementById("getHint").textContent = "Get Hint";
        clearInterval(timer);
        totalScore = Math.max(0, totalScore - 50);
        document.getElementById("totalScore").textContent = totalScore;
    }

    // Event Listeners
    document.getElementById("languageSelect").addEventListener("change", (e) => {
        currentLanguage = e.target.value;
        currentChallengeIndex = 0;
        loadChallenge(currentChallengeIndex, currentLanguage);
        document.getElementById("categorySelect").value = "all";
        totalScore = completedChallenges[currentLanguage]?.score || 0;
        document.getElementById("totalScore").textContent = totalScore;
        updateProgressBar();
    });

    document.getElementById("categorySelect").addEventListener("change", (e) => {
        const category = e.target.value;
        const filteredChallenges = filterChallenges(category);
        currentChallengeIndex = 0;
        if (filteredChallenges.length > 0) {
            loadChallenge(0, currentLanguage);
        } else {
            document.getElementById("challengeTitle").textContent = "No Challenges Available";
            document.getElementById("challengeDescription").textContent = "No challenges found for this category.";
            document.getElementById("challengeDifficulty").textContent = "";
            document.getElementById("timeRemaining").textContent = "";
            document.getElementById("testResults").innerHTML = "";
            editor.setValue("// Select a different category to continue");
            document.getElementById("nextChallenge").disabled = true;
            document.getElementById("nextChallenge").classList.add("dimmed");
            document.getElementById("backChallenge").disabled = true;
            document.getElementById("backChallenge").classList.add("dimmed");
            clearInterval(timer);
        }
    });

    document.getElementById("submitCode").addEventListener("click", verifyCode);
    document.getElementById("validateCode").addEventListener("click", validateCode);
    document.getElementById("nextChallenge").addEventListener("click", () => {
        const filteredChallenges = filterChallenges(document.getElementById("categorySelect").value);
        currentChallengeIndex = (currentChallengeIndex + 1) % filteredChallenges.length;
        loadChallenge(currentChallengeIndex, currentLanguage);
    });
    document.getElementById("backChallenge").addEventListener("click", () => {
        if (currentChallengeIndex > 0) {
            currentChallengeIndex--;
            loadChallenge(currentChallengeIndex, currentLanguage);
        }
    });
    document.getElementById("getHint").addEventListener("click", getHint);
    document.getElementById("viewSolution").addEventListener("click", showSolution);

    // Load first challenge
    loadChallenge(currentChallengeIndex, currentLanguage);
});