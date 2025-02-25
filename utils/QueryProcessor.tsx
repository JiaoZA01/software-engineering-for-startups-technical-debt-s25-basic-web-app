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
    "Your dad"
  );
}

  return "";
}
