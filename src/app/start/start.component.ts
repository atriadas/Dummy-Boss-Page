import { Component, OnInit } from '@angular/core';
import { Data2Service, HttpData} from '../data2.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  userArray:any[]=[]
  flag:number=0
  tid:number;
  userId:string;

  constructor( private dataService:Data2Service,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams
    .subscribe(params => {
      this.tid = params['tid'];
    });
    
    //console.log(this.route.snapshot.queryParamMap.get('tid'))

  }
  userSelected(id:string) //Selected User
{
  this.userId=id;
  console.log(this.userId)
}
   gotoManage(){
  
    this.router.navigate(['Manage'],{queryParams:{useruuid:this.userId}})
  }

  gotoSettings()
  {
    this.router.navigate(['Settings'],{queryParams:{tenantuuid:2}})

  }
  
  Manage(){ //TO GET ALL THE AVAILABLE USERS
    this.flag=1;
    this.dataService.getUsers(this.tid).subscribe(x => {
        

          for (const i of (x as any)) {
            this.userArray.push({
              Firstname: i.first_name,
              Lastname: i.last_name,
              UserId: i.user_uuid
            });
          }
    }
    )
    console.log(this.userArray)
  }

}
