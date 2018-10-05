export const config = {
    AWS: {
        bucket: {
            name: process.env.BUCKET_NAME,
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        }
    },
    Google: {
        reCaptcha_secretKey: process.env.RECAPTCHA_SECRETKEY
    }
}