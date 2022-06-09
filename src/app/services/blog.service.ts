import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public http: HttpClient) { }
  getPost() {
    let url = "https://blogpost-4852e-default-rtdb.firebaseio.com/";
    return this.http.get(url)
  }
  createPost(payload: any) 
  {
    let url = "https://jsonplaceholder.typicode.com/posts";
    return this.http.post(url, JSON.stringify(payload))
  }
  updatePost(postId: String, payload: any) 
  {
    let url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    return this.http.patch(url, JSON.stringify(payload))
  }
  deletePost(post: any) {
    let url = `https://jsonplaceholder.typicode.com/posts/$(post.id)`;
    return this.http.delete(url)
  }
}
