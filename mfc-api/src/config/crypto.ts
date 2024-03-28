
import * as crypto from 'crypto';
import { AES_CIPHER_ALGO, AES_KEY } from './constant.config';

export const encode = (text) => {
    try {
        if(!text){ return '';}
        text = typeof text !== 'string' ? String(text) : text; 
        const cipher = crypto.createCipheriv(AES_CIPHER_ALGO, AES_KEY, "");
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    } catch (error) {
        return null;
    }
};

export const decode = (text) => {
    try {
        if(!text){ return '';}
        text = typeof text !== 'string' ? String(text) : text;
        const decipher = crypto.createDecipheriv(AES_CIPHER_ALGO, AES_KEY, "");
        let decrypted = decipher.update(text, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    } catch (error) {
        return null;
    }
}