class Validate{
    static value(vale)
    {        
        let ret = true;
        if(vale === null)
        {
            ret = false;
            console.warn(`the value ${vale} is null`)
        }else{
            if(vale === undefined)
            {
                ret = false;
                console.warn(`the value ${vale} is undfined`)
                
            }else{
                if(vale.trim() === '')
                {
                    ret = false;
                    console.warn(`the value ${vale} is empty`)
                }
            }
        }
        return ret;
    }
}



