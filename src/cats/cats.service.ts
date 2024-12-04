import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cat.interface';  
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class CatsService {
    constructor(@InjectModel('Cat') private catModel: Model<Cat>) { }

    async create(cat: CreateCatDto): Promise<Cat> {
        const newCat = new this.catModel(cat);
        return newCat.save();
    }

    // Lấy tất cả các cat
    async findAll(): Promise<Cat[]> {
        return this.catModel.find().exec();
    }

    // Tìm một cat theo id
    async findOne(id: string): Promise<Cat> {
        return this.catModel.findById(id).exec();
    }
}
