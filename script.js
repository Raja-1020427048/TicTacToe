

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let mgsCon = document.querySelector(".msg");
let newGamebtn = document.querySelector("#new-btn");
let massage = document.querySelector("#ms");



let turnO = true      // playerX   playerO   



const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked");
        if(turnO){
            box.classList.remove("box2")
            box.classList.add("box")
            box.innerText = "O";
            turnO = false;
        }
        else{
            
            box.classList.remove("box")
            box.classList.add("box2")
            box.innerText = "X";
            turnO = true;
        }
        
        box.disabled = true;
        checkWinner();

    });
});

const  disabledboxs = ()=>{
    for(let box of boxes){
        box.disabled = true;

    }
}
const  enabledboxs = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
}


const showWinner = (winner)=>{
    massage.innerText = `Congratulations  Winner is ${winner}`;
    mgsCon.classList.remove("hide");
    disabledboxs();


}

const checkWinner = () =>{
    for(pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //             boxes[pattern[1]].innerText,
        //             boxes[pattern[2]].innerText);

        
        let pos1 = boxes[pattern[0]].innerText ;           
        let pos2 = boxes[pattern[1]].innerText ;           
        let pos3 = boxes[pattern[2]].innerText ;     
        
        if(pos1 != ""  &&  pos2 != "" &&  pos3 != ""){
            if(pos1===pos2  && pos2 ===pos3){
                // console.log("winner", pos1);
                // window.open("msg.html");
                showWinner(pos1);

            }
        }

    }
};

const resetgame = ()=>{
    turnO = true;
    enabledboxs();
    mgsCon.classList.add("hide");



};

newGamebtn.addEventListener("click", resetgame);

resetbtn.addEventListener("click", resetgame);




