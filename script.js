    const throttleFunction=(func, delay)=>{
     
      let prev = 0;
      return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();
     
        // Logging the difference between previously
        // called and current called timings
        console.log(now-prev, delay);
         
        // If difference is greater than delay call
        // the function again.
        if(now - prev> delay){
          prev = now;
     
          // "..." is the spread operator here
          // returning the function with the
          // array of arguments
          return func(...args); 
        }
      }
    }
    document.querySelector("#main")
    .addEventListener("mousemove", throttleFunction((dets)=>{
    var div = document.createElement("div");
    div.classList.add("imagediv");
    document.body.appendChild(div);

    div.style.top = dets.clientY + 'px';
    div.style.left = dets.clientX + 'px';
    var img = document.createElement('img');
    img.setAttribute("src",'https://cdn.pixabay.com/photo/2023/09/19/12/34/dog-8262506_1280.jpg');
    div.appendChild(img);

    gsap.to(img,{
        y:0,
        ease:Bounce,
        duration:0.35
    });
    gsap.to(img,{
        y:"100%",
        ease:Bounce,
        delay:2,
        duration:0.35
    });

    setTimeout(() => {
        div.remove();
    }, 2000);
    }, 500));