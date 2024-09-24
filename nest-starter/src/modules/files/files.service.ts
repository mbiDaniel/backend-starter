import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EntityRepository, File, FileDocument } from '@app/common';
import { Model } from 'mongoose';
// import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class FilesService extends EntityRepository<FileDocument> {
  constructor(@InjectModel(File.name) private fileModel: Model<FileDocument>) {
    super(fileModel);
  }

  async findAll() {
    // this.mailerService
    //   .sendMail({
    //     to: 'test@nestjs.com',
    //     subject: 'Testing Nest Mailermodule with template ✔',
    //     template: 'welcome', // The `.pug`, `.ejs` or `.hbs` extension is appended automatically.
    //     context: {
    //       // Data to be sent to template engine.
    //       code: 'cf1a3f828287',
    //       username: 'john doe',
    //     },
    //   })
    return []
  }
}
