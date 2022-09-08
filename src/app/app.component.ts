import { Component, VERSION } from '@angular/core';
import { BehaviorSubject, map, of, Subscription } from 'rxjs';
import { filter, delay } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  public YtVideo = of([1, 2, 3, 4, 5]);

  public video: number = 1;
  public tikTok = new BehaviorSubject(this.video);

  public tweetNumber: number = 1;
  public tweet = new BehaviorSubject("Tweet!: " + this.tweetNumber);

  public subscriptionA: Subscription;
  public subscriptionB: Subscription;
  public subscriptionC: Subscription;

  public subscriptionTweeter: Subscription;

  constructor() {

    //Person A
    this.YtVideo.pipe(
      map(data =>data.join("-"))
      //More operators...
      //More operators...
      ).subscribe(video => console.log("Video of A person" + video))

       //Person b
    this.YtVideo.pipe(
      filter((num: any) => num[3]%2 == 0),
      map(video => video.join("*"))
      //More operators...
      //More operators...
      ).subscribe(video => console.log("Video of B person" + video))

       //Person c
    this.YtVideo.pipe(
      //More operators...
      //More operators...
      ).subscribe(video => console.log("Video of C person" + video))

      this.subscriptionA = this.tikTok.pipe(
        filter(tiktok => tiktok%2 ===0)
      ).subscribe(
        tikTokVideo => console.log("TikTok of A person: " + tikTokVideo))


      this.subscriptionB = this.tikTok.pipe(
        delay(1500)
      ).subscribe(
        tikTokVideo => console.log("TikTok of B person: " + tikTokVideo))


      this.subscriptionC = this.tikTok.subscribe(
        tikTokVideo => console.log("TikTok of C person: " + tikTokVideo))
        
      this.subscriptionTweeter = this.tweet.subscribe(tweet => console.log("New Tweet: "  +tweet))

  }


  public addVideo() {
    console.log("Adding YT video")
  }

  public addTiktok() {
    console.log("Adding TikTok")
    this.tikTok.next(this.video ++);
  }

  public addTuit() {
    console.log("Adding tweet")
    this.tweet.next("Tweet: " + this.tweetNumber ++)
    
  }

  public unSuscribePerson3() {
    console.log("Unsuscribed")
    this.subscriptionC.unsubscribe();
    
  }
}
