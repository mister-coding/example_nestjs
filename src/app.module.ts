import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadGambarModule } from './upload-gambar/upload-gambar.module';

@Module({
  imports: [UploadGambarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
