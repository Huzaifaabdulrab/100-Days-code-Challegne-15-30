// Self-Running User Profile Create a Quick self-setup profile for a user than can tell you the user's name and age.

let profile = (function(){
    let name = "Huzaifa";
    let age = 16

    return{
        displyInfo: function() {
            console.log(`Name : ${name} , Age ${age}`);
        }
    };
})();

profile.displyInfo()