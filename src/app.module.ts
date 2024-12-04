import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb+srv://${configService.get('MONGO_DB_USERNAME')}:${configService.get('MONGO_DB_PASSWORD')}@${configService.get('MONGO_DB_CLUSTER')}.xxpyg.mongodb.net/${configService.get('MONGO_DB_NAME')}?retryWrites=true&w=majority&appName=${configService.get('MONGO_DB_NAME')}`,
      }),
      inject: [ConfigService],
    }),
    CatsModule,  
  ],
  controllers: [AppController],
  providers: [AppService],  
})
export class AppModule { }
