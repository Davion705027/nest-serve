import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProjectDto {
    @IsString({message:'name必传'})
    @ApiProperty({
        description: '项目名',
    })
    name: string;

    @IsString({message:'项目值必传'})
    @ApiProperty({
        description: '项目值',
    })
    @IsString()
    value: number;
}
