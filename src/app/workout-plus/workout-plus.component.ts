import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { CategoryModel } from '../category/category-model';
import { WorkoutModel } from '../workout/workout-model';
import { AuthService } from '../_services/auth.service';
import { CategoryService } from '../_services/category.service';
import { RestClientService } from '../_services/rest-client.service';

@Component({
  selector: 'app-workout-plus',
  templateUrl: './workout-plus.component.html',
  styleUrls: ['./workout-plus.component.css']
})
export class WorkoutPlusComponent implements OnInit {

  @Input() action: string;
  @Input() workout: WorkoutModel;
  protected categories: CategoryModel[] = [];

  constructor(
    private activeModal: NgbActiveModal,
    private authService: AuthService,
    private restService: RestClientService) { }

  ngOnInit() {
    if (!this.workout) {
      this.workout = new WorkoutModel('', new CategoryModel(null), '', 0.0, false);
    }
    this.restService.getCategories(this.authService.auth).subscribe(
      res => {
        if (res.status === 200 && res.body) {
          Array.from(res.body).forEach((category: CategoryModel) => {
            this.categories.push(CategoryService.clone(category));
          });
        } else if (res.status === 204) {
          console.log('No categories found');
          this.categories.length = 0;
        }
      },
    );
  }

  close() {
    return this.activeModal.close(this.workout);
  }

  dismiss() {
    this.activeModal.dismiss();
  }

}