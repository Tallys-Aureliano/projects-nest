import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectsService {
    create(_createProjectDto: CreateProjectDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, _updateProjectDto: UpdateProjectDto): string;
    remove(id: number): string;
}
