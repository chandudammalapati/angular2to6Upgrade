import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { headerComponent } from './header/header.component';
import { recipesComponent } from './recipes/recipes.component';
import { recipeListComponent } from './recipes/recipeList/recipeList.component';
import { recipeItemComponent } from './recipes/recipeList/recipeItem/recipeItem.component'
import { recipeDetailComponent } from './recipes/recipeDetail/recipeDetail.component';
import { shoppingListComponent } from './shoppingList/shoppingList.component';
import { ShopListEditComponent } from './shoppingList/shopListEdit/shopListEdit.component';
@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    recipesComponent,
    recipeListComponent,
    recipeDetailComponent,
    recipeItemComponent,
    shoppingListComponent,
    ShopListEditComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
