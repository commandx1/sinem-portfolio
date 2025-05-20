import { ChangeEvent, FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsCredentials } from '@/lib/utils';
import { useToast } from './use-toast';

const useForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                emailjsCredentials.serviceId,
                emailjsCredentials.templateId,
                {
                    user_name: formData.name,
                    user_email: formData.email,
                    user_subject: formData.subject,
                    user_message: formData.message
                },
                emailjsCredentials.publicKey
            );

            toast({
                title: 'Mesaj Gönderildi',
                description: 'Mesajınız için teşekkürler! En kısa sürede size geri dönüş sağlayacağım.'
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error('Email error:', err);
        } finally {
            setLoading(false);
        }
    };

    return {
        handleChange,
        handleSubmit,
        formData,
        loading
    };
};

export default useForm;
