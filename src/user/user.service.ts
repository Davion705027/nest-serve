import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    // private readonly authService: AuthService,
    ) {}
  async create(createUserDto: CreateUserDto) {
    const res = await this.userRepository.save(createUserDto);
    return res;
  }

  findAll() {
    
  }

  async findOne(params) {
    const res = await this.userRepository.findOne({
      where:
        {
          name: params.name,
          password: params.password
        },
    }) || null;
    console.log(res);
    return res;  
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
