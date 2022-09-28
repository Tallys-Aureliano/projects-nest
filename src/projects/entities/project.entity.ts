// export class Project {}
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProjectsModel {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 120 })
  name: string;
  @Column({ length: 255 })
  github: string;
  @Column({ length: 120 })
  tipo: string;
}