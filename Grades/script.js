var grades = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";

var students = grades.split(", ");
var studentObjects = [];

/* Iterate over the students array. Splits elements into a name and score, capitalize names, */
for (var i = 0; i < students.length; i++) {
    var studentData = students[i].split("|");
    var name = studentData[0];
    var score = parseInt(studentData[1]);
    var capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    var student = { name: capitalized, score: score };
    studentObjects.push(student);
}

/* Sorts students alphabetically */
studentObjects.sort(function(a, b) {
    return a.name.localeCompare(b.name);
});

/* create a for loop that retrieves student names and their score */
for (var i = 0; i < studentObjects.length; i++) {
    var student = studentObjects[i];
    document.write(student.name + " - " + student.score + "<br>");
}

/* Calculate lowest score, highest score, average score in "studentObjects array" */ 
var lowestScore = studentObjects[0].score;
var highestScore = studentObjects[studentObjects.length - 1].score;
var sumScores = 0;
for (var i = 0; i < studentObjects.length; i++) {
    sumScores += studentObjects[i].score;
}
var averageScore = sumScores / studentObjects.length;

/* Outputs to the document */
document.write("<br>Total students: " + studentObjects.length + "<br>");
document.write("Lowest score: " + lowestScore + "<br>");
document.write("Highest score: " + highestScore + "<br>");
document.write("Average score: " + averageScore.toFixed(2) + "<br>");
