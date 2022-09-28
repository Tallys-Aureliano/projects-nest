import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectsModel } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(
    @Inject(ProjectsModel)
    public projectsModel: Repository<ProjectsModel>,
  ) {}
  
  
  create(createProjectDto: CreateProjectDto) {
    console.log(createProjectDto);
    return 'This action adds a new project';
  }

  findAll() {
    return [];
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
