class Validate{
    static value(vale)
    {        
        let ret = true;
        if(vale === null)
        {
            ret = false;
            console.warn(`the value is null`)
        }else{
            if(vale === undefined)
            {
                ret = false;
                console.warn(`the value is undfined`)
                
            }else{                
                if(vale.toString().trim() === '')
                {
                    ret = false;
                    console.warn(`the value  is empty`)
                }
            }
        }
        return ret;
    }
}

module.exports = {Validate};

