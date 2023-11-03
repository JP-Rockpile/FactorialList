import React, { useState, useEffect } from 'react';

interface FactorialListProps {
    num: number;
}

// 2.A. Calculates the factorial of a number
const factorialFunction = (n: number): number => {
    return n <= 1 ? 1 : n * factorialFunction(n - 1);
};

const FactorialList: React.FC<FactorialListProps> = ({ num }) => {
    const [factorials, setFactorials] = useState<string[]>([]);

    useEffect(() => {
        // Initializing the factorial array with the value of num
        setFactorials([`${num}! = ${factorialFunction(num)}`]);

        // 3. After 5 seconds the number is decremented by 1 and added to the display
        const intervalId = setInterval(() => {
            setFactorials((prevFactorials) => {
                const nextNum = Number(prevFactorials[prevFactorials.length - 1].split('!')[0]) - 1;

                // 5. The function stops after it calculates factorial of O (or 1, doesn't
                // matter as 0! = 11)
                if (nextNum < 0) {
                    clearInterval(intervalId);
                    return prevFactorials;
                }
                // 2.C. The format for each entry is x! = y
                const newFactorialString = `${nextNum}! = ${factorialFunction(nextNum)}`;

                // 4. Check if the list is at a lenght of 4 so that the oldest element is removed. List does not exceed 5
                if (prevFactorials.length > 4) {
                    // If so, remove the first element
                    prevFactorials.shift();
                }

                // Add the new factorial string to the list
                return [...prevFactorials, newFactorialString];
            });
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    // 2.B. Displays the calculated factorial and their string in a list
    return (
        <ul>
            {factorials.map((factorial, index) => (
                <li key={index}>{factorial}</li>
            ))}
        </ul>
    );
};

export default FactorialList;

