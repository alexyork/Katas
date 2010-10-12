var newTennisGame = function () {
    var instance = {};

    // private members
    var player1Score = 0;
    var player2Score = 0;

    var getPoints = function (score) {
        switch (score) {
            case 0: return "Love";
            case 1: return "15";
            case 2: return "30";
            case 3: return "40";
        }
    };

    var bothPlayersHaveTheSameScore = function () {
        return player1Score === player2Score;
    };

    var bothPlayersHaveMoreThanTwoPoints = function () {
        return player1Score > 2 && player2Score > 2;
    };

    var onePlayerHasMoreThanThreePoints = function () {
        return player1Score > 3 || player2Score > 3;
    };

    var onePlayerHasLessThanThreePoints = function () {
        return player1Score < 3 || player2Score < 3;
    };

    var leadingPlayer = function () {
        return (player1Score > player2Score) ? "Player1" : "Player2";
    };

    var onePlayerLeadsByOnePoint = function () {
        return player1Score == (player2Score + 1) ||
               player2Score == (player1Score + 1);
    };

    var onePlayerLeadsByMoreThanOnePoint = function () {
        return player1Score == (player2Score + 2) ||
               player2Score == (player1Score + 2);
    };

    // public members
    instance.getScore = function () {
        if (bothPlayersHaveMoreThanTwoPoints()) {
            if (bothPlayersHaveTheSameScore()) {
                return "Deuce";
            }
            if (onePlayerLeadsByOnePoint()) {
                return "Advantage " + leadingPlayer();
            }
            if (onePlayerLeadsByMoreThanOnePoint()) {
                return leadingPlayer() + " wins";
            }
        }

        if (onePlayerHasMoreThanThreePoints() && onePlayerHasLessThanThreePoints()) {
            return leadingPlayer() + " wins";
        }

        return getPoints(player1Score) + " - " + getPoints(player2Score);
    };

    instance.awardPointToPlayer1 = function () {
        player1Score++;
    };

    instance.awardPointToPlayer2 = function () {
        player2Score++;
    };

    return instance;
}