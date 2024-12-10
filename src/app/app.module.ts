import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NewCollectionCtaComponent } from './components/new-collection-cta/new-collection-cta.component';
import { ProductsHighlightsComponent } from './components/products-highlights/products-highlights.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ProductsListService } from './services/products-list.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CallToActionComponent,
    CategoriesComponent,
    ProductsHighlightsComponent,
    NewCollectionCtaComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    FontAwesomeModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [ProductsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
