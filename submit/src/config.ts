export interface Config {
    AWS: {
        bucket: {
            name: string,
            accessKeyId: string,
            secretAccessKey: string
        }
    },
    Google: {
        reCaptcha_secretKey: string
    }
}