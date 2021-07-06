module.exports.Sum = (a, b) =>
{
    if(!a && !b)
    {
        throw new Error("Function called without arguements");
    }
    if(!a || !b)
    {
        throw new Error("Function was called with one arguement");
    }
    if(typeof(a) == "string" || !typeof(b) == "string")
    {
        throw new TypeError("Function must be called with two integers");
    }
    return a + b;
}

module.exports.SumWithPromise = (a,b) => {
    return new Promise((resolve, reject) => {
        if(!a && !b)
        {
            reject("Function called without parameters");
        } 
        if(!a || !b)
        {
            reject("Function was called with one argument");
        }
        if(typeof(a) == "string" || !typeof(b) == "string")
        {
            reject("Function must be called with two integers");
        }
        const sum = a + b;
        resolve(sum);
    })
}

module.exports.SumWithCallback = (a, b, callback=()=>{}) => {
        if(!a && !b)
        {
            callback(new Error("Function called without parameters"));
        } 
        if(!a || !b)
        {
            callback(new Error("Function was called with one argument"));
        }
        if(typeof(a) == "string" || !typeof(b) == "string")
        {
            callback(new TypeError("Function must be called with two integers"));
        }
        const sum = a + b;
        callback(sum);
}

module.exports.GetEmployee = () => {
    return {
        fullname: "Joe",
        address: "Joe's address"
    };
}