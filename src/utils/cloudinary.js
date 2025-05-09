import {v2 as cloudinary} from "cloudinary"
import { log } from "console";
import fs from "fs"



    // Configuration
cloudinary.config({ 
    cloud_name: process.env.CLODINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        //upload the file on cloudinary
        const response = cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        })
        //file has been uploaded successfully
        console.log("file has been uploaded on cloudinary",(await response).url);
        return response;
        
        
    } catch (error) {
        fs.unlinkSync(localFilePath)//remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}


export{uploadOnCloudinary}