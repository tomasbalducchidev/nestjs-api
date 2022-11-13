/* eslint-disable prettier/prettier */
import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { query } from 'express';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('/create')
  async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    const product = await this.productService.createProduct(createProductDTO);
    return res.status(HttpStatus.OK).json({
      message: 'received',
      product: product,
    });
  }

  @Get('/')
  async getProducts(@Res() res) {
    const products = await this.productService.getProducts();
    return res.status(HttpStatus.OK).json({
      products,
    });
  }

  @Get('/:productID')
  async getProduct(@Res() res, @Param('productID') productID) {
    const product = await this.productService.getProduct(productID);
    if (!product) throw new NotFoundException('Product doesnt exist');
    return res.status(HttpStatus.OK).json(product);
  }

  @Delete('/delete')
  async deleteProduct(@Res() res, @Query('productID') productID) {
    const productDeleted = await this.productService.deleteProduct(productID);
    if (!productDeleted) throw new NotFoundException('Product doesnt exist');
    return res.status(HttpStatus.OK).json({
      message: 'Product deleted',
      productDeleted,
    });
  }
  @Put('/update')
  async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('productID') productID) {
    const productUpdated = await this.productService.updateProduct(productID, createProductDTO);
    if (!productUpdated) throw new NotFoundException('Product doesnt exist');
    return res.status(HttpStatus.OK).json({
      message: 'Product updated',
      productUpdated,
    });
  }
}
