/* eslint-disable react/jsx-filename-extension */
import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import ScholarshipsTable from '../../components/scholarshipTable';
import { getAllScholarships, IScholarshipsResponse } from '../../providers/api';

const Home: React.FC = () => {
  const [allScholarships, setAllScholarships] = useState<IScholarshipsResponse[]>([]);

  const fillScholarships = async () => {
    try {
      const result = await getAllScholarships();
      setAllScholarships(result.data as IScholarshipsResponse[]);
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      fillScholarships();
    } catch (err) {
      const error = err as AxiosError;
      console.error(error);
    }
  }, []);

  console.log(allScholarships);

  return (
    <ScholarshipsTable tableTitle='Tabela de Escolas' scholarshipData={allScholarships} />
  );
};

export default Home;
