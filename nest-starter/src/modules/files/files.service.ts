import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EntityRepository, File, FileDocument } from '@app/common';
import { Model } from 'mongoose';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class FilesService extends EntityRepository<FileDocument> {
  constructor(
    @InjectModel(File.name) private fileModel: Model<FileDocument>,
    private readonly mailerService: MailerService,
  ) {
    super(fileModel);
  }

  async findAll() {
    const context = {
      saasName: 'YourSaaS',
      primaryColor: '#4CAF50',
      userName: 'John Doe',
      saasBenefit: 'streamline your workflow',
      gettingStartedSteps: [
        'Complete your profile',
        'Explore our dashboard',
        'Check out our quick start guide',
      ],
      supportMessage:
        'If you have any questions, our support team is always here to help.',
      ctaLink: 'https://yoursaas.com/get-started',
      ctaText: 'Get Started Now',
      currentYear: new Date().getFullYear(),
      footerMessage:
        "You're receiving this email because you signed up for YourSaaS. If you believe this is an error, please contact our support team.",
    };
    this.mailerService.sendMail({
      to: 'blackdev60@gmail.com',
      subject: 'Testing Nest Mailermodule with template ✔',
      template: 'welcome',
      context,
    });
    return [];
  }
}
