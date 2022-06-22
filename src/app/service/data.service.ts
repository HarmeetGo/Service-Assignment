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

    addEmployee(employee:{name:string,designation:string}){
        this.Employees.push(employee);
    }

    saveEmploye(newemployee:{index:number,Name:string,Des:string}){
        this.Employees[newemployee.index].name=newemployee.Name;
        this.Employees[newemployee.index].designation=newemployee.Des;
    }
    
}