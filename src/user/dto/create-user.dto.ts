import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString({message:'name要传'})
    name: string;

    @IsString()
    email?: string;
}
