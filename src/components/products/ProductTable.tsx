'use client';
import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ClipLoader from "react-spinners/ClipLoader";
import { useFetch } from '@/hooks/useFetch';
import { Input } from "@/components/ui/input"

interface SymbolData {
  id: number;
  symbol: string;
  description: string;
  digits: number;
  contractsize: string;
  marginlong: string;
  marginshort: string;
  swapmode: string;
  swaplong: string;
  swapshort: string;
}

const ProductsTable: React.FC = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(''); // Add state for search query
  const limit = 15;

  // Update the fetch URL to include the search query
  const { data, loading, error } = useFetch<SymbolData>(`/api/symbols`, page, limit, searchQuery);  

  // Reset page to 1 when search query changes
  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <section className='flex items-center py-3 justify-center'>
      <div className='w-full max-w-6xl'> 
        <div className="mb-4 flex items-center justify-center">
          <div className='max-w-3xl w-full mb-4 mx-3'>
            <Input 
              placeholder='Search by Symbol...'
              value={searchQuery} 
              onChange={e => setSearchQuery(e.target.value)} 
            />
          </div>
        </div>

        {loading && page === 1 ? (
          <div className="flex justify-center py-4">
            <ClipLoader color="#ffffff" loading={loading} size={30} />
          </div>
        ) : (
          <Table className='text-white'>
            <TableHeader>
              <TableRow className='bg-transparent hover:bg-transparent'>
                <TableHead className="w-[150px]">Symbol</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Digits</TableHead>
                <TableHead className="text-right">Contract Size</TableHead>
                <TableHead className="text-right">Margin Long</TableHead>
                <TableHead className="text-right">Margin Short</TableHead>
                <TableHead className="text-right">Swap Mode</TableHead>
                <TableHead className="text-right">Swap Long</TableHead>
                <TableHead className="text-right">Swap Short</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length > 0 ? (
                data.map(item => (
                  <TableRow key={item.id} className='bg-transparent hover:bg-transparent' style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <TableCell className="font-medium">{item.symbol}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell className="text-right">{item.digits}</TableCell>
                    <TableCell className="text-right">{item.contractsize}</TableCell>
                    <TableCell className="text-right">{item.marginlong}</TableCell>
                    <TableCell className="text-right">{item.marginshort}</TableCell>
                    <TableCell className="text-right">{item.swapmode}</TableCell>
                    <TableCell className="text-right">{item.swaplong}</TableCell>
                    <TableCell className="text-right">{item.swapshort}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={9} className="text-center hover:bg-transparent py-4">
                    No results found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
        {
          data.length < limit ? 
            <></> 
            : 
            <div className='flex items-center justify-center py-4'>
              <button
                onClick={() => setPage(prevPage => prevPage + 1)}
                disabled={loading}
                className="mt-4 px-4 py-2 bg-white text-primaryColor rounded hover:bg-gray-300"
              >
                {loading && page !== 1 ? 
                  <ClipLoader color="#3498db" loading={loading} size={30} />
                : 'Show More'}
              </button>
            </div>
        }
       
      </div>
    </section>
  );
};

export default ProductsTable;
