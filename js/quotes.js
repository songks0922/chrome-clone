const quotes = [
  {
    quoto: '삶이 있는 한 희망은 있다',
    author: '키케로',
  },
  {
    quoto: '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다',
    author: '사무엘존슨',
  },
  {
    quoto: '피할수 없으면 즐겨라',
    author: '로버트 엘리엇',
  },
  {
    quoto:
      '먼저핀꽃은 먼저진다  남보다 먼저 공을 세우려고 조급히 서둘것이 아니다',
    author: '채근담',
  },
  {
    quoto: '행복한 삶을 살기위해 필요한 것은 거의 없다',
    author: '마르쿠스 아우렐리우스 안토니우스',
  },
  {
    quoto:
      '절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다',
    author: 'L.론허바드',
  },
  {
    quoto: '평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라',
    author: '제임스 딘',
  },
  {
    quoto: '돈이란 바닷물과도 같다. 그것은 마시면 마실수록 목이 말라진다',
    author: '쇼펜하우어',
  },
  {
    quoto: '고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오',
    author: '헬렌 켈러',
  },
  {
    quoto: '작은 기회로 부터 종종 위대한 업적이 시작된다',
    author: '데모스테네스',
  },
];

const quoto = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quoto.innerText = todaysQuote.quoto;
author.innerText = `- ${todaysQuote.author} -`;
