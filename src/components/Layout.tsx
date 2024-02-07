import { Button, Input, Tooltip, Link } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboard } from "@fortawesome/free-solid-svg-icons"
import { useShortener } from "../api/useShortener"
import { useEffect, useState } from "react"

export default function Component() {
  const [longUrl, setLongUrl] = useState<string>("")
  const [shortenedUrl, setShortenedUrl] = useState<string>("")
  const { onSubmit, initialUrl } = useShortener()

  useEffect(() => {
    const setup = async () => {
      const response = await initialUrl()
      setShortenedUrl(response.shortUrl)
      setLongUrl(response.originalUrl)
    }
    setup()
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl)
  }

  const shortenURL = async () => {
    const response = await onSubmit(longUrl)
    setShortenedUrl(response)
  }

  return (
    <div className="dark flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 animate-gradient-x">
      <div className="max-w-lg w-full space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white">URL Shortener</h1>
          <p className="text-gray-200">Enter your long URL below to generate a shortened URL</p>
        </div>
        <div className="space-y-2">
          <Input className=" text-white placeholder-gray-500" placeholder="Enter your long URL" type="url" value={longUrl} onChange={
            (e) => setLongUrl(e.target.value)
          } />
          <Button className="bg-green-600 text-white hover:bg-green-500" type="submit" onClick={shortenURL} >
            Shorten
          </Button>
        </div>
        <div className="space-y-2">
          <p className="text-gray-200">Your shortened URL:</p>
          <div className="flex items-center space-x-2">
          <Link
            isExternal
            href={shortenedUrl}
          >
            {shortenedUrl}
          </Link>
            <Tooltip showArrow={true} content="Copy to clipboard" placement="right" color="success" >
              <Button className="text-green-600 hover:text-green-500 border-none p-0 min-w-12"  onClick={copyToClipboard}>
              <FontAwesomeIcon icon={faClipboard}  className="h-4 w-4 text-white"/>           
                <span className="sr-only">Copy to clipboard</span>
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}
