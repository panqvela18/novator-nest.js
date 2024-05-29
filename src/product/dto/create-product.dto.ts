import {
  ArrayNotEmpty,
  IsArray,
  IsNumber,
  IsString,
  IsUrl,
  MaxLength,
  Min,
  MinLength,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isNonInteger', async: false })
export class IsNonIntegerConstraint implements ValidatorConstraintInterface {
  validate(value: number) {
    return typeof value === 'number' && value > 0 && !Number.isInteger(value);
  }
}
export class CreateProductDto {
  @MaxLength(255)
  @MinLength(3)
  @IsString()
  title: string;

  @IsNumber()
  @Min(0.01) 
  @Validate(IsNonIntegerConstraint) 
  price:number  

  @MinLength(150)
  @IsString()
  description: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  colors: string[];

  @IsUrl()
  image:string
}
