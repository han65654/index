// 문장들 배열에 저장
var sentences = [
    "can speak English and German",
    "can coordinate collections for inland transport and oversee the containers regularly",
    "can acquire(purchase) the required materials and subsequently sell them as needed",
    "can use Excel to analyze which customer has made the greatest contribution to our margins this year",
    "can utilize SAP to issue credit notes to our customers and return the goods",
    "can utilize the Python matplotlib library to create visual representations of data",
    "can establish both B2B and B2C prices for the new product and upload them to the online shop",
];

// 문장 바꾸기 함수
var currentIndex = 0; // 현재 문장 인덱스
function changeSentence() {
    var sentenceElement = document.getElementById("change");
    sentenceElement.textContent = sentences[currentIndex]; // 현재 문장으로 변경

    currentIndex++; // 다음 문장 인덱스로 이동
    if (currentIndex >= sentences.length) {
        currentIndex = 0; // 마지막 문장이면 처음으로 되돌아감
    }
}

// 일정 간격으로 문장 바꾸기
setInterval(changeSentence, 2500); // 2.5초마다 문장 바꿈
