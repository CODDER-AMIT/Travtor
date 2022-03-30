import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from '@ngrx/store';
import { SharedModule } from "./shared/shared.module";
import { SupportPageComponent } from './shared/componenets/support-page/support-page.component';
import { TopBarComponent } from "./shared/componenets/top-bar/top-bar.component";
import { InternalEffects } from "./state/internal.effect";
import { initialState } from "./state/app.state";
import { reducers } from "./state/app.reducer";


@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    EffectsModule.forRoot([InternalEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot(reducers, {
      initialState
    }),
    SharedModule
  ],
  declarations: [
    TopBarComponent,
    SupportPageComponent,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

