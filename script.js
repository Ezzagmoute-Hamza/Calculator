// _____________all variables___________________
let holdOperation=document.querySelector(".putOperation .input1");
let NumberButtons=document.querySelectorAll(".getNum");
let showEqua=document.querySelector(".putOperation .input2");
const allOperators=document.querySelectorAll(".isOper");
let {firstNum,secondNum,total,operT}={firstNum:null,secondNum:null,total:null,operT:null};
let Is_operatorClicked=false;
let equalIsClicked=false;


function Which_Number(){
    NumberButtons.forEach((Num)=>{
      Num.onclick=function(){
         // to hold each button Number and make it as a fields (holdOperation,showEqua) value.
         holdOperation.value+=this.textContent;
         showEqua.value+=this.textContent;
         // Is_operatorClicked:to check if any operator is checked or not.
         // note for begginers :(We have above 'Is_operatorClicked=false' So, !Is_operatorClicked <==> not Is_operatorClicked <==> not false ===true (! === not)).
         // other note: typeof '5' === string but when we use (+) Unary operator before '5',its type will change, for exmple +"5" (type : string) ==> 5 (type : number).
         if(!Is_operatorClicked){ 
            firstNum= +holdOperation.value;
            To_disable_or_Enable_operators(firstNum);
         }else{
            secondNum= +holdOperation.value;
         }
      }
    })

}
Which_Number();

function toCheck_operatorIsClicked_or_No(){
    allOperators.forEach((oper)=>{    
         oper.onclick=function(){   
            console.log(oper.textContent);
            operT=oper.textContent;
            showEqua.value+=`${operT}`;
            Is_operatorClicked=true;
            holdOperation.value=null;   
            equalIsClicked=false;
            to_disable_or_Enable_Number_Buttons(equalIsClicked);     
        }
      })
}
toCheck_operatorIsClicked_or_No();


function calculate(){
   const equalSign=document.querySelector(".equal");
   equalSign.onclick=()=>{
     equalIsClicked=true;
     to_disable_or_Enable_Number_Buttons(equalIsClicked);
         if(operT==="+"){
            total=firstNum+secondNum;
            holdOperation.value=total;
            restartValues();
         }else if(operT==="-"){
            total=firstNum-secondNum;
            holdOperation.value=total;
            restartValues();
         }else if(operT==="*"){
            total=firstNum*secondNum;
            holdOperation.value=total;
            restartValues();
         }else if(operT==="/"){
            total=firstNum/secondNum;
            holdOperation.value=total;
            restartValues();
         }
   }
}
calculate();

// This function Store result of the operation in the firstNum variable 
//and change other variables value to null to use them in the next operation.
function restartValues(){
    firstNum=total;
    secondNum=null;
    total=null;
    operT=null;
    holdOperation.value=eval(showEqua.value);
    showEqua.value=holdOperation.value;
}

//this function keeping operators disabled if any number has not clicked.
function To_disable_or_Enable_operators(isfirstNum_Found){
    if(isfirstNum_Found===null){
       Array.from(allOperators).map(ele=>{
        ele.disabled=true;
    });
    }else{
        Array.from(allOperators).map(ele=>{
            ele.disabled=false;    
        });
    }
}
To_disable_or_Enable_operators(firstNum);

// this function listening to equal button click to keep button numbers disabled directely when you clicked on equal button
// and keep them enabled when you clicked on any operator buttons.
function to_disable_or_Enable_Number_Buttons(IsEqualbutton_Clicked){
   console.log(IsEqualbutton_Clicked)
   if(IsEqualbutton_Clicked===true){
      Array.from(NumberButtons).map(btn=>{
         btn.disabled=true;
      })
   }else{
     Array.from(NumberButtons).map(btn=>{
      btn.disabled=false;
    })
   }
}
to_disable_or_Enable_Number_Buttons(equalIsClicked)