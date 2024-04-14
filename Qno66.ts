//Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.

function Verification(cond1: boolean, cond2: boolean): boolean {
    return cond1 && cond2;
}
console.log(Verification( true,false ));

