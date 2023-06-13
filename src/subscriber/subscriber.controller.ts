import { Controller } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { MessagePattern, Payload, EventPattern } from '@nestjs/microservices';
import { CreateSubscriberBody } from './subscriber.dto';

@Controller('subscriber')
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) {}

  @MessagePattern({ cmd: 'add-subscriber' })
  createSubcriber(@Payload() createDto: CreateSubscriberBody) {
    const { email } = createDto;
    return this.subscriberService.createOrDelete({ email }, createDto);
  }

  @MessagePattern({ cmd: 'get-all-subscriber' })
  getAll() {
    return this.subscriberService.getAll();
  }

  @EventPattern({ cmd: 'add-subscriber' })
  createEventSubcriber(@Payload() createDto: CreateSubscriberBody) {
    const { email } = createDto;
    return this.subscriberService.createOrDelete({ email }, createDto);
  }
}
