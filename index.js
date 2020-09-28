class Validate{

    static value(vale)
    {
        
        let ret = true;

        if(vale === null)
        {
            ret = false;
        }else{
            if(vale === undefined)
            {
                ret = false;
            }else{
                if(vale.trim() === '')
                {
                    ret = false;
                }
            }
        }

        return ret;
    }
}



