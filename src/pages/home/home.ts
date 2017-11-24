import { Component, ViewChild } from '@angular/core';
import {  IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TaskServiceProvider } from '../../providers/task-service/task-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,private taskProvider: TaskServiceProvider) {}

  ionViewDidEnter() {
    this.tasks = [];
    this.getAllTasks();
    console.log(this.tasks)
  }

  getAllTasks() {
    this.taskProvider.getAll()
      .then((result: any) => {
  
        for (var i = 0; i < result.length; i++) {
          var task = result[i];
          this.tasks.push(task);
        }

      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar os usuários. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  } 

}
