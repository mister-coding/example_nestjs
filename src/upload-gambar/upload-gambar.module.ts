import { Module } from '@nestjs/common';
import { UploadGambarService } from './upload-gambar.service';
import { UploadGambarController } from './upload-gambar.controller';

@Module({
  providers: [UploadGambarService],
  controllers: [UploadGambarController]
})
export class UploadGambarModule {}
