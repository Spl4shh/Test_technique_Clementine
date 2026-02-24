import { Module } from '@nestjs/common';
import { TournamentController } from './controller/tournament.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // rend les var d'environnement accessibles partout
    }),
  ],
  controllers: [TournamentController],
  providers: [],
})
export class AppModule {}
