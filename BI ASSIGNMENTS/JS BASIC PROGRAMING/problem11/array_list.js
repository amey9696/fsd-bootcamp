a= [3,3,4,4,7,8]
const cal = (arr)=>{
  dict = {}
  arr.forEach((item)=>{
    if(item in dict)
      dict[item] = dict[item] + 1 
    else
      dict[item] = 1
  });
  
  var sortedArr = []
  for(let key in dict){
      sortedArr.push([key, dict[key]])
  }
  
  sortedArr.sort(function(a, b) {
    return a[1] - b[1];
  });
  
  var result  = '';
  for(let i=sortedArr.length-1; i>=0;i--){
    result = result +" "+ sortedArr[i][0]
  }
  console.log(result)
}

cal(a);