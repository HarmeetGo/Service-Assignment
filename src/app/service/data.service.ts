export class DataService{
    Employees=[
        {
            name: 'Raj',
            designation:'JAVA-developer'
        },
        {
            name: 'Viru',
            designation:'FrontEnd-developer'
        }
    ]

    addEmployee(employee:{name,designation}){
        this.Employees.push(employee);
    }
}