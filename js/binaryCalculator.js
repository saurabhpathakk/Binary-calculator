result=document.getElementById('res');

document.getElementById('container').addEventListener('click',function(e){
    result=document.getElementById('res');
    if(e.target.id==='btnClr')
        result.innerHTML="";
    else if(e.target.id==='btnEql')
    evalExpression(result);    
    else
        result.innerHTML+=e.target.textContent;    
});


document.getElementById('btnEql').addEventListener('click',evalExpression);

function evalExpression(exp)
{
    var value=exp.textContent;
    var s="",arr=[],op,len,index;
    if(value==undefined)
    value="";
    else
    {
        len=value.toString().length;
        for(var i=0;i<len;i++)
        {
            if(value[i]!=='+' && value[i]!=='-' && value[i]!=='*' && value[i]!=='/')
                s=s+value[i];
            else
                {
                    arr.push(s);
                    s="";
                    op=value[i];
                    continue;
                }    
        }
        arr.push(s);
        
        var exp1,exp2;
        exp1=arr[0];
        exp2=arr[1];
        console.log(arr);
        if(exp2=='')
        res=exp1;
        else
        if(exp1=='')
        res=exp2;
        else
        if(exp1!='' && exp2!='')
        {
        switch(op)
        {
            case '+':
            
                res=((parseInt(exp1,2)+parseInt(exp2,2)).toString(2));
                console.log(exp1+" "+exp2);
                break;

            case '-':
                res=Math.abs((parseInt(exp1,2)-parseInt(exp2,2)).toString(2));
                break;

            case '*':
                res=((parseInt(exp1,2)*parseInt(exp2,2)).toString(2));
                break;
                
            case '/':
                if(exp2!=0)
                {
                res=Math.round((parseInt(exp1,2)/parseInt(exp2,2)).toString(2));
                res=(parseInt(res));
                }
                else
                res=0;
                break; 
                
            case undefined:
                    if(exp2==undefined)
                    res=exp1;
                    else
                    if(exp1==undefined)
                    res=exp2;
                    break;
                
        }
        result.innerHTML=res;
    }
}    
}
