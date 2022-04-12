/* eslint-disable react/jsx-filename-extension */
import {Button, Col, Form, Input, Row} from 'antd';
import {AxiosError} from 'axios';
import React, {useEffect, useState} from 'react';
import ScholarshipsTable from '../../components/scholarshipTable';
import {getAllScholarships, IScholarshipsResponse} from '../../providers/api';

const Home: React.FC = () => {
  const [form] = Form.useForm();
  const [allScholarships, setAllScholarships] = useState<IScholarshipsResponse[]>([]);
  const [filteredScholarships, setAllFilteredScholarships] = useState<IScholarshipsResponse[]>([])

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

  const handleSubmit = (values) => {
    const {city, course, price} = values;
    
    if (values) {

    }
  };

  return (
    <>
      <Form
        form={form}
        layout="horizontal"
        name="filter_scholarships"
        onFinish={handleSubmit}
      >
        <Row style={{ marginTop: '10px'}}>
          <Col style={{ paddingRight: '25px', width: '300px'}}>
            <Form.Item name='city'  
            rules={[{
            required: true,
            message: 'O campo cidade não pode ficar em branco',
            }]}>
              <Input placeholder='Cidade'></Input>
            </Form.Item>
          </Col>
          <Col style={{ paddingRight: '25px', width: '300px'}}>
            <Form.Item name='course'>
              <Input placeholder='Curso'></Input>
            </Form.Item>  
          </Col>
          <Col style={{ paddingRight: '25px', width: '300px' }}>
            <Form.Item name='price'>
              <Input type={'number'} placeholder='Preço'></Input>
            </Form.Item>           
          </Col>
          <Button style={{ paddingRight: '25px' }} onClick={form.submit}>
            Buscar
          </Button>
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
