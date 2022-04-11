import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from "rxjs";
import { PhotoComment } from "../../photo/photo-comment";
import { PhotoService } from "../../photo/photo.service";

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {

    @Input() photoId: number;
    commnetForm: FormGroup;

    comments$: Observable<PhotoComment[]>;

    constructor(
      private photoService: PhotoService,
      private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photoId);
        this.commnetForm = this.formBuilder.group({
          comment: ['', Validators.maxLength(300)]
        });
    }
}
