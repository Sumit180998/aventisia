import React, { useState } from 'react';
import { Card, CardContent } from "./components/ui/card";
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Table } from './components/ui/table';
import  Pagination  from './components/ui/pagination';
import { Search, Filter, Plus, } from 'lucide-react';
import Sidebar from './components/Sidebar/Sidebar';
import { FaSearch } from 'react-icons/fa';
import {data} from './dummy_data'

import { CalendarIcon, FilterIcon } from 'lucide-react';

import AventisiaHeader from './AventisiaHeader';
import ModelCreationModal from './components/model_screen/ModelCreationModa';

interface Model {
  id: string;
  model_name: string;
  model_type: string;
  Description: string;
  created_date: string;
  updated_date?: string;
  status?: string;
}

const ModelPage = () => {
  const [pageChange, setPageChange] = useState<number>(1);
  const [filter, setFilter] = useState<string>('');
  const[datas,setdata]=useState<Model []>(data)
  const[change,setChange]=useState <boolean>(false)
  
  function boxopen(){
    setChange(!change)
  }
  function adddata(dat: Model[]) {
   setdata(perv=>[dat[0],...perv])
   boxopen()
  }
     
  const filteredData = datas.filter(item =>
    item.model_name.toLowerCase().includes(filter.toLowerCase())
  );
  return (<>
    <AventisiaHeader/>
    
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <Sidebar/>
      {/* <aside className="w-64 bg-[#1E1B4B] text-white p-4 space-y-6">
        <h1 className="text-2xl font-bold">Aventisia</h1>
        <nav className="space-y-3">
          <p className="font-semibold">Model Library</p>
          <p className="text-gray-300">Label Data</p>
          <p className="text-gray-300">Model</p>
          <p className="text-gray-300">Test</p>
          <p className="text-gray-300">Setting</p>
          <p className="text-gray-300">Support</p>
        </nav>
      </aside> */}

      {/* Main Content */}
      <main className="flex-1 p-6  bg-white rounded-xl shadow-md">
        {/* <header className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Model Library</h2>
          <div className="flex gap-2">
            <Input placeholder="Search by Name, ID" className="w-64" />
            <Button variant="outline">
              <Filter size={16} className="mr-2" /> Filters
            </Button>
            <Button className="bg-[#4F46E5] text-white" onClick={boxopen}>
              <Plus size={16} className="mr-2" /> Create New Model
            </Button>
          </div>
        </header> */}

<div className="p-4 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Model Library</h2>
        <Button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700" onClick={boxopen}>
          + Create New Model
        </Button>
      </div>

      <div className="flex items-center gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search by Name, ID"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="pl-10 w-full h-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Filter Button */}
        <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
          <FilterIcon size={16} /> Filters
        </button>

        {/* Date Picker */}
        <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
          <CalendarIcon size={16} /> April 11 - April 24
        </button>
      </div>
    </div>

        {/* Table Section */}
        <Card className="my-0">
  <CardContent>
    <Table className="my-6">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-4 text-left font-semibold">Model Name <span className="inline-block ml-2">⇅</span></th>
          <th className="px-6 py-4 text-left font-semibold">Model Type <span className="inline-block ml-2">⇅</span></th>
          <th className="px-6 py-4 text-left font-semibold">Description <span className="inline-block ml-2">⇅</span></th>
          <th className="px-6 py-4 text-left font-semibold">Created On <span className="inline-block ml-2">⇅</span></th>
          <th className="px-6 py-4 text-left font-semibold">Last Trained On <span className="inline-block ml-2">⇅</span></th>
          <th className="px-6 py-4 text-left font-semibold">Status</th>
          <th className="px-6 py-4 text-left font-semibold">Action</th>
        </tr>
      </thead>
      <tbody>
        { filteredData.slice((pageChange-1)*7, pageChange*7).map((item, index) => (
          <tr key={index} className="hover:bg-gray-50 border-b">
            <td className="px-6 py-4">
              <p className="font-semibold">{item.model_name}</p>
              <p className="text-sm text-gray-500">{item.id}</p>
            </td>
            <td className="px-6 py-4">{item.model_type}</td>
            <td className="px-6 py-4">{item.Description}</td>
            <td className="px-6 py-4">{item.created_date}</td>
            <td className="px-6 py-4">{item.updated_date}</td>
            <td className="px-6 py-4">
              <span className="px-4 py-2 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                {item.status}
              </span>
            </td>
            <td className="px-6 py-4">
              <Button variant="ghost">...</Button>
            </td>
          </tr>
        ))
      }
      </tbody>
    </Table>
  </CardContent>
</Card>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-500">Showing 1 to 10 of 97 results</p>
          <Pagination 
        onPageChange={setPageChange} 
        totalResults={filteredData.length} 
        resultsPerPage={7} 
        currentPage={pageChange} 
      />
        </div>
      </main>
    </div>
    {change===true && <ModelCreationModal onClose={boxopen} Modeldata={adddata}/> }
    
    </>
  );
};

export default ModelPage;
