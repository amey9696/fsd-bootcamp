const arr = ['carecar', 1344, 12321, 'did', 'cannot','madam',1111,1234321];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
    document.write(findPalindrome(arr));
   //  document.write(findPalindrome(arr.length));
// console.log(findPalindrome(arr));