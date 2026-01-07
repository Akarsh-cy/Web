let camera_z=5;
let scale=100;
let angles=[0,0,0];
let w1=0;
let w2=0;
let w3=0;
const ctx=plot.getContext("2d");
console.log(plot);

function render(angle,array,edgeindex){
  ctx.fillStyle="white"
  ctx.fillRect(0,0,plot.width,plot.height);
//sin and cosine calc
  const sa=Math.sin(angle[0]);
  const ca=Math.cos(angle[0]);
  const sb=Math.sin(angle[1]);
  const cb=Math.cos(angle[1]);
  const sg=Math.sin(angle[2]);
  const cg=Math.cos(angle[2]);

//rotation logic
  const rotated=array.map(
  function(v){
    const x=(cg*cb)*v[0]+(cg*sb*sa-sg*ca)*v[1]+(cg*sb*ca+sg*sa)*v[2];
    const y=(sg*cb)*v[0]+(sg*sb*sa+cg*ca)*v[1]+(sg*sb*ca-cg*sa)*v[2];
    const z=(-sb)*v[0]+(cb*sa)*v[1]+(cb*ca)*v[2];
 return [x,y,z];
  }
  );//end of rotated


//project on screen 

const projected=rotated.map(

  function(v){
    let z=v[2]+camera_z;
    let x=v[0]/z;
    let y=v[1]/z;
   //conversion to canvas coordinate system
  x=scale*x+plot.width/2;
  y=scale*(-y)+plot.height/2;
  return [x,y];
  }
);//projected end

//draw on canvas

function draw(projected){
  ctx.beginPath();
  for(let i=0;i<edgeindex.length;++i){
    ctx.moveTo(projected[edgeindex[i][0]][0],projected[edgeindex[i][0]][1]);

    ctx.lineTo(projected[edgeindex[i][1]][0],projected[edgeindex[i][1]][1]);

}
ctx.strokeStyle="black";
ctx.lineWidth=2;
ctx.stroke();


 }//draw emd brace
draw();
}//render end
function update(dt){
  angles[0]+=w1*dt;
  angles[1]+=w2*dt;
  angles[2]+=w3*dt;
}

let lastTime = null;

function loop(timestamp) {
  if (lastTime === null) lastTime = timestamp;

  const dt = (timestamp - lastTime) / 1000; 
  lastTime = timestamp;
  update(dt);
  render(angles,vertices,edges);
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

const vertices = [
  [-1, -1, -1], // 0
  [ 1, -1, -1], // 1
  [ 1,  1, -1], // 2
  [-1,  1, -1], // 3
  [-1, -1,  1], // 4
  [ 1, -1,  1], // 5
  [ 1,  1,  1], // 6
  [-1,  1,  1]  // 7
];

const edges = [
  // bottom face
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],

  // top face
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 4],

  // vertical edges
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7]
];
