import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes =[
  {
   path: "",
   component: LayoutComponent,
   children: [
     {
       path: "",redirectTo: "students", pathMatch: "prefix",
     },
     {
       path: "manage/students",
       loadChildren:()=>import('./students/students.module').then(mod=>mod.StudentsModule),
     },
     {
     path: "manage/teachers",
       loadChildren:()=>import('./teachers/teacher.module').then(mod=>mod.TeacherModule),
     },
     {
       path: "manage/dashboard",
        loadChildren:()=>import('./dashboard/dashboard.module').then(mod=>mod.DashboardModule),
       },
       {
        path: "manage/user-management",
         loadChildren:()=>import('./user-management/user-management.module').then(mod=>mod.UserManagementModule),
        },
         
   ]
  }
 ];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
