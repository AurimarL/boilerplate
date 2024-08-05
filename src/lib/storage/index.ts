// lib/minioClient.ts
import env from '@/env';
import * as Minio from 'minio';
import { Readable } from 'stream'; // Import Readable from Node.js stream module

let storage: Minio.Client;

try {
    storage = new Minio.Client({
        endPoint: env.MINIO_ENDPOINT,
        port: Number(env.MINIO_PORT),
        useSSL: false,
        accessKey: env.MINIO_ACCESS_KEY,
        secretKey: env.MINIO_SECRET_KEY,
    });
} catch (error) {
    throw new Error("" + error);
}

interface UploadFileOptions {
    bucket: string;
    objectName: string;
    stream: Readable; // Use Node.js Readable stream
    size: number;
    metaData?: Record<string, string>; // Optional metadata
}

async function uploadFile({ bucket, objectName, stream, size, metaData }: UploadFileOptions): Promise<void> {
    // Check if the bucket exists
    const exists = await storage.bucketExists(bucket);
    if (!exists) {
        await storage.makeBucket(bucket, 'us-east-1');
        console.log('Bucket ' + bucket + ' created in "us-east-1".');
    }

    // Upload the file with putObject
    const uploadedObjectInfo = await storage.putObject(bucket, objectName, stream, size, metaData);
    console.log('File uploaded successfully:', uploadedObjectInfo);
}

async function createBucket() {
    const exists = await storage.bucketExists("teste");
    if (!exists) {
        await storage.makeBucket("teste", 'us-east-1');
        console.log('Bucket ' + "teste" + ' created in "us-east-1".');
    }
    else{
        console.log('Bucket exist');
    }
}

export { storage, uploadFile, createBucket };