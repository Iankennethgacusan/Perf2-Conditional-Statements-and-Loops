let day = prompt("Enter a day of the week (e.g., Monday):").toLowerCase();

switch (day) {
  case "monday":
    console.log("Your task for Monday is: Finish your assignments.");
    break;
  case "tuesday":
    console.log("Your task for Tuesday is: Prepare for the quiz.");
    break;
  case "wednesday":
    console.log("Your task for Wednesday is: Attend the meeting.");
    break;
  case "thursday":
    console.log("Your task for Thursday is: Review your notes.");
    break;
  case "friday":
    console.log("Your task for Friday is: Submit your projects.");
    break;
  case "saturday":
    console.log("Your task for Saturday is: Relax and recharge.");
    break;
  case "sunday":
    console.log("Your task for Sunday is: Plan for the next week.");
    break;
  default:
    console.log("Invalid day entered.");
}
