'use client'
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const textAreaRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!input && textAreaRef.current) {
      textAreaRef.current.style.height = '52px';
      setIsExpanded(false);
    }
  }, [input]);

  const handleInput = (e) => {
    setInput(e.target.value);
    const textarea = e.target;
    textarea.style.height = "auto";
    const newHeight = Math.min(textarea.scrollHeight, 100);
    textarea.style.height = `${newHeight}px`;
    setIsExpanded(newHeight > 30);
    textarea.style.overflowY = newHeight === 100 ? "auto" : "hidden";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    const currentInput = input;
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Reset textarea height
    if (textAreaRef.current) {
      textAreaRef.current.style.height = '52px';
      setIsExpanded(false);
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      // Create assistant message placeholder
      const assistantMessageId = Date.now();
      setMessages(prev => [...prev, {
        id: assistantMessageId,
        role: 'assistant',
        content: '',
        timestamp: new Date()
      }]);

      // Read the stream
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedContent = '';

      while (true) {
        const { done, value } = await reader.read();
        
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.trim()) {
            try {
              // Parse the streamed data format: "0:"content""
              if (line.startsWith('0:')) {
                const jsonStr = line.slice(2);
                const content = JSON.parse(jsonStr);
                accumulatedContent += content;
                
                // Update the assistant message with accumulated content
                setMessages(prev => prev.map(msg => 
                  msg.id === assistantMessageId
                    ? { ...msg, content: accumulatedContent }
                    : msg
                ));
              }
            } catch (e) {
              // If parsing fails, treat the whole line as content
              accumulatedContent += line;
              setMessages(prev => prev.map(msg => 
                msg.id === assistantMessageId
                  ? { ...msg, content: accumulatedContent }
                  : msg
              ));
            }
          }
        }
      }

    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I apologize, but I'm having trouble responding right now. Please try again.",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button - Positioned on the left side */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 left-6 z-40 p-3 dynamic-rounded dynamic-gradient text-white shadow-lg hover:shadow-xl transition-all"
          >
            <MessageCircle className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window - Positioned on the left side */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 left-6 z-50 w-[90vw] max-w-[380px] h-[500px] max-h-[80vh] bg-white dark:bg-gray-900 dynamic-rounded shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <h3 className="font-semibold">Chat with Hope&apos;s AI</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1 rounded transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 pt-4 pb-16 space-y-4">
              {messages.length === 0 && !isLoading ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center h-full"
                >
                  <div className="text-center px-6">
                    <motion.h3
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-lg font-semibold text-gray-900 dark:text-white mb-2"
                    >
                      Hi! I&apos;m Hope&apos;s AI assistant
                    </motion.h3>
                    <motion.p
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      Ask me anything about her experience, projects, or skills!
                    </motion.p>
                  </div>
                </motion.div>
              ) : (
                <>
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id || index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                          message.role === 'user'
                            ? 'dynamic-gradient text-white'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        {message.content && (
                          <span className="text-xs opacity-70 mt-1 block">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && messages[messages.length - 1]?.role === 'user' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-2xl">
                        <Loader2 className="w-5 h-5 animate-spin text-gray-600 dark:text-gray-400" />
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className={`dark:border-none border border-1 flex items-end absolute lg:bottom-2 bottom-1.5 left-[5%] bg-white dark:bg-gray-800 w-[90%] px-4 py-1 min-h-[50px] transition-all duration-300 ${isExpanded ? "rounded-2xl" : "rounded-full"}`}>
              <textarea
                ref={textAreaRef}
                value={input}
                onChange={handleInput}
                placeholder="Type your message here..."
                className="pl-2 lg:mr-5 mr-2 outline-none w-full resize-none bg-transparent max-h-[180px] overflow-y-hidden py-3 dark:text-white"
                rows={1}
                disabled={isLoading}
              />

              <button 
                type="submit" 
                className={`rounded-full dynamic-gradient w-10 h-10 flex items-center justify-center shrink-0 ${isExpanded ? "" : "my-auto"} ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin text-white dark:text-black" />
                ) : (
                  <Send className="w-6 h-6 text-white dark:text-black" />
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;