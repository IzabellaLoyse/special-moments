import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMoment } from '../../../interfaces/imoment';
import { MomentsService } from '../../../services/moments.service';

@Component({
  selector: 'app-details-moment',
  templateUrl: './details-moment.component.html',
  styleUrls: ['./details-moment.component.scss'],
})
export class DetailsMomentComponent implements OnInit {
  public moment?: IMoment;

  constructor(
    private momentsService: MomentsService,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.momentsService.getMomentById(id).subscribe((item) => {
      this.moment = item.data;
    });
  }
}
