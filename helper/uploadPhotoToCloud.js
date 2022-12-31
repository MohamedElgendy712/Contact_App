const cloudinary = require('cloudinary').v2
const fs = require('fs')

cloudinary.config({
    cloud_name: "defkl7fpy",
    api_key : "121695375852289",
    api_secret : "mfoAg5HZ2JZg-BI21xaEAfjw1f0"
})

module.exports = async (localPath , imageName) =>{
    var mainFolderName = "main"
    var filePathOnCloudinary = mainFolderName + "/" + imageName 

    return cloudinary.uploader.upload(localPath , {"public_id" : filePathOnCloudinary})
    .then((result) =>{
        fs.unlinkSync(localPath)

        return result.url
    })
    .catch(err =>{
        fs.unlinkSync(localPath)

        return {msg : "fail"}
    })
}