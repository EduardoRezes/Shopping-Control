var list = [
    {
        "Desc":"rice", 
        "Amount":"1",
        "Value":"5.40"
    },
    {
        "Desc":"beer", 
        "Amount":"12",
        "Value":"1.99"
    },
    {
        "Desc":"meat", 
        "Amount":"1",
        "Value":"15.00"
    }
];

function getTotal(list){
    var total = 0;
    for (var key in list) {
        total += list[key].Value * list[key].Amount;
    }
    return total;
}

function setList(list){
    var table = `<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>`;
    for (var key in list) {
        table += `<tr><td>${list[key].Desc}</td><td>${list[key].Amount}</td><td>${list[key].Value}</td><td>Edit | Delete</td></tr>`       
    }
    table += `</tbody>`;
    document.getElementById("listTable").innerHTML = table;
}
setList(list);
console.log(getTotal(list));