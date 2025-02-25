import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return ziang jiao description', () => {
        const query = "ziang jiao";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Ziang Jiao (2 February 2001 - Now) is a " +
            "mastermind in engineering, coding, and problem-solving. Also, a " +
            "good bro."
          ));
    });


    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Rohan"
          ));
    })
});