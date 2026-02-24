import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';

@Controller('tournaments')
export class TournamentController {
      constructor() {}

      @Post()
      createTournament(@Body() createTournamentDto: CreateTournamentDto) {
            // dans le service, save le tournoi
      }
}     
