import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MoneyTableProps } from "../types/money";
import { RootState } from "../redux/store";
import {
  TablePagination,
  TableContainer,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";

import { deleteIncome } from "../redux/reducers/income";
import { deleteExpense } from "../redux/reducers/expense";
import { useAppDispatch } from "./hooks/reduxHooks";

const BillsTable = ({ name }: MoneyTableProps) => {
  const dispatch = useAppDispatch();
  const list = useSelector((state: RootState) =>
    name === "Income" ? state.incomeReducer : state.expenseReducer
  );

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const onDelete = (id: number) => {
    dispatch(name === "Income" ? deleteIncome(id) : deleteExpense(id));
  };
  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <Button onClick={() => onDelete(item.id)}>Delete</Button>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={list.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default BillsTable;
