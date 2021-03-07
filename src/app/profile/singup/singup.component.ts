import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
  userForm: FormGroup;
  constructor( 
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private actRoute: ActivatedRoute,
    private userApi: AuthService,) {
      var id = this.actRoute.snapshot.paramMap.get('id');
      this.userApi.getUser().subscribe(data => {
        console.log(data)
        this.userForm = this.fb.group({
          Email: [data.Email],
          Password: [data.Password],
          FirstName: [data.FirstName]
         
        })      
    })
     }
   /* Reactive hotel form */
   updateUserForm() {
    this.userForm = this.fb.group({
      FirstName: ['', [Validators.required]],
      Email: [''],
      Password: ['']
         
    })
  }
    
  ngOnInit(): void {
    this.updateUserForm();
  }

  SubmitUserForm() {
    if (window.confirm('Are you sure you want to update?')) {
      console.log(this.userForm.value.FirstName)
      this.userApi.updateInfo(this.userForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/'))
      });
    }
  }



}
