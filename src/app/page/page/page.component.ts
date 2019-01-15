import { Component, OnInit } from '@angular/core';
import { CosmicService } from 'src/app/core/cosmic.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private cosmicService: CosmicService) {}

  public page: any;

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('slug')),
        switchMap(slug => (slug ? this.cosmicService.getPage(slug) : this.cosmicService.getPage('home')))
      )
      .subscribe(page => (this.page = page));
  }
}
