import { Injectable } from '@nestjs/common';
import { SubscriberRepository } from './subscriber.repository';
import { CreateSubscriberBody } from './subscriber.dto';

@Injectable()
export class SubscriberService {
  constructor(private readonly subscriberRepository: SubscriberRepository) {}

  async getAll() {
    return this.subscriberRepository.findAll();
  }

  async createOrDelete(filter, subscriberDto: CreateSubscriberBody) {
    return this.subscriberRepository.createOrDelete(filter, subscriberDto);
  }
}
