
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../services/user/user.service';

import { Router } from '@angular/router';

imports: [ MatButtonModule ];
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
  
userdata = null;
imageData = null;
currentImageFilter = null;
  constructor(private user: UserService, private router: Router) {}    
  
    getProtectedData() {
        this.user.getProtectedData().subscribe((data: any) => {this.userdata=data.user;console.log(data)});
        this.user.getImages().subscribe((data: any) => {this.imageData = data;console.log(data)});

    }
    deletePost(image_id) {
      let payload = image_id;
      console.log(payload)
      this.user.deletePost(payload).subscribe((data: any) => {this.getProtectedData(); console.log(data)});
  }

  createVideo(){
    let videoObj = {
      "title":'Test1',
      "themeId":'599ec30b27855975ab36a1b9',
      scenes:[

      ]
    }

    for (let i of this.imageData.images){
        videoObj.scenes.push({"text":i.desc,"image":i.url})
    }
console.log(videoObj)

    this.user.createVideo(videoObj).subscribe((data: any) => { console.log(data)})
  }
  
  filterImageData(){
    if(this.currentImageFilter != null){
      return this.imageData.images.filter(a => a.skills.includes(this.currentImageFilter)).slice().reverse();
    } else return this.imageData.images.slice().reverse();

  }
    ngOnInit() {
        this.getProtectedData();
    }

logout() {
  localStorage.removeItem('Token');
  this.router.navigate([ '/login' ]);
}
}
