import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  datalist: Array<any>;
  title: any;
  postform: FormGroup;



  constructor(public http: HttpClient, private formBuilder: FormBuilder,private val:BlogService,private activeroute:ActivatedRoute) {
    this.postform = this.formBuilder.group({
      title: new FormControl(''),
      body: new FormControl(''),
      id: new FormControl(''),
      userid: new FormControl('1')

    })
    this.datalist = [];
  }
  ngOnInit(): void {
    this.datalist=this.activeroute.snapshot.data['data'];
    
  }
  onSubmit() {
    let payload = this.postform.value;
    if (payload.id) {
      this.updatePost(payload.id,payload)


    } else {
      this.createPost(payload);

    }

  }

  
  getPosts() {
    
     this.val.getPost().subscribe((res: any) => {
       console.log(res);
       this.datalist = res;
     })

  }

  createPost(payload: any) {
    this.val.createPost(payload).subscribe((res: any) => {
      payload.id = res.id
      this.datalist.unshift(payload)
      this.postform.reset()
    });
  }

  updatePost(postId: String, payload: any) 
  {
    this.val.updatePost(postId,payload).subscribe((res: any) => {
      let data=this.datalist.find(o=>o.id===postId)
      data.title=payload.title;
      data.body=payload.body
    
      this.postform.reset();

    });
  }
  deletePost(post: any) {
    this.val.deletePost(post).subscribe((res: any) => {
      console.log(res)
      let index = this.datalist.indexOf(post);
      this.datalist.splice(index, 1)
    }, (error: any) => {
      console.log("Error", error);
    });
    console.log("I am deletated")

  }
  editPost(data: any) 
  {
    this.postform.get("title")?.setValue(data.title);
    this.postform.get("body")?.setValue(data.body);
    this.postform.get("id")?.setValue(data.id);
    this.postform.get("userid")?.setValue(data.userid);

  }


}