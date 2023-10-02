let container = document.querySelector('.container');
let flag = true;
for(let i=0;i<8;i++){
  let row = document.createElement('div');
  row.classList.add('flex-row');
  for(let j=0;j<8;j++){
    let cell = document.createElement('div');
    cell.classList.add('box');
    if(flag)
    cell.classList.add('box-black');
    flag^=true;
    cell.setAttribute('cellNo',(i)*8+j);
    row.appendChild(cell);
  }
  flag^=true;
  container.appendChild(row);
}

let boxes = document.querySelectorAll('.box');
boxes.forEach(box=>{
  box.style.background = 'blue';
  box.addEventListener('click',(e)=>{
    boxes.forEach(bo=>{
      bo.style.background = '';
    })
    let cellNo = parseInt(e.target.getAttribute('cellNo'));
    let row = parseInt(cellNo/8);
    let col = cellNo%8;
    let i = row;
    let j = col; 
    
    while(i>=0 && j>=0) {
      console.log(i,j,(i-1)*8+j-1,cellNo);
      boxes[(i)*8+j].style.background = 'blue';
      i--;
      j--;
    }
    i = row;
    j = col; 
    while(i<=7&&j<=7){
      console.log(i,j,(i-1)*8+j-1,cellNo);
      boxes[(i)*8+j].style.background = 'blue';
      i++;
      j++;
    }
    i = row;
    j = col; 
    while(i>=0&&j<=7){
      console.log(i,j,(i-1)*8+j-1,cellNo);
      boxes[(i)*8+j].style.background = 'blue';
      i--;
      j++;
    }
    i = row;
    j = col; 
    while(i<=7&&j>=0){
      console.log(i,j,(i-1)*8+j-1,cellNo);
      boxes[(i)*8+j].style.background = 'blue';
      i++;
      j--;
    }
    // box.style.background = 'blue';
  })
}) 