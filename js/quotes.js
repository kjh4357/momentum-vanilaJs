const qoutes = [
    {
        quote: "서두르지 말되 멈추지 말라",
        author: "괴테"
    },
    {
        quote: "생각하고 살지 않으면 사는대로 생각하게 된다.",
        author: "폴 발레리"
    },
    {
        quote: "길을 아는 것과 그 길을 걷는 것은 분명히 다르다",
        author: "모피어스"
    },
    {
        quote: "삶의 의미는 발견하는 것이 아니라 만들어가는 것이다.",
        author: "생택쥐베리"
    },
    {
        quote: "우리는 생각하는 대로 된다.",
        author: "마가렛 대처"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = qoutes[Math.floor(Math.random() * qoutes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;