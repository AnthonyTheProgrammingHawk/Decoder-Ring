const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe("caesar()", () => {
    let input = "Let's get ready to decode";
    let shift = 3;

    it("is a function", () => {
        expect(caesar).to.be.a("function");
    });

    it("returns false for all invalid shift values", () => {
        const shiftValues = [0, -26, 26, null, undefined];
        const actual = shiftValues.every((shift) => {
            return !caesar(input,shift);
        });
        expect(actual).to.be.true;
    });

    it("returns a result for all valid shift numbers", () => {
        const shiftValues = [-25, -1, 1, 25];
        const actual = shiftValues.every((shift) => {
            return caesar(input, shift);
        });
        expect(actual).to.be.true;
    });

    describe("encoding a message", () => {
        it("returns a string", () => {
            const expected = "string";
            const actual = typeof caesar(input, shift);
            expect(actual).to.equal(expected);
        });

        it("returns correct length", () => {
            const expected = input.length;
            const actual = caesar(input, shift).length;
            expect(actual).to.equal(expected);
        });

        it("encodes 'This is a Caesar Cipher!' shift+4 correctly", () => {
            input = "This is a Caesar Cipher!";
            shift = 4;
            const expected = "xlmw mw e geiwev gmtliv!";
            const actual = caesar(input, shift);
            expect(actual).to.deep.equal(expected);
        });

        it("encodes 'This is a Caesar Cipher!' shift-4 correctly", () => {
            input = "This is a Caesar Cipher!";
            shift = -4;
            const expected = "pdeo eo w ywaown yeldan!";
            const actual = caesar(input, shift);
            expect(actual).to.deep.equal(expected);
        });
    });

    describe("decoding a message", () => {
        it("decodes 'Xlmw mw e Geiwev Gmtliv' shift-4 correctly", () => {
            input = "Xlmw mw e Geiwev Gmtliv!";
            shift = -4;
            const expected = "this is a caesar cipher!";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        });

        it("decodes 'pdeo eo w ywaown yeldan!' shift+4 correctly", () => {
            input = "pdeo eo w ywaown yeldan!";
            shift = 4;
            const expected = "this is a caesar cipher!";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        });
    });
});