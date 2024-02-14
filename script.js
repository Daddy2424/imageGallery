let img = document.getElementById('image');
let previousBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

let imageArr = ['https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];


let count = 0;
img.src = imageArr[count];
nextBtn.addEventListener('click', ()=>{
  count++;
  if(count == 3){
    count = 0;
  }
  img.src = imageArr[count];
})

previousBtn.addEventListener('click', ()=>{
  count--;
  if(count == -1){
    count = 2;
  }
  img.src = imageArr[count];
})