import { DataSource } from 'typeorm'
import opts from '../../ormconfig'

// @ts-ignore: Unreachable code error
export const dataSource = new DataSource(opts)