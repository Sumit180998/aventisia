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
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);
  
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
  return (< div className="mt-20">
    <AventisiaHeader toggleSidebar={toggleSidebar} isOpen={isOpen} />
    
    <div className="bg-gray-100 min-h-screen flex">
     
      <Sidebar isOpen={isOpen} />
      
      <main className="flex-1 p-6  bg-white rounded-xl shadow-md">
       

<div className="p-4 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Model Library</h2>
        <Button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700" onClick={boxopen}>
          + Create New Model
        </Button>
      </div>

      <div className="flex items-center gap-4">
      
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

      
        <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
          <FilterIcon size={16} /> Filters
        </button>

        <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
          <CalendarIcon size={16} /> April 11 - April 24
        </button>
      </div>
    </div>

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
        { filteredData.slice((pageChange-1)*6, pageChange*6).map((item, index) => (
          <tr key={index} className="hover:bg-gray-50 border-b">
            <td className="px-6 py-4">
              <p className="font-semibold">{item.model_name}</p>
              <p className="text-sm text-gray-500">{item.id}</p>
            </td>
            <td className="px-6 py-4">{item.model_type}</td>
            <td className="px-6 py-4">{item.Description.length>10?`${item.Description.slice(0, 10)}...`:item.Description }</td>
            <td className="px-6 py-4">{item.created_date}</td>
            <td className="px-6 py-4">{item.updated_date}</td>
            <td className="px-6 py-4">
              <span className="px-4 py-2 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                {item.status}
              </span>
            </td>
            <td className="px-6 py-4">
              <Button variant="ghost"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg></Button>
            </td>
          </tr>
        ))
      }
      </tbody>
    </Table>
  </CardContent>
</Card>

        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-500">Showing 1 to 6 of  {filteredData.length}</p>
          <Pagination 
        onPageChange={setPageChange} 
        totalResults={filteredData.length} 
        resultsPerPage={6} 
        currentPage={pageChange} 
      />
        </div>
      </main>
    </div>
    {change===true && <ModelCreationModal onClose={boxopen} Modeldata={adddata}/> }
    
    </div>
  );
};

export default ModelPage;
