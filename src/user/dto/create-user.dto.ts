import { ApiProperty, ApiQuery } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString({message:'name要传'})
    @ApiProperty({
        description: '用户名',
    })
    name: string;

    @IsString()
    email?: string;
}
