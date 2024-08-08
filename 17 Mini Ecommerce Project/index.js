let stockData=[];
const apiUrl="https://crudcrud.com/api/3a4105a438fb45d9bbefac5c73a955e5/stock";

async function addStock(){
    const productName=document.getElementById("productName").value;
    const quantity=parseInt(document.getElementById("quantity").value);
    const price=parseFloat(document.getElementById("price").value);

    const totalValue=quantity*price;
    const stockItem={
        productName,
        quantity,
        price,
        totalValue
    };
    try{
        const response= await fetch(apiUrl,{
            method: 'POST',
            body: JSON.stringify(stockItem),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
        if(response.ok)
        {
            stockData.push(stockItem);
            rendeList();
            updateTotalValue();
            clear();
        }
        else{
            console.error("Failed to add stock: ", response.status,response.statusText);
        }
    }
    catch(error)
    {
        console.error("Error", response.status);
    }
}

async function rendeList(){
    const stockList=document.getElementById("stockList");
    stockList.innerHTML="";

    try{
        const response= await fetch(apiUrl);
        if(response.ok)
        {
            const data= await response.json();
            stockData=data;
            stockData.forEach((item,index) => {
                const listItem=document.createElement("li");
                listItem.textContent= `${item.productName} - Quantity:$ ${item.quantity} - Total value: $ ${item.totalValue} `;

                const removeButton=document.createElement("button");
                removeButton.textContent="remove";
                removeButton.addEventListener("click",()=> removeStock(index));

                listItem.appendChild(removeButton);
                stockList.appendChild(listItem);
            });
        }
        else{
            console.log("Failed to fetch data:", response.status,response.statusText);
        }
    }
    catch(error){
        console.error("Error to fetch data:", response.status);
    }
}

async function removeStock(index){
    const deleteId = stockData[index]._id;
    const deleteUrl= `${apiUrl}/${deleteId}`;
    try{
        const response = await fetch(deleteUrl,{
            method: 'DELETE',
        });
        if (response.ok) {
            stockData.splice(index,)
        } else {
            
        }
    }
}