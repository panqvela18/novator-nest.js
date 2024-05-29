import { IsEmail, IsEnum, IsNumber, IsPhoneNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateUserDto {
    @MaxLength(15)
    @MinLength(3)
    @IsString()
    firstName:string

    @MaxLength(15)
    @MinLength(3)
    @IsString()
    lastName:string

    @IsEmail()
    email:string

    @Max(65)
    @Min(12)
    @IsNumber()
    age:number

    @IsPhoneNumber()
    phone:string

    @IsEnum(["male","female"])
    gender:string
}
