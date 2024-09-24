import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Get,
  UseGuards,
  Put,
  UploadedFiles,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs'
import { FilesService } from './files.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UPLOAD_PATH } from '@app/common';
import { ApiTags } from '@nestjs/swagger';

const storage = diskStorage({
  destination: (_: any, __: any, cb: any) => {
    try {
      if (!existsSync(UPLOAD_PATH)) {
        mkdirSync(UPLOAD_PATH);
      }
      const uploadDestination = join(UPLOAD_PATH);
      cb(null, uploadDestination);
    } catch (error) {
      cb(error, null);
    }
  },
  filename: (_: any, file: any, cb: any) => {
    let name = file.originalname;
    cb(null, name);
  },
});

@ApiTags("Files")
@Controller('files')
export class FilesController {
  constructor(private filesService: FilesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', { storage }))
  async uploadFile(@UploadedFile() file) {

    // return this.filesService.create({
    //   name: file.originalname,
    //   mimetype: file.mimetype,
    //   url: gfile.metadata.mediaLink,
    //   gcloudId: gfile.id,
    // });
  }

  @Put()
  @UseInterceptors(FilesInterceptor('files', 10, { storage }))
  async uploadFiles(@UploadedFiles() files) {

    // let gfiles = await Promise.all(this.uploadFilesToGCloud(files));

    // let _files = files.map((file: any, i: number) => {
    //   let gfile: GCloudFileType = gfiles[i];
    //   return this.filesService.create({
    //     name: file.originalname,
    //     mimetype: file.mimetype,
    //     url: gfile.metadata.mediaLink,
    //     gcloudId: gfile.id,
    //   });
    // });
    // _files = await Promise.all(_files);
    // return {
    //   success: true,
    //   message: "success",
    //   data: _files
    // }

    return {}
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getFiles() {
    return this.filesService.find();
  }
}
