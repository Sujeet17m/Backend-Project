.gitkeep is to keep track of empty folder too

2 approach to connect database , one is to do all database in index.js file and run the command through that , second one is to keep it different folder named db and run the code from there 
second one is more industry standard and distributed so we gonna use 2nd one

mongoose hi db se connect karega
db se jab bhi connect krne ki koshish karoge toh problem aayegi hi ... toh try catch mein wrap karo or promises lo 
db is in always in another continent so async/await lagana hi padega

dotenv = as early as possible in ur application , import and configure dotenv:

after async await it returns promises

cors for setting under cross origin region 
app.use for middleware or configuration setting

cookie praser ki mein apne server se user ki browser se cookies access bhi kar pau aur aski cookies set bhi kar pau 
middleware - checkin

err,req,res,next

index : true => used in searching field better optimized

mongoose-aggregate-paginate-v2 => 

bcrypt => it helps to hash your password

jwt => json web token => bearer token (jo usko bear karta hai usko sahi manlata hai)ye token jiske bhi pass hai usko token bhejdunga like keys

pre hook => executed one after another , when each middlewares calls next

middleware - matlab jo bhi kaam karne se pehle mujhse milke jana
Cloudinary :
express-fileupload or multer for file uploading
fs:file system

multer : [multer github link](https://github.com/expressjs/multer)
