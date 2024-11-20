import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { FaCalendarAlt, FaChevronDown, FaSearch, FaTimes } from 'react-icons/fa'
import "react-datepicker/dist/react-datepicker.css"

const procedureCodes = [
  { code: '99201', description: '99201', price: '$259.36', inactive: false },
  { code: '99202', description: 'OFFICE OUTPT NEW 20 MINUTES', price: '$4,500.00', inactive: false },
  { code: '90472', description: '90472', price: '$0.00', inactive: false },
  { code: '00124', description: 'ANES EXTERNAL MIDDLE & INNER EAR', price: '$0.00', inactive: true },
  { code: '99203', description: 'OFFICE VISIT NEW PATIENT', price: '$4,000.00', inactive: false },
  { code: '0179T', description: '64 LEAD ECG W TRACING & GRAPHICS', price: '$925.00', inactive: false },
  { code: '99306', description: '1ST NF CARE PR D E/M HI SEVERITY', price: '$3,382.00', inactive: false },
]

function ProcedureCodePopup({ isOpen, onClose, onSelectCodes }) {
  const [activeTab, setActiveTab] = useState('single')
  const [searchQuery, setSearchQuery] = useState('')
  const [includeInactive, setIncludeInactive] = useState(false)
  const [selectedCodes, setSelectedCodes] = useState([])

  const filteredCodes = procedureCodes.filter(code => 
    (includeInactive || !code.inactive) &&
    (code.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
     code.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const handleCodeSelection = (code) => {
    setSelectedCodes(prev => 
      prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code]
    )
  }

  const handleApply = () => {
    onSelectCodes(selectedCodes)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[600px] max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex">
            <button
              className={`px-4 py-2 font-semibold ${activeTab === 'single' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('single')}
            >
              Single Code
            </button>
            <button
              className={`px-4 py-2 font-semibold ${activeTab === 'panel' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('panel')}
            >
              Charge Panel
            </button>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>
        <div className="p-4 flex-grow overflow-auto">
          <div className="flex items-center mb-4">
            <div className="relative flex-grow mr-2">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for CPT*/HCPCS codes by code or description."
                className="w-full pl-10 pr-4 py-2 border rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-md">
              Show All
            </button>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={includeInactive}
                onChange={(e) => setIncludeInactive(e.target.checked)}
              />
              Include inactive codes
            </label>
          </div>
          <div className="bg-blue-100 p-2 mb-2 font-semibold">
            Recently Opened
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Code</th>
                <th className="p-2 text-left">Description</th>
                <th className="p-2 text-left">Price</th>
                <th className="p-2 text-left">Inactive</th>
              </tr>
            </thead>
            <tbody>
              {filteredCodes.map((code) => (
                <tr key={code.code} className="border-b">
                  <td className="p-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCodes.includes(code.code)}
                        onChange={() => handleCodeSelection(code.code)}
                        className="mr-2"
                      />
                      {code.code}
                    </label>
                  </td>
                  <td className="p-2">{code.description}</td>
                  <td className="p-2">{code.price}</td>
                  <td className="p-2">
                    {code.inactive && <input type="checkbox" checked readOnly />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t flex justify-end">
          <button
            onClick={handleApply}
            className="px-4 py-2 bg-blue-600 text-white rounded-md mr-2"
          >
            Apply
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Component() {
  const [rows, setRows] = useState([
    { id: 1, from: new Date('2024-11-18'), to: new Date('2024-11-18'), procedure: '99201', mod1: '', mod2: '', mod3: '', pos: '11', tos: '1', mod4: '', dxPointers: '', unitPrice: '259.36', units: '1.00' },
    { id: 2, from: new Date('2024-11-19'), to: new Date('2024-11-19'), procedure: '', mod1: '', mod2: '', mod3: '', pos: '', tos: '', mod4: '', dxPointers: '', unitPrice: '0.00', units: '1.00' },
  ])
  const [showPopup, setShowPopup] = useState(false)

  const addRow = (procedure = '') => {
    const newRow = {
      id: rows.length + 1,
      from: null,
      to: null,
      procedure,
      mod1: '',
      mod2: '',
      mod3: '',
      pos: '',
      tos: '',
      mod4: '',
      dxPointers: '',
      unitPrice: procedureCodes.find(code => code.code === procedure)?.price.replace('$', '') || '0.00',
      units: '1.00'
    }
    setRows([...rows, newRow])
  }

  const handleDateChange = (id, field, date) => {
    const updatedRows = rows.map(row => 
      row.id === id ? { ...row, [field]: date } : row
    )
    setRows(updatedRows)
    if (field === 'from' && id === rows[rows.length - 1].id && date !== null) {
      addRow()
    }
  }

  const handleProcedureSearch = () => {
    setShowPopup(true)
  }

  const handleSelectCodes = (selectedCodes) => {
    selectedCodes.forEach(code => addRow(code))
  }

  return (
    <div className="p-4 bg-gray-100 font-sans">
      <div className="mb-4 flex justify-between">
       <div className='flex flex-wrap gap-2 w-[60%]'>
       {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map(letter => (
          <div key={letter} className="flex items-center">
            <input
              type="text"
              className="border border-gray-300 rounded-l px-2 py-1 w-20 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder={`ICD ${letter}`}
            />
            <button className="bg-blue-100 border border-l-0 border-gray-300 rounded-r p-1">
              <FaSearch className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        ))}
       </div>
       <div className="bg-blue-100 p-4 mb-4 rounded w-[40%]">
        <h2 className="font-bold mb-2">Charge Options</h2>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="updateDefaults" className="mr-2" />
          <label htmlFor="updateDefaults">Update patient ICD & Procedure Code defaults</label>
        </div>
        <div className="flex items-center">
          <span className="mr-2">Set all charges to</span>
          <div className="relative inline-block w-48">
            <select className="block appearance-none w-full bg-white border border-gray-300 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>PENDING PATIENT</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <FaChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
      </div>

      <table className="w-full bg-white border-collapse">
        <thead>
          <tr className="bg-gray-200 text-sm font-normal">
            <th className="border p-2 text-left">From</th>
            <th className="border p-2 text-left">To</th>
            <th className="border p-2 text-left">Procedure</th>
            <th className="border p-2 text-left">Mod 1</th>
            <th className="border p-2 text-left">Mod 2</th>
            <th className="border p-2 text-left">Mod 3</th>
            <th className="border p-2 text-left">POS</th>
            <th className="border p-2 text-left">TOS</th>
            <th className="border p-2 text-left">Mod 4</th>
            <th className="border p-2 text-left">DX Pointers</th>
            <th className="border p-2 text-left">Unit Price</th>
            <th className="border p-2 text-left">Units</th>
            <th className="border p-2 text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="border p-2">
                <div className="flex items-center">
                  <DatePicker
                    selected={row.from}
                    onChange={(date) => handleDateChange(row.id, 'from', date)}
                    dateFormat="MM/dd/yyyy"
                    className="border-none p-0 w-24 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <FaCalendarAlt className="w-4 h-4 ml-1 text-gray-400" />
                </div>
              </td>
              <td className="border p-2">
                <div className="flex items-center">
                  <DatePicker
                    selected={row.to}
                    onChange={(date) => handleDateChange(row.id, 'to', date)}
                    dateFormat="MM/dd/yyyy"
                    className="border-none p-0 w-24 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <FaCalendarAlt className="w-4 h-4 ml-1 text-gray-400" />
                </div>
              </td>
              <td className="border p-2">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={row.procedure}
                    className="border-none p-0 w-16 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <FaSearch className="w-4 h-4 ml-1 text-gray-400 cursor-pointer" onClick={handleProcedureSearch} />
                </div>
              </td>
              <td className="border p-2">
                <input
                  type="text"
                  value={row.mod1}
                  className="border-none p-0 w-12 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </td>
              <td className="border p-2">
                <input
                  type="text"
                  value={row.mod2}
                  className="border-none p-0 w-12 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </td>
              <td className="border p-2">
                <input
                  type="text"
                  value={row.mod3}
                  className="border-none p-0 w-12 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </td>
              <td className="border p-2">
                <input
                  type="text"
                  value={row.pos}
                  className="border-none p-0 w-12 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </td>
              <td className="border p-2">
                <input
                  type="text"
                  value={row.tos}
                  className="border-none p-0 w-12 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </td>
              <td className="border p-2">
                <input
                  type="text"
                  value={row.mod4}
                  className="border-none p-0 w-12 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </td>
              <td className="border p-2">
                <input
                  type="text"
                  value={row.dxPointers}
                  className="border-none p-0 w-24 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </td>
              <td className="border p-2">
                <input
                  type="text"
                  value={row.unitPrice}
                  className="border-none p-0 w-16 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </td>
              <td className="border p-2">
                <input
                  type="text"
                  value={row.units}
                  className="border-none p-0 w-12 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </td>
              <td className="border p-2">
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-2 text-sm text-gray-600">{rows.length} Charge{rows.length !== 1 ? 's' : ''}</div>

      <ProcedureCodePopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onSelectCodes={handleSelectCodes}
      />
    </div>
  )
}