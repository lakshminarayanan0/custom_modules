/*
 * least four digit is baaa
 * last four digit is 9999

 * least five digit is baaaa
 * last five digit is 99999

 * least six digit is baaaaa
 * last six digit is 999999

 * need to initialize the length of the string required using method init(maxLength)
 * need to return the next string everytime method genId() is called which is in order instead of random
 */


const alphanumericorder='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
let initial='';

function init(maxlength)
{
    console.log(maxlength);
    initial=getLeastAlphanumeric(maxlength);

}

function genId()
{
    if (initial === '') 
    {
        throw new Error('Initial value not set. Call init(maxlength) first.');
    }
    const id = initial;
    initial = getNextAlphanumeric(initial);
    return id;
}

function getLeastAlphanumeric(length) 
{
    if(length===1)
    {
        return alphanumericorder[0];
    }
    else
    {
        let least = alphanumericorder[1];
        for (let i = 0; i < length-1; i++) 
        {
            least += alphanumericorder[0];
        }
        return least;
    }
    
}


function getMostAlphanumeric(length)
{
    if(length===0)
    {
        return '';
    }
    else
    {
        let least='';
        for(i=0;i<length;i++)
        {
            least+=alphanumericorder[alphanumericorder.length-1];
        }
        return least;
    }
}

function getNextAlphanumeric(currentValue) 
{
    const length = currentValue.length;
    const lastIndex = length - 1;
    const index = alphanumericorder.indexOf(currentValue[lastIndex]);
    if (index!==-1 && index !== 61) 
    {
        const nextValue = currentValue.substring(0, lastIndex) + alphanumericorder[index + 1];
        return nextValue;
    } 
    else if(index===-1)
    {
        return alphanumericorder[0];
    }
    else 
    {
        let previousChars = currentValue.substring(0, lastIndex);
        const previousValue = getNextAlphanumeric(previousChars);
        return previousValue + alphanumericorder[0]; 
    }
}


function getPreviousAlphanumeric(currentValue) 
{
    const length = currentValue.length;
    const lastIndex = length - 1;
    const index = alphanumericorder.indexOf(currentValue[lastIndex]);

    if (index !== -1 && index !== 0) 
    {
        const previousValue = currentValue.substring(0, lastIndex) + alphanumericorder[index - 1];
        return previousValue;
    } 
    else if(index===-1)
    {
        return alphanumericorder[alphanumericorder.length-1]
    }
    else 
    {
        let previousChars = currentValue.substring(0, lastIndex);
        const previousValue = getPreviousAlphanumeric(previousChars);
        return previousValue + alphanumericorder[alphanumericorder.length-1]; 
    }
}


init(6);
for(i=0;i<=100;i++)
{
    console.log(genId());
}

module.exports=
{
    getNextAlphanumeric,
    getPreviousAlphanumeric,
    genId,
    init
}