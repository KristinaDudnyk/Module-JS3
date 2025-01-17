let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

function studentsOfGryffindor (hogwarts) {
  let arrOfStudents = [];
  for ( let student of hogwarts) {
    if (student.house === "Gryffindor") {
      arrOfStudents.push(`${student.firstName} ${student.lastName}`);
    }
  }
  return arrOfStudents
  // return hogwarts.map(person => person.filter(person => person.house === "Gryffindor"))
}
console.log(studentsOfGryffindor(hogwarts))

function arrOfTeachersWhoHavePets (hogwarts) {
  let arrOfTeachersWhoHavePets = [];
  for (let teacher of hogwarts) {
    if (teacher.occupation === "Teacher" && teacher.pet !== null) {
      arrOfTeachersWhoHavePets.push(`${teacher.firstName} ${teacher.lastName}`);
    }
  }
  return arrOfTeachersWhoHavePets
}
console.log(arrOfTeachersWhoHavePets(hogwarts))

//ex 1
// Harry Potter
// Ron Weasley
// Hermione Granger
// Minerva McGonagall
// Albus Dumbledore

// ex 2

// Albus Dumbledore
