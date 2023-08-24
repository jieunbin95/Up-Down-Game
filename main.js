//컴퓨터가 임의의 숫자를 선택한다
//유저가 숫자를 입력한다
//유저<컴퓨터인 경우 up표시를 한다
//유저>컴퓨터인 경우 down표시를 한다
//유저=컴퓨터인 경우 맞췄다는 표시와 함께 게임이 종료된다(버튼 비활성화)
//기회는 총 5번이다
//리셋버튼을 누를경우 초기화 시킨다
//1-100 이상의 숫자를 적을 경우 유저에게 알려주고 기회는 박탈 x
//같은 수를 반복해 적었다면 유저에게 알려주고 기회는 박탈x

let computerNum=0
let playButton=document.getElementById('play-button')
let userInput=document.getElementById('user-input')
let resultArea=document.getElementById('result-area')
let resetButton=document.getElementById('reset-button')
let chances=5
let gameOver=false
let chanceArea=document.getElementById('chance-area')
let history=[]

playButton.addEventListener('click',play)
resetButton.addEventListener('click',reset)
userInput.addEventListener('focus',function(){userInput.value=""})

function pickRandomNum(){
  computerNum=Math.floor(Math.random()*100)+1
  console.log("정답",computerNum)
}

function play(){
  let userValue=userInput.value
  
  if(userValue<1 || userValue>100){
    resultArea.textContent="1~100사이의 숫자를 입력 해 주세요"
    return
  }

  if(history.includes(userValue)){
    resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해주세요."
    return
  }

  chances--
  chanceArea.textContent=`남은기회 ${chances}번`
  console.log('chances',chances)

  if(computerNum>userValue){
    resultArea.textContent="UP"
  } else if(computerNum<userValue){
    resultArea.textContent="DOWN"
  } else{
    resultArea.textContent="맞추셨습니다"
    gameOver=true
  }

  history.push(userValue)
  console.log(history)

  if(chances<1){
    gameOver=true
  }

  if(gameOver===true){
    playButton.disabled=true
  }
}

function reset(){
  userInput.value=""
  pickRandomNum()
  resultArea.textContent="죽기 싫다면 맞춰라"
  playButton.disabled=false
}

pickRandomNum()


