function validEmail(str: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(str);
}

// Test Cases
console.log(validEmail('abc@example.com'));   // true
console.log(validEmail('xyz@abc.com.in'));    // true
console.log(validEmail('john.doe@com.'));      // false
console.log(validEmail('@example.com'));       // false
console.log(validEmail(''));                   // false