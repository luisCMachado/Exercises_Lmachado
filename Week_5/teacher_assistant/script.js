var numStudents = prompt('Number of students?');
var allClass = [];
var sum=0;

for (var i = 0; i < numStudents; i++) {
    var student = prompt ('Name?');
    var grade = prompt ('Grade?');
    allClass.push({'student': student,'grade': grade});
    sum += parseInt(allClass[i].grade);
}

var avg = sum/numStudents;
var studentPrompt = prompt('Enter Student name, to get variation?');
getDeviation()

function getDeviation() {
    for (var i= 0; i <  numStudents; i++) {
        if (studentPrompt === allClass[i].student) { 
            var deviaton = Math.round(((allClass[i].grade / avg)-1)*100);
            return alert (studentPrompt + ' variation from average is ' + (deviaton<=0?"":"+") + deviaton +'%'); 
        } 
    }
    alert ('Sorry, we don’t have that student listed')
}