import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatSchema } from './cats.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }]),  // Đảm bảo đăng ký schema ở đây
    ],
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule { }
