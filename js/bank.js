let loginBtn = document.querySelector("#login")
let middleOneBox = document.querySelector("#middle_one");
let middleTwoBox = document.querySelector("#middle_two");

// deposit button Id 
let depositBtn = document.querySelector("#depositBtn");
// Deposit Input filed id 
let depositMoney = document.querySelector("#depositAmmount");

// deposit id 
let depMoneyEntry = document.querySelector("#deposit_entry_money");

// Balance id 
let mainBalance = document.querySelector("#mainBalance");
// withdraw id 
let withDrawBtn = document.querySelector("#withdrawBtn");
let withDrawInput = document.querySelector("#withdrawInputAmmount"); 
let withDrawSaveMoney = document.querySelector("#withDrawMoney");

// middleone and middleTwo none and block 
loginBtn.addEventListener("click", ()=>{
    middleOneBox.style.display ="none";
    middleTwoBox.style.display = "Block"
});



// money Add in Account
depositBtn.addEventListener("click", ()=>{
    let depMoney = depositMoney.value;
    let depMoneyValue = depMoneyEntry.innerText;
    let balanceValue = mainBalance.innerText;
    // let date = new Date;
    // let catchDate = date.getDate()

    if( depMoney < 100){
        alert("Sorry, Less than 100 rupees - you can not keep.")
    }
    else{
    depositAdd(depMoney, depMoneyValue)
    balanceUpdate(depMoney, balanceValue)
    };

});
// deposit your money on your account 
let depositAdd = (depositMoneyAdd, depositMoneyVal) =>{
    let moneyDep = parseFloat(depositMoneyAdd) + parseFloat(depositMoneyVal) 
    depMoneyEntry.innerText = moneyDep;
    depositMoney.value = "";
}

// your deposit money add in your main balance
let balanceUpdate = (userDep , balanceUpdate ) =>{
    let subMainBalance = parseFloat(userDep) + parseFloat(balanceUpdate);
    mainBalance.innerText = subMainBalance;
}

// money withdraw 
withdrawBtn.addEventListener("click", ()=>{
    let withDrawInMoney = parseFloat(withDrawInput.value);
    let withSMoney = withDrawSaveMoney.innerText;
    let accountBalance = parseFloat(mainBalance.innerText);

    if ( accountBalance === 0 ){
        accountBalance.innerText = "00"
    }
    else{
        if (withDrawInMoney < -0  || withDrawInMoney === 0 || accountBalance < withDrawInMoney ){
            alert("Your Account have no money")
        }
        else{
            withdrawMoneyAcc(withDrawInMoney, withSMoney)
            withDrawAccMoney(accountBalance )
        }
    }

   
   
    
})

let withdrawMoneyAcc = (withInValue, withAccValue) =>{
    let withDrawMoneySum = parseFloat(withInValue) + parseFloat(withAccValue);
    withDrawSaveMoney.innerText = withDrawMoneySum;
    withDrawInput.value = "";
}

let withDrawAccMoney = (accBalance) =>{
    
    let subBalance = parseFloat(accBalance) - parseFloat(withDrawSaveMoney.innerText);
    mainBalance.innerText = subBalance;
}



