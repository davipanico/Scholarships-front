/* eslint-disable react/jsx-filename-extension */
import {Button, Col, Form, Input, Row} from 'antd';
import {AxiosError} from 'axios';
import React, {useEffect, useState} from 'react';
import ScholarshipsTable from '../../components/scholarshipTable';
import {getAllScholarships, IScholarshipsResponse} from '../../providers/api';

const Home: React.FC = () => {
  const [form] = Form.useForm();
  const [allScholarships, setAllScholarships] = useState<IScholarshipsResponse[]>([]);
  const [filteredScholarships, setFilteredScholarships] = useState<IScholarshipsResponse[]>([])

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
    
    const filteredByCity = allScholarships.filter((school) => school.campus.city.toLowerCase().includes(city.toLowerCase()));

    if (course) {
      const filteredByCourse = filteredByCity.filter((school) => school.course.name.toLowerCase().includes(course.toLowerCase()));
      if (price) {
        const filteredByCourseAndPrice = filteredByCourse.filter((school) => school.full_price <= price);
        return setFilteredScholarships(filteredByCourseAndPrice);
      }
      return setFilteredScholarships(filteredByCourse);
    } else if (price) {
      const filteredByPrice = filteredByCity.filter((school) => school.full_price <= price);
      if (course) {
        const filteredByPriceAndCourse = filteredByPrice.filter((school) => school.course.name.toLowerCase().includes(course.toLowerCase()));
        return setFilteredScholarships(filteredByPriceAndCourse)
      }
      return setFilteredScholarships(filteredByPrice);
    }

    return setFilteredScholarships(filteredByCity);
  };

  const handleClear = () => {
    setFilteredScholarships([]);
  }

  return (
    <>
      <Form
        form={form}
        layout="horizontal"
        name="filter_scholarships"
        onFinish={handleSubmit}
      >
        <Row 
            justify="center"
            style={{textAlign: 'center', marginTop: '10px'}}
        >
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
          <Col style={{ paddingRight: '25px' }}>
            <Button  onClick={form.submit}>
              Buscar
            </Button>
          </Col>
          <Col style={{ paddingRight: '25px' }}>
            <Button style={{ paddingRight: '25px' }} onClick={handleClear}>
              Resetar
            </Button>
          </Col>        
        </Row>
      </Form>
      <ScholarshipsTable
        tableTitle="Tabela de Escolas"
        scholarshipData={filteredScholarships.length > 0 ? filteredScholarships : allScholarships}
      />
    </>
  );
};

export default Home;
