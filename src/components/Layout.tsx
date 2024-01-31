import {Button, Input} from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboard } from "@fortawesome/free-solid-svg-icons"

export default function Component() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("https://short.url")
  }
  return (
    <div className="dark flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 animate-gradient-x">
      <div className="max-w-md w-full space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white">URL Shortener</h1>
          <p className="text-gray-200">Enter your long URL below to generate a shortened URL</p>
        </div>
        <div className="space-y-2">
          <Input className=" text-white placeholder-gray-500" placeholder="Enter your long URL" type="url" />
          <Button className="bg-green-600 text-white hover:bg-green-500" type="submit">
            Shorten
          </Button>
        </div>
        <div className="space-y-2">
          <p className="text-gray-200">Your shortened URL:</p>
          <div className="flex items-center space-x-2">
            <Input className=" text-white" readOnly value="https://short.url" />
            <Button className="text-green-600 hover:text-green-500" variant="ghost" onClick={copyToClipboard}>
            <FontAwesomeIcon icon={faClipboard}  className="h-4 w-4 text-white"/>           
              <span className="sr-only">Copy to clipboard</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
