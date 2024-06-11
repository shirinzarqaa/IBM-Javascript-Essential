let userRole = "employee";
let message;

switch(userRole) {
    case 'Employee':
        message = "You are authorized to have access to 'Dietary Services'.";
        break;
    case 'Enrolled Member':
        message = "You are authorized to have access to 'Dietary Services' and one-on-one interaction with a dietician.";
        break;
    case 'Subscriber':
        message = "You are authorized to have partial access to facilitate 'Dietary Services' only.";
        break;
    case 'Non-Subscriber':
        message = "You need to enroll or at least subscribe first to avail this facility.";
        break;
    default:
        message = "Invalid role. Please check your role and try again.";
}

console.log(message);
