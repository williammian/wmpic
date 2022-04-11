import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { PhotoModule } from "../photo/photo.module";
import { PhotoDetailsComponent } from "./photo-details.component";
import { PhotoCommentsComponent } from "./photo-commnets/photo-commnets.component";

@NgModule({
    declarations: [
      PhotoDetailsComponent,
      PhotoCommentsComponent
    ],
    exports: [
      PhotoDetailsComponent,
      PhotoCommentsComponent
    ],
    imports: [
      CommonModule,
      PhotoModule,
      RouterModule
    ]
})
export class PhotoDetailsModule { }
