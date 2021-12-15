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
    
    console.log(date.getDate());
});



// money Add in Account
depositBtn.addEventListener("click", ()=>{
    let depMoney = depositMoney.value;
    let date = new Date;
    let catchDate = date.getDate()
    if( depMoney < 100){
        alert("Sorry, Less than 100 rupees - you can not keep.")
    }
    else{
    let depMoneyValue = depMoneyEntry.innerText;
    let moneyDep = parseFloat(depMoney) + parseFloat(depMoneyValue)
    
    depMoneyEntry.innerText = moneyDep;
    depositMoney.value = "";

    let balanceValue = mainBalance.innerText;
    console.log(mainBalance.innerText);
    let subMainBalance = parseFloat(depMoney) + parseFloat(balanceValue);
    mainBalance.innerText = subMainBalance;

    };

});

// money withdraw 
withdrawBtn.addEventListener("click", ()=>{
    let withDrawInMoney = withDrawInput.value;
    let withSMoney = withDrawSaveMoney.innerText;
    let withDrawMoneySum = parseFloat(withDrawInMoney) + parseFloat(withSMoney);
    withDrawSaveMoney.innerText = withDrawMoneySum;
    withDrawInput.value = "";


    let accountBalance = mainBalance.innerText;
    console.log(accountBalance);
    let subBalance = parseFloat(accountBalance) - parseFloat(withDrawSaveMoney.innerText);
    mainBalance.innerText = subBalance;
    
})






