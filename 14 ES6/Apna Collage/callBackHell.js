// function getData(dataId){
//     setTimeout(()=>{
//         console.log("Data",dataId);
//     },2000);
// }
// getData(1);
// getData(2);
// getData(3);

//by using this after 2 sec 1 2 3 will be print.
//but we want after 2 sec it print 1 then after 2 sec it print 2,then after 2 sec it print 3

function getData(dataId , getNextData){
    setTimeout(()=>{
        console.log("Data",dataId);
        if(getNextData)
        {
            getNextData();//this is the from of callback
        }
    },2000);
}

//getData(1 , getNextData(2))
// getData(1,()=>{
//     getData(2);
// });

getData(1,()=>{
    getData(2,()=>{
        getData(3);
    })
}) 