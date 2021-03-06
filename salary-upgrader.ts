import { Employee } from './Employee';
export class SalaryUpgrader {
    constructor() {

    }
    incrementSalary(percentRaise: number, empList: Employee[]) {
        empList.map(emp => {
            let oldSalary = emp.getSalary();
            let newSalary = (oldSalary*percentRaise/100) + oldSalary;
            emp.updateSalary(newSalary);
        })        
    }

    rateEmployee(empList){
        empList.map((emp,i) => {
            emp.rating = (i+1)/2;
        })
    }
    addBonus(empList: Employee[]) {
        this.rateEmployee(empList);
        empList.map((emp,i) => {
            emp.rating >= 3 ? emp.bonus = (i/2) * 1000 : emp.bonus = 0;
        })
    }
}