import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';  

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) { }

    // API endpoint để tạo một cat mới
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return this.catsService.create(createCatDto);
    }

    // API endpoint để lấy tất cả các cat
    @Get()
    async findAll() {
        return this.catsService.findAll();
    }

    // API endpoint để tìm một cat theo id
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.catsService.findOne(id);
    }
}
