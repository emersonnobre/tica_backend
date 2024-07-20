import { injectable } from 'tsyringe';
import { Repository } from 'typeorm';
import { dataSource } from '../../config/database';
import Employee from '../../models/employee.model';
import IEmployeeRepository from '../interfaces/i.employee.repository';

@injectable()
export default class EmployeeRepository implements IEmployeeRepository {
  _employeeRepository: Repository<Employee>

  constructor() {
    this._employeeRepository = dataSource.getRepository(Employee)
  }

  get(): Promise<Employee[]> {
    const queryBuilder = this._employeeRepository.createQueryBuilder()
    return queryBuilder.getMany()
  }

  getByName(name: string): Promise<Employee | null> {
    const queryBuilder = this._employeeRepository.createQueryBuilder().where({ name })
    return queryBuilder.getOne()
  }

  save(employee: Employee): Promise<Employee> {
    return this._employeeRepository.save(employee)
  }
}