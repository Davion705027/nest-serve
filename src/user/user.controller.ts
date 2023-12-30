import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UserRole } from 'src/enum/userRole';
import { Public } from 'src/auth/auth.guard';

@Controller('user')
@ApiTags('用户管理')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post()
  @ApiOperation({ summary: '创建用户',description: '创建用户desc'})
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiQuery({name: 'name', required: true}) // 请求的参数 拼接在url后面 &
  @ApiQuery({name: 'role', enum: UserRole, isArray:false})
  @ApiOperation({ summary: '获取所有用户',description: '获取用户query参数拼接在url后面'})
  findAll() {
    return this.userService.findAll();
  }
  
  @Get(':id')
  @ApiParam({name: 'id',description: '用户id'}) // 动态id
  @ApiOperation({ summary: '获取单个用户',description: '获取单个用户param参数拼接在url后面'})
  findOne(@Param('id',ParseIntPipe) id: number) {
    console.log(id);
    return this.userService.findOne({id});
  }

  // @Get('exist')
  // existUser(@Body() params: object){
  //   console.log(params);
  //   return this.userService.findOne(params);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  // @Get('/create/:title/:age')
  //   async findOne1(@Param() params) {
  //       cats.title = params.title;
  //       cats.age = params.age;
  //   }
}
