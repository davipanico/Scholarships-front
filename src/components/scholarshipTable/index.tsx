import React, {useCallback, useRef} from 'react';
import {Table, Button, Typography, Row, Image, Divider, Form, Select} from 'antd';
import Container from './styles';
import {IScholarshipsResponse} from '../../providers/api';
import ScholarshipDetails, {IScholarshipHandles} from '../scholarsipDetails';
import { useForm } from 'antd/lib/form/Form';
interface IScholarshipsTable {
  tableTitle: string;
  scholarshipData: IScholarshipsResponse[];
  containerStyle?: React.CSSProperties;
}

const ScholarshipsTable: React.FC<IScholarshipsTable> = ({
  tableTitle,
  scholarshipData,
  containerStyle,
}: IScholarshipsTable) => {
  const [form] = Form.useForm();
  const scholarshipModalRef = useRef<IScholarshipHandles>(null);

  const handleDetailsModal = useCallback((data) => {
    if (scholarshipModalRef.current) {
      scholarshipModalRef.current.dataModal(data);
      scholarshipModalRef.current.openModal();
    }
  }, []);

  const handleFinish = () => {
    console.log('testando')
  }

  const columns = [
    {
      title: 'Logo',
      dataIndex: ['university', 'logo_url'],
      align: 'center' as const,
      key: 'logo',
      width: '10%',
      render: (logo: string) => {
        return <Image src={logo} style={{width: '100%'}} />;
      },
    },
    {
      title: 'Nome do Curso',
      dataIndex: ['course', 'name'],
      align: 'center' as const,
      key: 'name',
      width: '10%',
      sorter: (a, b) => a.course.name.localeCompare(b.course.name),
      defaultSortOrder: 'ascend' as const,
    },
    {
      title: 'Cidade',
      dataIndex: ['campus', 'city'],
      align: 'center' as const,
      width: '10%',
      key: 'city',
    },
    {
      title: 'Preço',
      dataIndex: 'full_price',
      align: 'center' as const,
      key: 'fullPrice',
      width: '10%',
      render: (full_price: number) => {
        return `R$ ${full_price}`;
      },
    },
    {
      align: 'left' as const,
      key: 'details',
      width: '10%',
      render: (data: IScholarshipsResponse) => {
        return (
          <Button
            onClick={() => handleDetailsModal(data)}
            style={{cursor: 'pointer'}}
          >
            Detalhes
          </Button>
        );
      },
    },
  ];

  return (
    <>
     <Divider/>
      <Row
        justify="space-around"
        align="middle"
        style={{textAlign: 'center'}}
      >
        <Typography.Title level={2}>{tableTitle}</Typography.Title>
      </Row>
      <Container style={containerStyle}>
        <Table columns={columns} dataSource={scholarshipData} />
      </Container>
      <ScholarshipDetails ref={scholarshipModalRef} />
    </>
  );
};

export default ScholarshipsTable;
