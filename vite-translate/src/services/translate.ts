import OpenAI from 'openai';
import { SUPPORTED_LANGUAGES } from '../constants';
import { FromLanguage, Language } from '../types.d';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
const openai = new OpenAI({ apiKey });

export async function translate ({
    fromLanguage,
    toLanguage,
    text
}: {
    fromLanguage: FromLanguage;
    toLanguage: Language;
    text: string;
}) {
    const prompt = [
        {
            role: 'system',
            text: 'You are a AI that translate text.' 
             + 'You receive a text from a user and translate it to another language.' + 
             'Do not answer, just translate the text. The original language is surrounded by '
        }
    ]
}