import { Controller, Get, Post, Body, Param, Delete, Query, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { BodyObj, QueryParams } from 'src/Interface';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() body:BodyObj) {
    return `დამატებულია პროდუქტი პარამეტრებით:ფერი-${body.color} ზომა-${body.size} ბრენდი-${body.brand} კატეგორია-${body.category} ფასი-${body.price} სათაური-${body.title}`;
  }

  @Get()
  findAll(@Query() query:QueryParams) {
    return `თქვენ მოითხოვეთ ყველა ${query.color} ${query.category}ს სია,რომლის ზომაცაა ${query.size} და ბრენდია ${query.brand}`
  }

  @Get(':id')
  findOne(@Param("id") id:number | string ) {
    return `თქვენ მოითხოვეთ პროდუქტის ინფორმაცია რომლის id არის ${id}`
  }

  @Put(':id')
  update(@Param('id') id:number | string, @Body() body:BodyObj) {
    return `განახლებულია პროდუქტი #${id} პარამეტრებით:ფერი-${body.color} ზომა-${body.size} ბრენდი-${body.brand} კატეგორია-${body.category} ფასი-${body.price} სათაური-${body.title}`
  }

  @Delete(':id')
  remove(@Param('id') id:number | string,@Body() body:BodyObj) {
    return `წაშლილია პროდუქტი #${id} პარამეტრებით:ფერი-${body.color} ზომა-${body.size} ბრენდი-${body.brand} კატეგორია-${body.category} ფასი-${body.price} სათაური-${body.title}`
  }
}
