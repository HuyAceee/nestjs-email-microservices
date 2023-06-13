import { Module } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { SubscriberController } from './subscriber.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SubsciberSchema } from './subscriber.model';
import { SubscriberRepository } from './subscriber.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Subscriber',
        schema: SubsciberSchema,
      },
    ]),
  ],
  controllers: [SubscriberController],
  providers: [SubscriberService, SubscriberRepository],
})
export class SubscriberModule {}
