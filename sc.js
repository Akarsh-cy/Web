const con=box.getContext("2d");
for(let i=0;i<800;i++){
con.fillRect(i,350,1,1);
}
for(let i=0;i<400;i++){
con.fillRect(50,i,1,1);
}

function arrow(ctx, x, y, direction = 'top', size = 10, color = 'black') {
    ctx.save();
    ctx.fillStyle = color;
    
    if (direction === 'top') {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - size, y + size);
        ctx.lineTo(x + size, y + size);
        ctx.closePath();
        ctx.fill();
    } 
    else if (direction === 'bottom') {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - size, y - size);
        ctx.lineTo(x + size, y - size);
        ctx.closePath();
        ctx.fill();
    }
    else if (direction === 'right') {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - size, y - size);
        ctx.lineTo(x - size, y + size);
        ctx.closePath();
        ctx.fill();
    }
    else if (direction === 'left') {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y - size);
        ctx.lineTo(x + size, y + size);
        ctx.closePath();
        ctx.fill();
    }
    
    ctx.restore();
}

 arrow(con,50,0);
 arrow(con,0,350,"left"); 
 arrow(con,800,350,"right"); 
 arrow(con,50,400,"bottom");


function strip(x=51,p=350,val=100,max=100){
z=325*(val/max);
con.fillStyle="gold";
con.fillRect(x,p,10,-z);
con.strokeStyle="black";
con.lineWidth=1;
con.strokeRect(x,p,10,-z);
}


//max with 150 
function draw(arr){
  const max=Math.max(...arr);
  let base=51;
  for(let i=0;i<arr.length;i++){
  strip(base+(i)*10,350,arr[i],max);
  }
}

let array=[1,2,3,4,5,6];
draw(array);

console.log(box);
