/**
 * 📱 PHONE TO THE BACKEND
 * All the ways we talk to the server:
 * - "Get me user data!"
 * - "Save this new post!"
 * (Like pre-saved phone numbers)
 */

// This file contains functions to interact with the backend API
export const fetchHello = async () => {
  const response = await fetch('/api/hello');
  return await response.json();
};