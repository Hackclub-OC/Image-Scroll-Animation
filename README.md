# Image Scroll Animation. 
This is an animation created with the experimental features of CSS along with JavaScript. I have created it using Nextjs but you can also do it just using vanilla javascript. 

--- 

The Size or the scale of the image increases as the image comes into the view and decreases as soon as it goes out of the view, you can use it for various things like your portfolio with the images of work you have done or you want to show image reviews. 

The horizontal image view is created using various react and you can also customize it with the following properties. 

```js
  const imageWidth = 60 //width of the image
  const imageGap = 10 // gap between images
  const startEndPadding = 15 //padding left and right of the images
  const containerWidth = totalImages * (imageWidth + imageGap) + 1.5 * startEndPadding // total horizontal width

<div className="relative h-[550vh]"> {/* select height with ratio to the speed you want if you select more
 height horizontal scroll will take more time and vice versa */}

<div className="sticky top-28 left-5 h-[calc(100vh-6rem)] overflow-hidden"> {/* top value for distance
 from top and the height here is height of the image */}
```

Hosted at => https://isa.theme-verse.com and https://isa.oneui.xyz
