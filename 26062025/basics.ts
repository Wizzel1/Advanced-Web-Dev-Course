const age: number = 20;

for (let i = 0; i < age; i++) {
    if(i < 18) {
        console.log("You are not an adult");
    } else {
        console.log("You are an adult");
    }
}
//Step 4
const score: number = 0;
//Step 5
if (score) console.log(score)

//Step 6
if(score){
  console.log("Score is evaluated as thruthy");
} else {
  console.log("No score");
}

//Step 7
const username: string = "";

//Step 8
if (username) console.log("Username is available")

//Step 9
if (username) {
    console.log("Username is available")
} else {
    console.log("Username is not available")
}

//Step 10
const isAdmin: boolean = true;

//Step 11
if (isAdmin) console.log("You are an admin")

//Step 12
if (isAdmin) {
    console.log("You are an admin")
} else {
    console.log("You are not an admin")
}