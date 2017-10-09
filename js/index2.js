/**
 * Created by Candy on 2017/10/9.
 */
    //去重2
var str = [1,1,1,5,6,7];
var newstr = [];
function auto(str,newstr){
    for(var i = 0; i < str.length; i++)
    {
        if(str[i]===str[i+1]){
            delete str[i]
        }else{
            newstr.push(str[i])
        }

    }
    return newstr;
}

console.log(auto(str,newstr));