/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/base.repository';
import { Subscriber } from './subscriber.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SubscriberRepository extends BaseRepository<Subscriber> {
  constructor(
    @InjectModel('Subscriber')
    private readonly subscriberModel: Model<Subscriber>,
  ) {
    super(subscriberModel);
  }
}
