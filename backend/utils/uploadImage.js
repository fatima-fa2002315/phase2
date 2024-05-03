// helpers/imageUploader.js

import fs from "fs";
import path from "path";

const imagesDir = path.join(process.cwd(), "../../images"); // Define the target image directory

export async function uploadImage(file) {
  try {
    if (!file) {
      throw new Error("No image file uploaded.");
    }
    console.log("files", file);
    let fileBuffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${new Date().getTime()}_${file.name}`; // Generate a unique filename
    const newPath = path.join(imagesDir, fileName);
    fs.writeFileSync(newPath, fileBuffer);
    const imageUrl = `../images/${fileName}`;
    return imageUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Image upload failed.");
  }
}
