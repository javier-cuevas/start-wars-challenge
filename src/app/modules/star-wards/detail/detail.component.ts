import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Services 
import { ApiStarWarsService } from 'src/app/services/api-star-wars.service';

//Models
import { FilmDetail } from 'src/app/models/film-detail';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [
  ]
})
export class DetailComponent implements OnInit {

  film_id:number;

  detail:FilmDetail;

  constructor( private actRoute: ActivatedRoute, private api: ApiStarWarsService ) { 
    this.film_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getDetailMovie();
  }

  getDetailMovie(){
    return this.api.getDetail(this.film_id).subscribe(resp => {
      this.detail = resp.results;
      console.log(this.detail);
    });
  }

}
