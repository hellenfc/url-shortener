import axios from "axios"

export function useShortener() {
  const onSubmit = async (url: string) => {
    try {
      const response = await axios.post("https://url-shortener-arne.onrender.com/api/shorten", { originalUrl: url })
      return response.data.shortUrl
    } catch (error) {
      console.error(error)
    }
  }

  const initialUrl = async () => {
    try {
      const response = await axios.get("https://url-shortener-arne.onrender.com/api/first")
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  return { onSubmit, initialUrl }
}
