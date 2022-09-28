import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModel } from './entities/project.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProjectsModel])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
