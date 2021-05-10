const roads = ["Alice's House-Bob's House", "Alice's House-Cabin","Alice's Home-Post Office",
                "Bob's House-Town Hall", "Daria's House-Ernie's House",
                "Daria's House-Town Hall", "Ernie's House-Grete's House",
                "Grete's House-Farm","Grete's House-Shop", "Marketplace-Farm", "Marketplace-Post Office",
                "Marketplace-Shop", "Marketplace-Town Hall","Shop-Town-Hall"
]

function buildGraph(graph){
    let emptyObject = {};
    let objectName = "";
    for(let item of graph){
        Items = splitedItem = item.split("-");
        emptyObject[Items[0]] = Items[1];
    }
    return emptyObject;
}
console.log(buildGraph(roads))

