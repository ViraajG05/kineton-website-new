'use client'

import { useState } from 'react'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    designation: '',
    systemType: '',
    challenges: '',
    technicalFocus: [] as string[],
    interest: [] as string[]
  })

  const technicalFocusOptions = [
    'Embedded / edge AI deployment',
    'Distributed AI orchestration',
    'Runtime performance optimization',
    'Real-time robotics / control systems',
    'Power or thermal constraints',
    'ML model acceleration',
    'Compute infrastructure for autonomy'
  ]

  const interestOptions = [
    'Licensing an efficient AI runtime (Fabric)',
    'Licensing AI chip or IP core (Veo)',
    'Exploring early-access or technical collaboration',
    'Seeking a commercial quote / enterprise pricing',
    'General exploration / updates'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (field: 'technicalFocus' | 'interest', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add API call here
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">FILL IN THE DETAILS</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              1. Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              2. Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Enter your email address"
            />
          </div>

          {/* Company/Organisation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              3. Company/Organisation
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Enter your company or organisation"
            />
          </div>

          {/* Designation/Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              4. Designation/Role
            </label>
            <input
              type="text"
              value={formData.designation}
              onChange={(e) => handleInputChange('designation', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Enter your designation or role"
            />
          </div>

          {/* System Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              5. What type of systems are you building, managing, or deploying?
            </label>
            <textarea
              value={formData.systemType}
              onChange={(e) => handleInputChange('systemType', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              rows={3}
              placeholder="e.g., autonomous robots, drones, edge AI devices, AI workloads on on-prem clusters, etc."
            />
          </div>

          {/* Challenges */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              6. What are your main challenges with current AI infrastructure?
            </label>
            <textarea
              value={formData.challenges}
              onChange={(e) => handleInputChange('challenges', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              rows={3}
              placeholder="e.g., runtime inefficiency, orchestration complexity, latency, scaling, memory limits, edge deployment issues"
            />
          </div>

          {/* Technical Focus */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              7. What is your current technical focus? (multiple choice – select all that apply)
            </label>
            <div className="space-y-2">
              {technicalFocusOptions.map((option) => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.technicalFocus.includes(option)}
                    onChange={() => handleCheckboxChange('technicalFocus', option)}
                    className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Interest */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              8. What best describes your interest in Kineton? (multiple choice – select all that apply)
            </label>
            <div className="space-y-2">
              {interestOptions.map((option) => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.interest.includes(option)}
                    onChange={() => handleCheckboxChange('interest', option)}
                    className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Submit</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
