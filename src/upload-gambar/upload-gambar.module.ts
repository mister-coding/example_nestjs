import { Module } from '@nestjs/common';
import { UploadGambarService } from './upload-gambar.service';

@Module({
  providers: [UploadGambarService]
})
export class UploadGambarModule {}
