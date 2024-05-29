import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() productData: CreateProductDto) {
    return this.productService.create(productData);
  }
  @Put(":id")
  update(@Param("id") id, @Body() productData: UpdateProductDto) {
    return this.productService.update(id,productData);
  }

  
}
