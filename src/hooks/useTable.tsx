import { useContext } from 'react';
import { TableContext } from '../context/TableContext';

export const useTable = () => {
  return useContext(TableContext);
};
