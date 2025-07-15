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
                    "Think about what it means to add two numbers. The function `sum(a, b)` needs to take two parameters, `a` and `b`, which can be any numbers (positive, negative, or zero). Your goal is to return their sum. Start by defining the function with the correct name and parameters.",
                    "To add the numbers, use the `+` operator, which works for both integers and floating-point numbers in JavaScript. For example, if `a` is 1 and `b` is 2, you want to compute `1 + 2`. Consider how you can use the parameters `a` and `b` directly in your function body.",
                    "The function needs to return the result of the addition. Use the `return` statement to send back the value of `a + b`. For instance, `return a + b;` will compute the sum and exit the function with that value. Make sure you don't include extra operations that could alter the result."
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
                    "To reverse a string, you need to rearrange its characters starting from the last one to the first. For example, 'hello' becomes 'olleh'. Consider how you might break the string into individual characters to manipulate them, perhaps using an array.",
                    "In JavaScript, you can use `split('')` to convert a string into an array of characters. For instance, `'hello'.split('')` gives `['h', 'e', 'l', 'l', 'o']`. After splitting, you can use the `reverse()` method to reverse the array. Think about how to apply these methods in sequence.",
                    "After reversing the array, you need to convert it back to a string. The `join('')` method combines array elements into a string with no separator. Chain these operations (`split`, `reverse`, `join`) in your function and return the result to complete the reversal."
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
                    "The Fibonacci sequence starts with 0, 1, and each subsequent number is the sum of the previous two (e.g., 0, 1, 1, 2, 3, 5, 8, ...). Since `n` is 0-based, `fibonacci(5)` should return 5 (the 6th number). Think about how to compute this iteratively or recursively.",
                    "An iterative approach avoids recursion for better performance. Initialize two variables, say `a = 0` and `b = 1`, to represent the first two numbers. Use a loop to generate subsequent numbers by adding `a` and `b`, updating the variables each time. Consider how to track the loop up to `n`.",
                    "In the loop, calculate the next Fibonacci number as `temp = a + b`. Then, shift the variables: set `a` to `b` and `b` to `temp`. Run the loop from `i = 2` to `n` (since `n = 0` returns 0, `n = 1` returns 1). Return `b` as the final result."
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
                    "A palindrome reads the same forwards and backwards, like 'racecar' or 'A man a plan a canal Panama'. First, consider how to handle case sensitivity (e.g., 'A' vs 'a') and non-alphanumeric characters (spaces, punctuation). You need to clean the string before checking.",
                    "To clean the string, convert it to lowercase with `toLowerCase()` to treat 'A' and 'a' the same. Use `replace(/[^a-z0-9]/g, '')` to remove all characters that aren't letters or numbers. For example, 'A man a plan' becomes 'amanaplan'. Now, how can you check if this is a palindrome?",
                    "Compare the cleaned string with its reverse. Use `split('')` to get an array of characters, `reverse()` to reverse it, and `join('')` to make it a string again. Check if the cleaned string equals its reverse using `===`. Return `true` if they match, `false` otherwise."
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
                    "Your goal is to find the largest number in an array, like `[1, 5, 3, 8, 2]` returning 8. Think about how to compare each element in the array to identify the largest one. You could loop through the array or use a built-in method.",
                    "One approach is to use a loop. Start with the first element (`arr[0]`) as the initial maximum. Iterate through the array, and if you find an element larger than your current maximum, update it. Alternatively, JavaScript's `Math.max` can simplify this. How might you apply it to an array?",
                    "Using `Math.max(...arr)` spreads the array into individual arguments, returning the largest. For example, `Math.max(1, 5, 3, 8, 2)` returns 8. If you use a loop, ensure you handle edge cases like a single-element array or negative numbers. Return the maximum value."
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
                    "The factorial of a number `n` is the product of all positive integers up to `n` (e.g., `factorial(5)` is `5 * 4 * 3 * 2 * 1 = 120`). For `n = 0`, the factorial is 1. Consider whether a recursive or iterative approach would be clearer for computing this.",
                    "A recursive solution is elegant for factorials. Define a base case: if `n` is 0, return 1. For other cases, the factorial is `n` multiplied by the factorial of `n-1`. Think about how to express this as `return n * factorial(n - 1)`.",
                    "Ensure your recursion stops at the base case. For example, `factorial(3)` computes `3 * factorial(2)`, which is `3 * (2 * factorial(1))`, and so on, until `factorial(0)` returns 1. Check your indentation and base case to avoid infinite recursion."
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
                    "A prime number is greater than 1 and divisible only by 1 and itself. For example, 7 is prime because it's not divisible by any number from 2 to 6. Start by checking if `n` is less than 2, as those numbers (0, 1, negative) are not prime.",
                    "To test if `n` is prime, check divisibility by numbers from 2 up to the square root of `n`. Why the square root? If `n` has a divisor larger than its square root, it must also have a smaller one we've already checked. Use `int(n ** 0.5) + 1` for the range.",
                    "Set up a loop from 2 to `int(n ** 0.5) + 1`. For each `i`, if `n % i == 0`, return `False` (not prime). If no divisors are found, return `True`. For example, for `n = 7`, check 2 and 3; if neither divides evenly, 7 is prime."
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
                    "Your goal is to add all numbers in a list, like `[1, 2, 3]` returning 6. The list might be empty (return 0) or contain negative numbers. Think about whether you need a loop or if Python has a built-in function to simplify this.",
                    "Python's `sum()` function is perfect here: it takes a list and returns the total of its elements. For example, `sum([1, 2, 3])` returns 6. If you prefer a loop, initialize a variable to 0 and add each element. How would you handle an empty list?",
                    "Using `sum(numbers)` is the most concise solution, automatically returning 0 for an empty list. If looping, use `total = 0`, then `for num in numbers: total += num`, and return `total`. Ensure your function handles all test cases, including `[-1, 1]` and `[]`."
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
                    "Binary search is efficient for finding a `target` in a sorted list by halving the search range each step. For `[1, 2, 3, 4, 5]` and `target = 3`, you want to return index 2. Start by defining two pointers, `left` and `right`, to track the search range.",
                    "Initialize `left = 0` and `right = len(arr) - 1`. Calculate the middle index as `mid = (left + right) // 2`. Check if `arr[mid]` equals the `target`. If not, decide whether to search the left or right half based on whether `arr[mid]` is less than or greater than `target`.",
                    "In a loop, while `left <= right`, compute `mid`. If `arr[mid] == target`, return `mid`. If `arr[mid] < target`, set `left = mid + 1` to search the right half. If `arr[mid] > target`, set `right = mid - 1`. If the loop ends without finding `target`, return -1."
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
                    "An even number is divisible by 2 with no remainder, like 4 or 0. Your method takes an integer `n` and returns a boolean. Think about how to test divisibility in Java.",
                    "The modulo operator `%` returns the remainder of division. For example, `4 % 2` is 0, indicating 4 is even. Use `n % 2` to check if the remainder is 0, which means `n` is even.",
                    "Return the result of `n % 2 == 0` directly. This expression evaluates to `true` for even numbers (e.g., `4 % 2 == 0` is `true`) and `false` for odd numbers (e.g., `7 % 2 == 1` is `false`). Ensure your method signature is correct."
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
                    "You need to count vowels (a, e, i, o, u) in a string, ignoring case (e.g., 'A' counts as a vowel). For 'hello', the vowels are 'e' and 'o', so return 2. Consider how to iterate through the string and identify vowels.",
                    "Convert the string to lowercase using `s.toLowerCase()` to treat 'A' and 'a' the same. Use a for-each loop over `s.toCharArray()` to check each character. How will you test if a character is a vowel?",
                    "For each character, check if it matches 'a', 'e', 'i', 'o', or 'u' using `if (c == 'a' || c == 'e' || ... )`. Increment a counter for each match. Return the counter at the end. Handle empty strings by initializing the counter to 0."
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
                    "Squaring a number means multiplying it by itself, so `squareNumber(4)` returns `4 * 4 = 16`. The input `n` can be positive, negative, or zero. Think about the simplest way to compute this in Java.",
                    "Use the multiplication operator `*`. For example, `n * n` computes the square. Ensure your method returns an `int`, as all test cases expect integer results, even for negative inputs (e.g., `-2 * -2 = 4`).",
                    "Write `return n * n;` directly in the method body. This handles all cases, including `n = 0` (returns 0) and negative numbers. Double-check your method signature for the correct name and return type."
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
                    "You need to find the longest word in a string, like 'hello world' returning 'hello' (5 letters vs 5 for 'world', but 'hello' is first). Split the string into words and compare their lengths. How can you split a string in Java?",
                    "Use `s.split(\" \")` to split the string into an array of words. Initialize a variable to store the longest word (start with an empty string). Loop through each word and check its length using `word.length()`. Update the longest word if the current one is longer.",
                    "In a for-each loop, compare `word.length()` with the current longest word's length. If `word.length()` is greater, set the longest word to the current word. Return the longest word after the loop. Handle edge cases like a single word or equal-length words (return the first)."
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
                    "Your goal is to create an `<h1>` heading with the text 'Welcome' that is centered on the page. In HTML, centering can be achieved with CSS. Think about how to apply CSS directly to the `<h1>` tag.",
                    "Use the `style` attribute in the `<h1>` tag to apply CSS. The `text-align` property controls horizontal alignment. Set `style=\"text-align: center;\"` to center the text. Ensure the text inside the tag is exactly 'Welcome'.",
                    "Write `<h1 style=\"text-align: center;\">Welcome</h1>`. The `style` attribute should contain `text-align: center;` (note the semicolon). Close the tag properly with `</h1>` to avoid syntax errors."
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
                    "A form in HTML collects user input, like a text field and a submit button. The `<form>` tag wraps the input elements. Think about which HTML elements are needed for a text input and a button to submit the form.",
                    "Use `<input>` tags inside `<form>`. For the text field, set `type=\"text\"` to allow user input. For the submit button, use `type=\"submit\"`. Add a `name` attribute to the text input for identification, like `name=\"input\"`.",
                    "Structure your form like this: `<form><input type=\"text\" name=\"input\"><input type=\"submit\" value=\"Submit\"></form>`. The `value` attribute on the submit input sets the button's text. Ensure all tags are properly closed."
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
                    "An image gallery displays multiple images, each with a source and description. Use a `<div>` to group three `<img>` tags. Each image needs a `src` attribute for the file path and an `alt` attribute for accessibility.",
                    "For each `<img>` tag, set the `src` attribute to a file path, like `image1.jpg`. The `alt` attribute describes the image, e.g., `alt=\"Image 1\"`. This helps screen readers and is required for valid HTML.",
                    "Write `<div><img src=\"image1.jpg\" alt=\"Image 1\"><img src=\"image2.jpg\" alt=\"Image 2\"><img src=\"image3.jpg\" alt=\"Image 3\"></div>`. Ensure each `src` and `alt` is unique and all tags are closed properly."
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
                    "A navigation bar provides links to different pages, wrapped in a `<nav>` tag. You need three `<a>` tags, each with an `href` attribute pointing to a page. Think about typical navigation links like 'Home' or 'About'.",
                    "Each `<a>` tag needs an `href` attribute, like `href=\"home.html\"`, and text content, like `Home`. Place these inside `<nav>`. For example, `<a href=\"home.html\">Home</a>` creates a clickable link.",
                    "Write `<nav><a href=\"home.html\">Home</a><a href=\"about.html\">About</a><a href=\"contact.html\">Contact</a></nav>`. Ensure each `href` points to a valid page name and that tags are properly closed."
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
                    "You need to style a `<div>` to have a red background and a size of 100px by 100px. In CSS, you target a `div` with the `div` selector and use properties to set color and dimensions.",
                    "Use `background-color: red;` to set the background. For size, use `width: 100px;` and `height: 100px;`. Each property needs a semicolon. Think about how these properties affect the div's appearance.",
                    "Write `div { background-color: red; width: 100px; height: 100px; }`. Ensure all properties are inside the curly braces and separated by semicolons. This creates a red square div."
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
                    "The goal is to change a div's background to blue when the mouse hovers over it. CSS uses pseudo-classes to handle events like hovering. Think about which pseudo-class detects a mouse hover.",
                    "Use the `:hover` pseudo-class with the `div` selector, like `div:hover`. Inside the block, set `background-color: blue;` to change the background when the mouse is over the div.",
                    "Write `div:hover { background-color: blue; }`. The `:hover` pseudo-class triggers only when the mouse pointer is over the div. Ensure the property is correctly formatted with a semicolon."
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
                    "Centering a div both horizontally and vertically within its parent requires CSS layout techniques. Flexbox is a great choice because it simplifies centering. Consider how to set up the parent div to use flexbox.",
                    "Set `display: flex;` on the div to enable flexbox. Use `justify-content: center;` for horizontal centering and `align-items: center;` for vertical centering. These properties work together to position the div's content.",
                    "Write `div { display: flex; justify-content: center; align-items: center; }`. This assumes the div is the parent containing content to center. If centering the div itself, ensure its parent has `display: flex` and the same properties."
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
                    "You want a button to grow to 1.2 times its size when hovered. CSS transformations can change an element's size. Think about which transform function scales an element uniformly.",
                    "Use the `transform` property with the `scale()` function. `scale(1.2)` increases the button's size by 20%. Apply this in a `button:hover` block to trigger the effect only on hover.",
                    "Write `button:hover { transform: scale(1.2); }`. The `scale(1.2)` function scales both width and height. Ensure the syntax is correct, with parentheses and a semicolon."
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
    let hintsRequested = false; // Track if hints have been requested for the current challenge

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
        document.getElementById("hintButton").classList.remove("hidden"); // Show hint button on load
        document.getElementById("prevHint").classList.add("hidden"); // Hide previous hint button
        document.getElementById("nextHint").classList.add("hidden"); // Hide next hint button
        document.getElementById("hintButton").textContent = "Get Hint"; // Reset hint button text
        document.getElementById("hintStep").textContent = "1"; // Reset hint step display
        document.getElementById("hintText").textContent = ""; // Clear hint text
        document.getElementById("backChallenge").disabled = index === 0;
        document.getElementById("backChallenge").classList.toggle("dimmed", index === 0);
        document.getElementById("nextChallenge").disabled = index === filteredChallenges.length - 1;
        document.getElementById("nextChallenge").classList.toggle("dimmed", index === filteredChallenges.length - 1);
        editor.setValue(challenge.boilerplate || "// Write your code here");
        editor.getModel().setLanguage(language);
        failedAttempts = 0;
        lastSubmissionFailed = false;
        hintStep = 0;
        hintsRequested = false; // Reset hints requested flag
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
                    document.getElementById("hintButton").classList.remove("hidden");
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
            document.getElementById("hintButton").classList.remove("hidden");
            if (failedAttempts >= 3) {
                document.getElementById("viewSolution").classList.remove("hidden");
            }
        } else {
            if (!completedChallenges[currentLanguage]?.includes(currentChallengeIndex)) {
                totalScore += challenge.points;
                if (!completedChallenges[currentLanguage]) completedChallenges[currentLanguage] = [];
                completedChallenges[currentLanguage].push(currentChallengeIndex);
            }
            results = `<p class="text-green-500">All tests passed! Well done! (+${challenge.points} points)</p>${results}`;
            failedAttempts = 0;
            document.getElementById("viewSolution").classList.add("hidden");
            document.getElementById("hintButton").classList.add("hidden");
            document.getElementById("hintSection").classList.add("hidden");
            document.getElementById("prevHint").classList.add("hidden");
            document.getElementById("nextHint").classList.add("hidden");
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

    // Show Hint
    function showHint(step) {
        const challenge = challenges[currentLanguage][currentChallengeIndex];
        const code = editor.getValue();
        let hint = challenge.hints[step];

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
                        hint = challenge.hints[step];
                    }
                }
            } else if (currentLanguage === "python" && !code.includes(challenge.title.toLowerCase().replace(" ", "_"))) {
                hint = challenge.hints[0];
            } else if (currentLanguage === "java" && !code.includes(challenge.title.toLowerCase().replace(" ", ""))) {
                hint = challenge.hints[0];
            } else if (currentLanguage === "html" || currentLanguage === "css") {
                if (!challenge.testCases[0].expected.test(code)) {
                    hint = challenge.hints[step];
                }
            }
        } catch (e) {
            hint = challenge.hints[0];
        }

        document.getElementById("hintSection").classList.remove("hidden");
        document.getElementById("hintText").textContent = hint;
        document.getElementById("hintStep").textContent = step + 1;
        document.getElementById("prevHint").classList.remove("hidden");
        document.getElementById("nextHint").classList.remove("hidden");
        // Update navigation button states
        document.getElementById("prevHint").disabled = step === 0;
        document.getElementById("prevHint").classList.toggle("dimmed", step === 0);
        document.getElementById("nextHint").disabled = step === 2;
        document.getElementById("nextHint").classList.toggle("dimmed", step === 2);
    }

    // Get Hint (Toggle Hint Section)
    function getHint() {
        const challenge = challenges[currentLanguage][currentChallengeIndex];
        const hintSection = document.getElementById("hintSection");
        if (hintSection.classList.contains("hidden")) {
            // Show hint section
            if (!hintsRequested) {
                const pointDeduction = hintStep < 3 ? [5, 10, 15][hintStep] : 0;
                if (pointDeduction > 0) {
                    totalScore = Math.max(0, totalScore - pointDeduction);
                    document.getElementById("totalScore").textContent = totalScore;
                }
                hintsRequested = true; // Mark hints as requested for this challenge
            }
            showHint(hintStep); // Show current hint step
            document.getElementById("hintButton").textContent = "Hide Hint";
        } else {
            // Hide hint section
            hintSection.classList.add("hidden");
            document.getElementById("prevHint").classList.add("hidden");
            document.getElementById("nextHint").classList.add("hidden");
            document.getElementById("hintButton").textContent = "Get Hint";
            // Reset navigation button states
            document.getElementById("prevHint").disabled = false;
            document.getElementById("prevHint").classList.remove("dimmed");
            document.getElementById("nextHint").disabled = false;
            document.getElementById("nextHint").classList.remove("dimmed");
        }
    }

    // Previous Hint
    function prevHint() {
        if (hintStep > 0) {
            hintStep--; // Move to previous hint: 2 -> 1, 1 -> 0
            showHint(hintStep);
            document.getElementById("hintButton").textContent = "Hide Hint"; // Keep as "Hide Hint" since section is visible
        }
    }

    // Next Hint
    function nextHint() {
        if (hintStep < 2) {
            hintStep++; // Move to next hint: 0 -> 1, 1 -> 2
            showHint(hintStep);
            document.getElementById("hintButton").textContent = "Hide Hint"; // Keep as "Hide Hint" since section is visible
        }
    }

    // View Solution
    function showSolution() {
        const challenge = challenges[currentLanguage][currentChallengeIndex];
        editor.setValue(challenge.solution);
        document.getElementById("testResults").innerHTML = `<p class='text-yellow-500'>Solution displayed:</p>${highlightCode(challenge.solution, currentLanguage)}<p class='text-yellow-500'>Try to understand it and move to the next challenge.</p>`;
        document.getElementById("viewSolution").classList.add("hidden");
        document.getElementById("hintButton").classList.add("hidden");
        document.getElementById("hintSection").classList.add("hidden");
        document.getElementById("prevHint").classList.add("hidden");
        document.getElementById("nextHint").classList.add("hidden");
        document.getElementById("validationFeedback").classList.add("hidden");
        document.getElementById("hintButton").textContent = "Get Hint";
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
    document.getElementById("hintButton").addEventListener("click", getHint);
    document.getElementById("prevHint").addEventListener("click", prevHint);
    document.getElementById("nextHint").addEventListener("click", nextHint);
    document.getElementById("viewSolution").addEventListener("click", showSolution);

    // Load first challenge
    loadChallenge(currentChallengeIndex, currentLanguage);
});