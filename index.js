let students = [
    { id: 1, student_name : "pavan", city : "Hyd" },
    { id: 2, student_name : "Arjun", city : "Srikakulam" },
    { id: 3, student_name : "Meena", city : "Vizag" },
    { id: 4, student_name : "Rahul", city : "Bengaluru" },
    { id: 5, student_name : "Sita", city : "Chennai" },
    { id: 6, student_name : "Vijay", city : "Mumbai" },
  ];
  
  
  console.log("For-in loop..............................")
  for (let index in students) {
    console.log(`${students[index].student_name} from ${students[index].city}`);
  };
  
  console.log("For-of loop............................ ")
  
  for (let student of students) {
      console.log(`${student.student_name} from ${student.city}`);
  }