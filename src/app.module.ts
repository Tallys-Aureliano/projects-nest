import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModel } from './projects/entities/project.entity';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/projects.service';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    "database": "./db.sql",
    "type": "sqlite",
    "synchronize": true,
    "entities": ["dist/**/*.model.js"]
})],
  controllers: [ProjectsController],
  providers: [ProjectsService, ProjectsModel],
})
export class ProjectsModule {}
