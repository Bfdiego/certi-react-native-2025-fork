import axios from "axios";

const getGeminiMessage = async (message: string) => {
    const response = await axios.post( 'https://hypotactic-sisterly-victor.ngrok-free.dev/api/gemini/basic-prompt', { prompt: message } );
    return response.data; 
}

export { getGeminiMessage };