import { Component } from '@angular/core';
import { Category } from '../category';
import {MatButtonModule} from '@angular/material/button';

import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  @Output() selectCategoryEmitter = new EventEmitter<string>();

   selectedCategory: string;

   listOfCategories: Category[] = [
    {
      id: '1',
      name: 'Course'
    },
    {
      id: '2',
      name: 'General'
    },
    { 
      id: '3',
      name: 'Laboratory'
    }
  ];

  selectCategory(selectedCategory: string)
  {
    this.selectedCategory = selectedCategory;
    this.emitSelectedCategory();
  }

  emitSelectedCategory()
  {
    this.selectCategoryEmitter.emit(this.selectedCategory);
  }

  resetFilter()
  {
    this.selectedCategory = undefined;
    this.emitSelectedCategory();
  }
}