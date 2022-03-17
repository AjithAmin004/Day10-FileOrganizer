//let input = process.argv;
//console.log(input);//it gives u whole array
//1st idx node path,1st idxpath to file. the real starts from position that is 2nd idx
//console.log(input[2]); //it gives you the first input

// let input2 = process.argv[2];  this reads only 2nd index argument
// console.log(input2)
let input = process.argv[2];
let fs = require('fs');
let path = require('path');

let extension = {
    audio:['.mp3'],
    video:['.mp4','.mkv'],
    image:['.png','.jpg','.jpeg','.gif'],
    document:['.doc','.xlsx','.pdf','.txt'],
    software:['.exe']
};

let isexists = fs.existsSync(input);
if(isexists){
     let files = fs.readdirSync(input);
    //  console.log(files)
    for(let i=0;i<files.length;i++){
        let ext = path.extname(files[i]);
        let bsName = path.basename(files[i]);
        let oFolder = giveExtension(ext);
        // console.log(ext,oFolder)
        let dir = path.join(input,oFolder);
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        moveFile(input,dir,bsName);



    }
}else{
    console.log("Please enter a valid path")
}

function giveExtension(ext){
     for(let key in extension){
         let extArr = extension[key];
         for(let i=0;i<extArr.length;i++){
                  if(ext==extArr[i]){
                      return key;
                  }
         }
     } 
  return 'other';
}
function moveFile(input,dir,fileName){
    let src = path.join(input,fileName);
        console.log(src)
        let dst = path.join(dir,fileName);
        fs.copyFileSync(src,dst);
}