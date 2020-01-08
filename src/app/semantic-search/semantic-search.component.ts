import { Component, OnInit } from '@angular/core';
import { SemanticSearchService } from './semantic-search.service';
import { GoogleSpellingService } from '../_service/google-spelling.service';

@Component({
  selector: 'app-semantic-search',
  templateUrl: './semantic-search.component.html',
  styleUrls: ['./semantic-search.component.css']
})
export class SemanticSearchComponent implements OnInit {

  phrase = "estou com um problema na minha impressora LG4300, fica aparecendo uma luz vermelha no painel";

  constructor(
    private semanticSearchService: SemanticSearchService,
    private googleSpellingService: GoogleSpellingService
    ) { }

  ngOnInit() {
  }

  search() {
    this.googleSpellingService.searchSpellin(this.phrase).then((result: any) => {
      if(result.spelling){
        this.phrase = result.spelling.correctedQuery;
      }
      this.semanticSearchService.search(this.phrase).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      })
    }).catch((error) => {
      console.log(error);
    })

    
  }

}