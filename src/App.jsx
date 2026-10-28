import { useState } from 'react'
import axios from 'axios'
import API_URL from './config'

export default function App() {
  const [topic, setTopic] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleResearch(e) {
    e.preventDefault()
    if (!topic.trim()) return
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const response = await axios.post(`${API_URL}/research`, { topic })
      setResult(response.data)
    } catch (err) {
      setError('Research failed. Make sure the backend is running.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto p-8">
        <div className="mb-12">
          <div className="text-blue-400 text-xs font-mono tracking-widest uppercase mb-4">AI Research Agent</div>
          <h1 className="text-4xl font-bold mb-2">Research anything.</h1>
          <p className="text-gray-400">Powered by real-time web search and LLM synthesis. Sources are cited.</p>
        </div>

        <form onSubmit={handleResearch} className="mb-8">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="e.g. Latest developments in AI agents 2026"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="flex-1 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={loading || !topic.trim()}
              className="bg-blue-500 hover:bg-blue-600 disabled:opacity-30 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              {loading ? 'Researching...' : 'Research →'}
            </button>
          </div>
        </form>

        {loading && (
          <div className="bg-gray-900 rounded-xl p-8 text-center">
            <p className="text-gray-400 mb-2">Searching the web and synthesizing findings...</p>
            <p className="text-gray-600 text-sm">This may take 20-30 seconds</p>
          </div>
        )}

        {error && <p className="text-red-400">{error}</p>}

        {result && (
          <div className="bg-gray-900 rounded-xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">{result.topic}</h2>
              <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">
                {result.message_count} agent steps
              </span>
            </div>
            <div className="prose prose-invert max-w-none">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm leading-relaxed font-sans">
                {result.report}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}