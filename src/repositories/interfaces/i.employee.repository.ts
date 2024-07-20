import Employee from '../../models/employee.model'

export default interface IEmployeeRepository {
    get(): Promise<Employee[]>
    getByName(name: string): Promise<Employee | null>
    save(employee: Employee): Promise<Employee>
}