import Employee from '../../models/employee.model'

export default interface IEmployeeRepository {
    get(): Promise<Employee[]>
    getById(id: string): Promise<Employee | null>
    getByName(name: string): Promise<Employee | null>
    save(employee: Employee): Promise<Employee>
}