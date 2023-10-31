const initPageConfig = {
    component: `
    <body>
    <img src="https://res.cloudinary.com/diroilukd/image/upload//c_thumb,w_258,h_426,g_auto/v1692669794/Untitled_design__1_-removebg-preview_mjpjah.png"
        id="iv2q" />
    <div class="background">
    <div class="background-element-1">
    </div>
    <div class="background-element-2">
    </div>
    <img src="https://res.cloudinary.com/diroilukd/image/upload/v1692670760/Untitled_design__3_-removebg-preview_1_vrhcyf.png"
        id="ij0k" />
    <div class="background-element-3">
    </div>
    <div class="background-element-4">
    </div>
    <div class="info-container">
        <div class="image-avatar">
    <img src="https://res.cloudinary.com/diroilukd/image/upload/v1692667017/grin_smile_culqhz.png" />
    </div>
    <div class="info-text">
        <div class="text-highlight">
            Hello I am
        </div>
    <div id="in5gm">SUYASH THAKUR
    </div>
    </div>
    </div>
    </div>
</body> 
    `,
    styles: `
    <style>
    * {
      box-sizing: border-box;
      }
      body {
      margin: 0;
      }
      body{
      margin-top:0px;
      margin-right:0px;
      margin-bottom:0px;
      margin-left:0px;
      }
      body{
      margin-top:0px;
      margin-right:0px;
      margin-bottom:0px;
      margin-left:0px;
      }
      body{
      margin-top:0px;
      margin-right:0px;
      margin-bottom:0px;
      margin-left:0px;
      padding-top:0px;
      padding-right:0px;
      padding-bottom:0px;
      padding-left:0px;
      }
      .background{
      background-image:initial;
      background-position-x:initial;
      background-position-y:initial;
      background-size:initial;
      background-repeat-x:initial;
      background-repeat-y:initial;
      background-attachment:initial;
      background-origin:initial;
      background-clip:initial;
      background-color:rgb(27, 72, 171);
      display:flex;
      align-items:center;
      justify-content:center;
      color:black;
      border-top-width:0px;
      border-right-width:0px;
      border-bottom-width:0px;
      border-left-width:0px;
      border-top-style:solid;
      border-right-style:solid;
      border-bottom-style:solid;
      border-left-style:solid;
      border-top-color:black;
      border-right-color:black;
      border-bottom-color:black;
      border-left-color:black;
      border-image-source:initial;
      border-image-slice:initial;
      border-image-width:initial;
      border-image-outset:initial;
      border-image-repeat:initial;
      width:100vw;
      height:100vh;
      }
      .background-element-1{
      position:absolute;
      top:0px;
      z-index:1;
      transform:rotate(60deg);
      animation: leaf-move 2s infinite;
      }
      .background-element-2{
      position:absolute;
      z-index:1;
      transform:rotate(-50deg);
      }
      .background-element-3{
      position:absolute;
      z-index:1;
      transform:rotate(80deg);
      }
      .background-element-4{
      position:absolute;
      z-index:1;
      transform:rotate(-80deg);
      }
      .info-container{
      display:flex;
      justify-content:center;
      align-items:center;
      }
      .image-avatar{
      display:flex;
      justify-content:center;
      align-items:center;
      background-image:radial-gradient(circle, rgb(238, 234, 174) 0%, rgb(177, 255, 233) 100%);
      background-position-x:initial;
      background-position-y:initial;
      background-size:initial;
      background-repeat-x:initial;
      background-repeat-y:initial;
      background-attachment:initial;
      background-origin:initial;
      background-clip:initial;
      background-color:initial;
      border-top-left-radius:50%;
      border-top-right-radius:50%;
      border-bottom-right-radius:50%;
      border-bottom-left-radius:50%;
      width:180px;
      height:180px;
      }
      .image-avatar > img{
      width:100%;
      height:100%;
      max-width:200px;
      max-height:200px;
      }
      .info-text{
      margin-left:20px;
      font-family:Poppins, sans-serif;
      display:flex;
      flex-direction:column;
      justify-content:center;
      margin-top:30px;
      }
      h1{
      background-image:linear-gradient(to right, rgb(255, 255, 255) 20%, rgba(251, 193, 45, 0.92) 30%, rgb(224, 174, 47) 70%, rgb(255, 255, 255) 80%);
      background-position-x:initial;
      background-position-y:initial;
      background-repeat-x:initial;
      background-repeat-y:initial;
      background-attachment:initial;
      background-origin:initial;
      background-color:initial;
      background-clip:initial;
      -webkit-text-fill-color:transparent;
      background-size:500%;
      animation-duration:5s;
      animation-timing-function:ease-in-out;
      animation-delay:0s;
      animation-iteration-count:infinite;
      animation-direction:alternate;
      animation-fill-mode:none;
      animation-play-state:running;
      animation-name:textShine;
      animation-timeline:auto;
      animation-range-start:normal;
      animation-range-end:normal;
      font-size:50px;
      }
      .text-highlight{
      background-image:initial;
      background-position-x:initial;
      background-position-y:initial;
      background-size:initial;
      background-repeat-x:initial;
      background-repeat-y:initial;
      background-attachment:initial;
      background-origin:initial;
      background-clip:initial;
      background-color:rgb(251, 192, 45);
      font-size:35px;
      font-weight:bold;
      color:rgb(0, 0, 0);
      text-align:center;
      padding-top:17px;
      padding-right:20px;
      padding-bottom:20px;
      padding-left:20px;
      }
      *{
      box-sizing:border-box;
      }
      #iv2q{
      width:10%;
      position:absolute;
      top:3px;
      transform:rotateZ(80deg);
      animation: leaf-move-2 2s infinite;
      }
      #ij0k{
      width:10%;
      position:absolute;
      right:10px;
      height:20%;
      top:0px;
      transition-duration:2s;
      transition-timing-function:ease;
      transition-delay:0s;
      transition-property:width;
      transform:rotateZ(-39deg);
      color:black;
      border:0 solid black;
      animation: leaf-move 3s infinite alternate;
      }
      #in5gm{
      padding-top:10px;
      padding-right:10px;
      padding-bottom:10px;
      padding-left:10px;
      font-family:Poppins;
      font-size:50px;
      font-weight:800;
      color:rgb(255, 255, 255);
      }
      @keyframes textShine{
      0%{
        background-position-x:0%;
        background-position-y:50%;
      }
      100%{
        background-position-x:100%;
        background-position-y:50%;
      }
    }
      @keyframes leaf-move {
        0% {
            transform: rotate(+10deg)
        }
        50% {
            transform: rotate(-10deg) 
        }
        100% {
            transform:rotate(+10deg) 
        }
      }

      @keyframes leaf-move-2 {
        0% {
            transform: rotate(+90deg)
        }
        50% {
            transform: rotate(+70deg) 
        }
        100% {
            transform:rotate(+90deg) 
        }
      }
    </style>
    `
};
export default initPageConfig;