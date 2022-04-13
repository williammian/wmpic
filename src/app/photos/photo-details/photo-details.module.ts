import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PhotoModule } from "../photo/photo.module";
import { PhotoDetailsComponent } from "./photo-details.component";
import { PhotoCommentsComponent } from "./photo-commnets/photo-commnets.component";
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";
import { ShowIfLoggedModule } from "src/app/shared/directives/show-if-logged/show-if-logged.module";

@NgModule({
    declarations: [
      PhotoDetailsComponent,
      PhotoCommentsComponent,
      PhotoOwnerOnlyDirective
    ],
    exports: [
      PhotoDetailsComponent,
      PhotoCommentsComponent
    ],
    imports: [
      CommonModule,
      PhotoModule,
      RouterModule,
      ReactiveFormsModule,
      VMessageModule,
      ShowIfLoggedModule
    ]
})
export class PhotoDetailsModule { }
