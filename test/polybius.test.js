const { polybius } = require("../src/polybius");
const { expect } = require("chai");

describe("polybius", () => {
    describe("encoding", () => {
        it("should translate the letters 'i' and 'j' to '42'", () => {
            expect(polybius("ij")).to.equal("4242");
        });

        it("should encode 'polybius' to '5343134521425434", () => {
            expect(polybius('polybius')).to.equal("5343134521425434");
        });

        it("should maintain spaces", () => {
            expect(polybius("polybius cipher")).to.equal("5343134521425434 314253325124")
        });

        it("should ignopr capital letters", () => {
            expect(polybius("PoLyBiUs")).to.eql("5343134521425434");
        });
    });

    describe("decoding", () => {
        it("should decode '5343134521425434' to 'polyb(i/j)us", () => {
            expect(polybius("5343134521425434", false)).to.eql("polyb(i/j)us");
        });
        it("should tanslate 42 to (i/j)", () => {
            expect(polybius("42", false)).to.eql("(i/j)");
        });
        it("should maintain spaces", () => {
            expect(polybius("5343134521425434 314253325124", false)).to.eql("polyb(i/j)us c(i/j)pher");
        });
        it("should return false if the length of all numbers is odd", () => {
            expect(polybius("42424", false)).to.be.false;
        });
    });
});