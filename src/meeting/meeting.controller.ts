import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { CreateMeetingDto } from './dto/create-meeting.dto';

@Controller('meeting')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

  @Post()
  create(@Body() createMeetingDto: CreateMeetingDto) {
    return this.meetingService.create(createMeetingDto);
  }
  @Put(":id")
  update(@Param("id") id,@Body() UpdateMeetingDto: CreateMeetingDto) {
    return this.meetingService.update(id,UpdateMeetingDto);
  }

 
}
