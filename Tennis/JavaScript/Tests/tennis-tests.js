describe("Tennis", function () {

    var tennis;

    beforeEach(function () {
        tennis = newTennisGame();
    });

    it("should print the score 'Love - Love' when the game starts", function () {
        expect(currentScore()).toEqual("Love - Love");
    });

    it("should print the score '15 - Love'", function () {
        tennis.awardPointToPlayer1();
        expect(currentScore()).toEqual("15 - Love");
    });

    it("should print the score '30 - Love'", function () {
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer1();
        expect(currentScore()).toEqual("30 - Love");
    });

    it("should print the score '40 - Love'", function () {
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer1();
        expect(currentScore()).toEqual("40 - Love");
    });

    it("should print the score 'Player 1 wins' after 4 straight points", function () {
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer1();
        expect(currentScore()).toEqual("Player1 wins");
    });

    it("should print the score 'Love - 15'", function () {
        tennis.awardPointToPlayer2();
        expect(currentScore()).toEqual("Love - 15");
    });

    it("should print the score 'Love - 30'", function () {
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer2();
        expect(currentScore()).toEqual("Love - 30");
    });

    it("should print the score 'Love - 40'", function () {
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer2();
        expect(currentScore()).toEqual("Love - 40");
    });

    it("should print the score 'Player 2 wins' after 4 straight points", function () {
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer2();
        expect(currentScore()).toEqual("Player2 wins");
    });

    it("should print the score '15 - 15'", function () {
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer2();
        expect(currentScore()).toEqual("15 - 15");
    });

    it("should print the score '30 - 15'", function () {
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer2();
        expect(currentScore()).toEqual("30 - 15");
    });

    it("should print the score '15 - 30'", function () {
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer2();
        expect(currentScore()).toEqual("15 - 30");
    });

    it("should print the score '30 - 30'", function () {
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer2();
        expect(currentScore()).toEqual("30 - 30");
    });

    it("should print the score '40 - 30'", function () {
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer2();
        expect(currentScore()).toEqual("40 - 30");
    });

    it("should print the score '30 - 40'", function () {
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer2();
        expect(currentScore()).toEqual("30 - 40");
    });

    it("should print the score 'Player1 wins' after a 40-30 scoreline", function () {
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer1();
        expect(currentScore()).toEqual("Player1 wins");
    });

    it("should print the score 'Player2 wins' after a 30-40 scoreline", function () {
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer2();
        expect(currentScore()).toEqual("Player2 wins");
    });

    it("should print the score 'Deuce'", function () {
        simulateDeuce();
        expect(currentScore()).toEqual("Deuce");
    });

    it("should print the score 'Advantage Player1' after deuce", function () {
        simulateDeuce();
        tennis.awardPointToPlayer1();
        expect(currentScore()).toEqual("Advantage Player1");
    });

    it("should print the score 'Advantage Player2' after deuce", function () {
        simulateDeuce();
        tennis.awardPointToPlayer2();
        expect(currentScore()).toEqual("Advantage Player2");
    });

    it("should print the score 'Deuce' after advantage to Player1", function () {
        simulateDeuce();
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer2();
        expect(currentScore()).toEqual("Deuce");
    });

    it("should print the score 'Deuce' after advantage to Player2", function () {
        simulateDeuce();
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer1();
        expect(currentScore()).toEqual("Deuce");
    });

    it("should print the score 'Player1 wins' after advantage to Player1", function () {
        simulateDeuce();
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer1();
        expect(currentScore()).toEqual("Player1 wins");
    });

    it("should print the score 'Player2 wins' after advantage to Player2", function () {
        simulateDeuce();
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer2();
        expect(currentScore()).toEqual("Player2 wins");
    });

    function currentScore() {
        return tennis.getScore();
    }

    function simulateDeuce() {
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer1();
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer2();
        tennis.awardPointToPlayer2();
    }

});