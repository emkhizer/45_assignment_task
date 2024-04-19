function determineLifeStage(age) {
    if (age < 0) {
        return "invalid age";
    }
    else if (age < 12) {
        return "child";
    }
    else if (age < 20) {
        return "teenager";
    }
    else if (age < 65) {
        return "adult";
    }
    else {
        return "senior citizen";
    }
}
// Example usage
var age = 30;
var lifeStage = determineLifeStage(age);
console.log("At ".concat(age, " years old, you are in the ").concat(lifeStage, " stage of life."));
