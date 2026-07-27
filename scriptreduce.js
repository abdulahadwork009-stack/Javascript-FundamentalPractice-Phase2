const users = [
  { id: 1, name: "Ali", age: 22, salary: 50000 },
  { id: 2, name: "Ahmed", age: 18, salary: 25000 },
  { id: 3, name: "Sara", age: 27, salary: 70000 },
  { id: 4, name: "Ayesha", age: 30, salary: 90000 }
];
const SalarySum = users.reduce(function(total, user) {
    return total + user.salary;
}, 0);

console.log(SalarySum);