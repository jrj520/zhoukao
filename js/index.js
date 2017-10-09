// 去重1
var str = [1,1,1,5,6,7];
var newstr = [];
function auto(str,newstr){
    for(var i = 0; i < str.length; i++)
    {
        if(newstr.indexOf(str[i]) == -1)
        {
            newstr.push(str[i])
        }

    }
    return newstr;
}

console.log(auto(str,newstr));