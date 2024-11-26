let expenseinput = document.querySelector("#items")
let categoryinput = document.querySelector("#category")
let amountinput = document.querySelector("#amount")
let addbutton = document.querySelector("button")

let data = document.querySelector("tr td")

// console.log(categoryinput);
// console.log(amountinput);
// console.log(addbutton);

addbutton.addEventListener("click", () => {
    expenseTracker()
})

function expenseTracker() {
    
    let discription = expenseinput.value;
    let category = categoryinput.value;
    let amount = amountinput.value;

    let data = document.querySelector("#expense-data")
    tr = document.createElement("tr")
    data.appendChild(tr)

    if(discription === "" || category === "" || amount === ""){
        alert("please enter this field")
        tr.style.display = "none"
        totalAmount += value ;
    } else if(category === "Select category") {
         alert("please enter Category")
         tr.style.display = "none"
         totalAmount += value ;
    }
    
    tr.innerHTML = `
       <td>${discription}</td>
        <td>${category}</td>
       <td class="amount111">${amount}</td>
    `
    
    let Total = document.querySelector("h3 span")
    let td = document.querySelectorAll(".amount111")
    console.log(td);
    
    
    let totalAmount = 0;
  
    td.forEach((val) => {
        let value = parseFloat(val.innerHTML);
        // console.log(typeof value);
        
        
        totalAmount += value ;
        console.log(totalAmount)    
    })

    Total.innerHTML = totalAmount.toFixed(2);
}
