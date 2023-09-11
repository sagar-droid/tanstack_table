import { useMemo, useState } from 'react'
import fakeData from './MockData.json'
import { useReactTable , getCoreRowModel, SortingState, flexRender, getPaginationRowModel,getFilteredRowModel, getSortedRowModel } from '@tanstack/react-table'
import { columns } from './columns'




type DataItem = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  university: string;
};


const BasicTable = () => {

const [sort, setSort] =  useState<SortingState[]>([]);
const [filter, setFilter] = useState<string>("");
const data = useMemo<DataItem[]>(()=> fakeData, [])
const table = useReactTable<DataItem>({data , columns, getCoreRowModel:getCoreRowModel(), getPaginationRowModel: getPaginationRowModel(), getSortedRowModel:getSortedRowModel(), getFilteredRowModel: getFilteredRowModel(),
state:{
    sorting: sort,
    globalFilter: filter,

},
 onSortingChange:setSort,
 onGlobalFilterChange:setFilter
})


  return (
    <div className='table-container'>
        <input type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder='Search' />
        <table>
            {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                        <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                            {header.isPlaceholder ? null : 
                            <div>

                                {flexRender(header.column.columnDef.header, header.getContext())}
                                {header.column.getIsSorted() === 'asc' ? '⬆️' : header.column.getIsSorted() === 'desc' ? '⬇️' : null}

                            </div>}
                        </th>
                    ))}
                </tr> 
            ))}
            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        <div className='pagination'>
        <button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
          {'<<'}
        </button>
        <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>Previous</button>
        {/* <span>Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span> */}
        {/* <span>
            | Go to page:{' '}
            <input type='number' defaultValue={pageIndex + 1} onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }} style={{width: '50px'}}  />
        </span> */}
        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>Next</button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
          {'>>'}
        </button>
      </div>
    </div>
  )
}

export default BasicTable;
