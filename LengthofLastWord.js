/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   var arr = new Array();
   var j = 0;
   var get = new Array(); //储存非空项
   arr = s.split(/\s/);
   if(arr.length == 1){ //s="" 或s="a"
       if(arr[0] != ""){
           return arr[0].length
       }else{
           return 0
       }
   }else{
       for(var i=0; i<arr.length; i++){
           if(arr[i] != ""){
             get[j] = arr[i];
             j++
           }
       }
       if(get.length == 0){ //s="   "字符串中有多个空格
           return 0
       }else{
       return get[get.length-1].length;
   }}
   
};