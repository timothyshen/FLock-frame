import axios from "axios";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config({ path: "./.env" }); // Make sure the path is correct

async function main(prompt: string, modelName: string) {
  console.log("Prompt:", prompt);
  console.log("Model:", process.env.MODEL_NAME);

  try {
    // Construct the request payload
    const payload = {
      question: prompt,
      chat_history: [],
      knowledge_source_id: modelName,
    };

    // Set the headers
    const endpoint = process.env.ENDPOINT; // Ensure endpoint is defined
    if (!endpoint) {
      throw new Error("Endpoint is not defined in the environment variables.");
    }

    const headers = {
      "x-api-key": process.env.FLOCK_API_KEY, // Ensure API key is set in .env
    };

    // Send POST request using axios
    const response = await axios.post(
      `${endpoint}/chat/conversational_rag_chat`,
      payload,
      {
        headers,
      }
    );

    // Output the response data
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export default main;
