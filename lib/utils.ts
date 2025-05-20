import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface IEmailjsCredentials {
    serviceId: string;
    templateId: string;
    publicKey: string;
}

export const emailjsCredentials: IEmailjsCredentials = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
};
