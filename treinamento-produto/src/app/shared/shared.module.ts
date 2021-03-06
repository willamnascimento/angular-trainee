import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

const baseModules = [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule,
                    
                    ];

const materialModules = [
                        MatDialogModule,
                        MatCardModule
                        ];

@NgModule({
    imports:[...baseModules, ...materialModules],
    providers: [],
    exports: [...baseModules, ...materialModules]
})
export class SharedModule {}