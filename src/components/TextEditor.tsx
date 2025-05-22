import React, { useState, useRef, useEffect } from 'react'
import { Loader2 } from 'lucide-react'
import { useCredits } from '../context/CreditContext'

export function TextEditor() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [splitPosition, setSplitPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const startSplitRef = useRef(0)
  const { useCredits } = useCredits();

  const processText = async () => {
    if (!inputText.trim()) return
    
    setIsProcessing(true)
    try {
      useCredits();
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setOutputText("This is where the processed text will appear. Replace this with actual API integration.")
    } catch (error) {
      console.error('Error processing text:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true
    startXRef.current = e.clientX
    startSplitRef.current = splitPosition
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const deltaX = e.clientX - startXRef.current
    const deltaPercentage = (deltaX / containerRect.width) * 100
    const newPosition = startSplitRef.current + deltaPercentage

    const limitedPosition = Math.min(Math.max(newPosition, 30), 70)
    setSplitPosition(limitedPosition)
  }

  const handleMouseUp = () => {
    isDraggingRef.current = false
    document.body.style.cursor = ''
    document.body.style.userSelect = ''
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="flex w-11/12 max-w-7xl mx-auto bg-white rounded-lg shadow-lg relative overflow-hidden"
    >
      <div 
        className="flex-shrink-0 relative"
        style={{ width: `${splitPosition}%` }}
      >
        <textarea
          className="w-full h-[calc(100vh-280px)] p-6 focus:outline-none focus:ring-0 resize-none"
          placeholder="To Humanize text, enter or paste it here and press 'Humanize'"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          onClick={processText}
          disabled={isProcessing || !inputText.trim()}
          className="absolute bottom-4 right-4 flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isProcessing && <Loader2 className="w-5 h-5 animate-spin" />}
          Humanize
        </button>
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-gray-200 cursor-col-resize hover:bg-blue-500 transition-colors active:bg-blue-600"
        style={{ left: `${splitPosition}%` }}
        onMouseDown={handleMouseDown}
      />

      <div
        className="flex-shrink-0"
        style={{ width: `${100 - splitPosition}%` }}
      >
        <textarea
          className="w-full h-[calc(100vh-280px)] p-6 bg-gray-50 focus:outline-none focus:ring-0 resize-none"
          placeholder="Humanized text will appear here..."
          value={outputText}
          readOnly
        />
      </div>
    </div>
  )
}