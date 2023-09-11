import { ColumnDef } from "@tanstack/react-table"

type DataItem = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  university: string;
};

export const columns: ColumnDef<DataItem>[] = [
    {
      header: "ID",
      footer: "ID",
      accessorKey: "id",
      enableColumnFilter: false,
    },
    {
      header: "First Name",
      footer: "First Name",
      accessorKey: "first_name",
    },
    {
      header: "Last Name",
      footer: "Last Name",
      accessorKey: "last_name",
    },
    {
      header: "Email",
      footer: "Email",
      accessorKey: "email",
      enableColumnFilter: false,
    },
    {
      header: "Gender",
      footer: "Gender",
      accessorKey: "gender",
      enableColumnFilter: false,
    },
    {
      header: "University",
      footer: "University",
      accessorKey: "university",
    },
  ]


  // export const columns: Column<DataItem>[]=[
  //   {
  //     Header: "ID",
  //     Footer: "ID",
  //     accessor: "id",
  //   },
  //   {
  //     Header:"Name",
  //     Footer:"Name",
  //     columns:[
  //       {
  //         Header: "First Name",
  //         Footer: "First Name",
  //         accessor: "first_name",
  //       },
  //       {
  //         Header: "Last Name",
  //         Footer: "Last Name",
  //         accessor: "last_name",
  //       },
  //     ]
  //   },
  //   {
  //     Header:"Info",
  //     Footer:"Info",
  //     columns:[
  //       {
  //         Header: "Email",
  //         Footer: "Email",
  //         accessor: "email",
  //       },
  //       {
  //         Header: "Gender",
  //         Footer: "Gender",
  //         accessor: "gender",
  //       },
  //       {
  //         Header: "University",
  //         Footer: "University",
  //         accessor: "university",
  //       },
  //     ]
  //   }
  // ]
