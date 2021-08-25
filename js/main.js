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
        table += `<tr><td>${formatDesc(list[key].Desc)}</td><td>${list[key].Amount}</td><td>${formatValue(list[key].Value)}</td><td>Edit | Delete</td></tr>`       
    }
    table += `</tbody>`;
    document.getElementById("listTable").innerHTML = table;
}

function formatDesc(desc) {
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formatValue(value){
    var str = parseFloat(value).toFixed(2) + "";
    str = str.replace("." , ",");
    str = `$ ${str}`;
    return str;
}
setList(list)