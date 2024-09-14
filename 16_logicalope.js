/* Logical Operators - Manipulate boolean values
    => AND &&
    => OR ||
    => NOT !
*/

//AND
const temp = 20;
if(temp > 0 && temp <= 30)
{
    console.log("Greate Weather");
}
else
{
    console.log("Bad Weather");
}
//OR
const temp2 = 250;
if(temp > 0 || temp <= 30)
{
    console.log("Greate Weather");
}
else
{
    console.log("Bad Weather");
}
//NOT
const isSunny = false;
if(!isSunny)
{
    console.log("It is Sunny")
}
else{
    console.log("It is not SUnny");
}