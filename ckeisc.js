let count = 10;
let garbage = setInterval(() => {
count--;
console.log(`剩 ${count} 秒`);
if(count===0){
    clearInterval(garbage);
    alert("結束");
}
}, 1000);
