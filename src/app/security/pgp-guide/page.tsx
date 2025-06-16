import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PGPGuide() {
  const softwareOptions = [
    {
      name: "GPG4Win",
      platform: "Windows",
      description: "Full-featured encryption suite with GUI",
      url: "https://www.gpg4win.org/"
    },
    {
      name: "GPG Suite",
      platform: "macOS",
      description: "Complete GPG toolkit for macOS",
      url: "https://gpgtools.org/"
    },
    {
      name: "GnuPG",
      platform: "Linux",
      description: "Command-line encryption tools",
      url: "https://gnupg.org/"
    }
  ]

  const basicSteps = [
    {
      title: "Install PGP Software",
      description: "Choose and install a PGP software suite appropriate for your operating system."
    },
    {
      title: "Download Our Public Key",
      description: "Get our PGP public key from our security page."
    },
    {
      title: "Import the Key",
      description: "Import our public key into your PGP software."
    },
    {
      title: "Verify the Key",
      description: "Check the key fingerprint to ensure authenticity."
    },
    {
      title: "Encrypt Your Message",
      description: "Use our public key to encrypt your communication."
    }
  ]

  const commonCommands = [
    {
      action: "Import a key",
      command: "gpg --import key.asc",
      description: "Import a public key file"
    },
    {
      action: "Encrypt a file",
      command: "gpg -e -r recipient@email.com file.txt",
      description: "Encrypt a file for a specific recipient"
    },
    {
      action: "Verify fingerprint",
      command: "gpg --fingerprint KEY_ID",
      description: "Display the fingerprint of a key"
    },
    {
      action: "List keys",
      command: "gpg --list-keys",
      description: "Show all keys in your keyring"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">vPan</span>
              <span className="text-sm font-medium text-blue-400">VPN</span>
            </Link>
            <nav className="flex items-center space-x-4">
              <Link href="/security/pgp-key" className="text-gray-400 hover:text-white">
                PGP Key
              </Link>
              <Link href="/security" className="text-gray-400 hover:text-white">
                Security
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">PGP Usage Guide</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Learn how to use PGP encryption for secure communication with our team.
          </p>
        </div>

        {/* Software Options */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">PGP Software Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softwareOptions.map((software, index) => (
              <Card key={index} className="p-6 bg-gray-800/50 border-gray-700">
                <h3 className="text-xl font-semibold mb-2">{software.name}</h3>
                <p className="text-blue-400 text-sm mb-4">{software.platform}</p>
                <p className="text-gray-300 mb-6">{software.description}</p>
                <a 
                  href={software.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        {/* Basic Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {basicSteps.map((step, index) => (
              <Card key={index} className="p-6 bg-gray-800/50 border-gray-700">
                <div className="text-3xl font-bold text-blue-400 mb-4">{index + 1}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Common Commands */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Common PGP Commands</h2>
          <Card className="bg-gray-800/50 border-gray-700">
            <div className="p-6 space-y-6">
              {commonCommands.map((cmd, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-semibold">{cmd.action}</h3>
                  <div className="bg-gray-700/30 p-3 rounded-lg font-mono text-sm">
                    {cmd.command}
                  </div>
                  <p className="text-gray-400 text-sm">{cmd.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Best Practices */}
        <Card className="p-8 bg-gray-800/50 border-gray-700 mb-16">
          <h2 className="text-2xl font-bold mb-6">Best Practices</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Management</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Keep your private key secure and never share it</li>
                <li>Use a strong passphrase to protect your private key</li>
                <li>Regularly backup your keys</li>
                <li>Verify key fingerprints before use</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Communication</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Always encrypt sensitive information</li>
                <li>Verify the recipient's key authenticity</li>
                <li>Use secure channels to share public keys</li>
                <li>Keep your PGP software updated</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Troubleshooting */}
        <Card className="p-8 bg-gray-800/50 border-gray-700">
          <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>
          <div className="space-y-6">
            <p className="text-gray-300">
              Having issues with PGP encryption? Here are some common solutions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Key Import Issues</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Verify the key file format</li>
                  <li>Check file permissions</li>
                  <li>Try importing via command line</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Encryption Problems</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Ensure you have the correct public key</li>
                  <li>Verify the key hasn't expired</li>
                  <li>Check for proper key trust levels</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Support Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            Still need help with PGP encryption?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                Contact Support
              </Button>
            </Link>
            <Link href="/security/pgp-key">
              <Button variant="outline" className="w-full sm:w-auto">
                View Our PGP Key
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
