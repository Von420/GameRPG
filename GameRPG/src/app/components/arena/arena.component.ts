import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/serviceRPG.service';
import { PlayerService } from 'src/app/services/player.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {

  constructor(private autenticacao: AutenticacaoService) { }

  ngOnInit(): void {
  }

}
