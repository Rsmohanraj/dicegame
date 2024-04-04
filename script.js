const playerNumSpan = document.getElementById("playernum");
const playeronescoreSpan = document.getElementById("player1-score");
const playertwoscoreSpan = document.getElementById("player2-score");
const playeronebutton =document.getElementById("player1-btn");
const playertwobutton =document.getElementById("player2-btn");
const resetbutton =document.getElementById("reset-btn");
const Diceimg =document.getElementById("Diceimg");
const winner =document.querySelector("winner-display");
 const data = {
    currentplayer: 1,
    playeronescore: 0,
    playertwoscore: 0,
 }
 const setcurrentplayer = playernum =>{
    data.currentplayer =playernum;
    playerNumSpan.innerText =data.currentplayer;
    if(data.currentplayer ==1){
        
        playeronebutton.removeAttribute("disabled")
        playertwobutton.setAttribute("disabled","disabled")

    } else{
        
        playeronebutton.setAttribute("disabled","disabled")
        playertwobutton.removeAttribute("disabled")
    }


 }
const startgame = () => {
    setcurrentplayer(Math.ceil(Math.random() *2));
    data.playeronescore = 0;
    data.playertwoscore = 0;
playeronescoreSpan.innerText =data.playeronescore;
playertwoscoreSpan.innerText =data.playertwoscore;
}
const rollthedice = () => {
  const IntervalId=setInterval(()=>{
        const randomnum=Math.ceil(Math.random() * 6);
    Diceimg.src =`./images/${randomnum}.png`;
    },150)
    setTimeout(() =>{
        clearInterval(IntervalId);
        const randomnum=Math.ceil(Math.random() * 6);
    Diceimg.src =`./images/${randomnum}.png`;
    if(data.currentplayer == 1){
        data.playeronescore +=randomnum;
        playeronescoreSpan.innerText =data.playeronescore;
    }else{
        data.playertwoscore +=randomnum;
        playertwoscoreSpan.innerText =data.playertwoscore;
    }
    },1000)
    
}

playeronebutton.addEventListener("click",() => {
    rollthedice()
     playeronebutton.setAttribute("disabled","disabled")
    setTimeout(() =>{
    if(data.playeronescore >= 30){
         var a = document.querySelector(".winner-display").innerText="player 1 to win congratulations!!!"

       
        resetbutton.removeAttribute("disabled")
    }else{
        setcurrentplayer(2)
    }
},1000)
})
playertwobutton.addEventListener("click",() => {
    rollthedice()
    playertwobutton.setAttribute("disabled","disabled")
    setTimeout(() =>{
    if(data.playertwoscore >= 30){
        var a = document.querySelector(".winner-display").innerText="player 2 to win congratulations!!!"
        
    resetbutton.removeAttribute("disabled")
    }else{
        setcurrentplayer(1)
    }
},1000)
})


resetbutton.addEventListener("click", () =>{
    startgame()
    resetbutton.setAttribute("disabled","disabled")
 var a=document.querySelector(".winner-display").textContent=""


    



})



window.onload =() => {
    startgame()
}
