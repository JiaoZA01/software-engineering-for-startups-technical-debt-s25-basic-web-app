export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("einstein")) {
    return (
      "Albert Einstein (14 March 1879 - 18 April 1955) was a " +
      "German-born theoretical physicist who developed the theory of relativity, " +
      "one of the two pillars of modern physics."
    );
}

if (query.toLowerCase().includes("tesla")) {
    return (
      "Nikola Tesla (10 July 1856 - 7 January 1943) was a " +
      "Serbian-American inventor, electrical engineer, and futurist best known " +
      "for his contributions to the design of the modern alternating current (AC) electricity supply system."
    );
}

if (query.toLowerCase().includes("python")) {
    return (
      "Python is a high-level, interpreted programming language " +
      "that emphasizes code readability and simplicity, widely used for " +
      "web development, data science, automation, and more."
    );
}

if (query.toLowerCase().includes("ziang jiao")) {
    return (
      "Ziang Jiao (2 February 2001 - Now) is a " +
      "mastermind in engineering, coding, and problem-solving. Also, a " +
      "good bro."
    );
}

if (query.toLowerCase().includes("rickroll")) {
    return (
      "Never gonna give you up, never gonna let you down, " +
      "never gonna run around and desert you."
    );
  }

if (query.toLowerCase().includes("name")) {
  return (
    "TEAM777"
  );
}

if (query.toLowerCase().includes("largest")) {
  const matches = query.match(/\d+/g); // Find all numbers in the query
  if (matches) {
    const numbers = matches.map(Number); // Convert all found strings to numbers
    const largest = Math.max(...numbers); // Find the largest number
    return largest.toString(); // Return the largest number as a string
  }
}

if (query.toLowerCase().includes("plus")){
  const parts = query.match(/(\d+)\s+plus\s+(\d+)/i);
  if (parts && parts.length === 3) { // Check if the match was successful and we have the correct parts
    const num1 = parseInt(parts[1], 10); // First number
    const num2 = parseInt(parts[2], 10); // Second number
    return (num1 + num2).toString(); // Perform the addition and return the result as a string
  }
}
if (query.toLowerCase().includes("minus")){
  const parts = query.match(/(\d+)\s+minus\s+(\d+)/i);
  if (parts && parts.length === 3) { // Check if the match was successful and we have the correct parts
    const num1 = parseInt(parts[1], 10); // First number
    const num2 = parseInt(parts[2], 10); // Second number
    return (num1 - num2).toString(); // Perform the addition and return the result as a string
  }
}


  return "";
}
