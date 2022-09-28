import { Module } from '@nestjs/common';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/projects.service';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
