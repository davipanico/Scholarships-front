/* eslint-disable react/jsx-filename-extension */
import {Col, Form, Row} from 'antd';
import {AxiosError} from 'axios';
import React, {useEffect, useState} from 'react';
import ScholarshipsTable from '../../components/scholarshipTable';
import {getAllScholarships, IScholarshipsResponse} from '../../providers/api';

const Home: React.FC = () => {
  const [form] = Form.useForm();
  const [allScholarships, setAllScholarships] = useState<
    IScholarshipsResponse[]
  >([]);

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

  const onFilter = () => {};

  return (
    <>
      <Form
        form={form}
        layout="horizontal"
        name="filter_scholarships"
        onFinish={onFilter}
      >
        <Row>
          <Col style={{paddingRight: '60px'}}></Col>
        </Row>
      </Form>
      <ScholarshipsTable
        tableTitle="Tabela de Escolas"
        scholarshipData={allScholarships}
      />
    </>
  );
};

export default Home;
