var config = require('../config');

var imageObjects = [
    {
        name: "rock",
        s3objectKey: "exercise/rps/rock.png"
    },
    {
        name: "paper",
        s3objectKey: "exercise/rps/paper.png"
    },
    {
        name: "scissors",
        s3objectKey: "exercise/rps/scissors.png"
    }
];

var responseTemplate = {
    hand: {
        name: "",
        image_url: ""
    }
};

/**
 * じゃんけんの手の画像URLリストを返却する
 *
 * @param req
 * @param res
 */
function images(req, res) {

    var response = {
        hands: []
    };

    imageObjects.forEach(function (object) {
        var hand = Object.assign({}, responseTemplate.hand);
        hand.name = object.name;
        hand.image_url = createObjectUrl(object.s3objectKey);

        response.hands.push(hand)
    });

    res.json(response);
}

/**
 * じゃんけんの手をランダムに１手返す
 *
 * @param req
 * @param res
 */
function random(req, res) {
    // 乱数から配列内の手を取得する
    var randomIndex = Math.floor(Math.random() * imageObjects.length);
    var randomHand = imageObjects[randomIndex];

    // レスポンスボディ作成
    var response = Object.assign({}, responseTemplate.hand);
    response.name = randomHand.name;
    response.image_url = createObjectUrl(randomHand.s3objectKey);

    res.json(response);
}

/**
 * S3内のオベジェクトを参照するURLを作成する
 *
 * @param objectKey
 * @returns {string}
 */
function createObjectUrl(objectKey) {
    return config.s3.origin + "/" +  config.s3.backet_name + "/" + objectKey;
}

module.exports = {
    images: images,
    random: random
};