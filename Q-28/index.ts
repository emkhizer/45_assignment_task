function determineLifeStage(age: number): string{
    if(age<0){
        return "invalid age";
    }else if(age <12){
        return "child";
    }else if(age <20){
        return "teenager";
    }else if(age <65){
        return "adult";
    }else {
        return "senior citizen";
    }
}
// Example usage
const age = 30;
const lifeStage = determineLifeStage(age);
console.log(`At ${age} years old, you are in the ${lifeStage} stage of life.`);