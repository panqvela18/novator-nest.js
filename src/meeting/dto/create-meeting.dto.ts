import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsDateString, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { CreateUserDto } from "src/users/dto/create-user.dto";

export class CreateMeetingDto {
    @MaxLength(255)
    @MinLength(3)
    @IsString()
    title:string

    @IsDateString()
    date: string;

    @ValidateNested()
    @Type(() => CreateUserDto)
    mentor: CreateUserDto;

    @ValidateNested({ each: true })
    @Type(() => CreateUserDto)
    @IsArray()
    @ArrayMinSize(1)
    students: CreateUserDto[];
}
