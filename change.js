// 문장들 배열에 저장
var sentences = [
    "can speak English and German",
    "can coordinate collection for inland transport and oversee the logistic processes",
    "can acquire(purchase) the required materials and subsequently sell them as needed",
    "can use Excel to analyze which customer has made the greatest contribution to our margins this year",
    "can utilize SAP to generate and issue credit notes to our customers. ",
    "can utilize the Python matplotlib library to create visual representations of data.. ",
    "can establish both B2B and B2C prices for the new product and upload them to the online shop.",
];

// 문장 바꾸기 함수
function changeSentence() {
    var sentenceElement = document.getElementById("change");
    var randomNumber = Math.floor(Math.random() * sentences.length); // 랜덤한 인덱스 선택
    var randomSentence = sentences[randomNumber]; // 랜덤한 문장 선택
    sentenceElement.textContent = randomSentence; // 문장 변경
}

// 일정 간격으로 문장 바꾸기
setInterval(changeSentence, 2000); // 2초마다 문장 바꿈
