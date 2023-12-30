import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    ) {}


  async create(createProjectDto: CreateProjectDto) {
    const res = await this.projectRepository.save(createProjectDto);
    return res;
  }

  findAll() {
    const res = this.projectRepository.find();
    return res;
  }

  findOne(id: number) {
    const res = this.projectRepository.findOne({where:{id}});
    return res;
  }

  async update(updateProjectDto: UpdateProjectDto) {
    const res = await this.projectRepository.update(updateProjectDto.id, updateProjectDto);
    return res;
  }

  remove(id: number) {
    return this.projectRepository.delete(id);
  }
}
