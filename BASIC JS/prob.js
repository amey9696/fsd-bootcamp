// const football=(value)=>
//     `${value}`.includes('1111111') ?  "Dangeous" :"not Dangerous"
// console.log(football(00100110111111101));

// let str="111100011111";

const find=str=>{
    let num=str.split('');
    let count=0;
    num.forEach(element => {
        if(element==1){
            count+=1;
        }
    });
    if(count>=7){
        return "YES";
    }      
    else{
        return "NO";
    }
}
console.log(find('11110111011101'));
console.log(find('00100110111111101'));
console.log(find('001001'));
