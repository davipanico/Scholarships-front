import React, { useCallback, useRef } from 'react';
import { Table, Button, Divider } from 'antd';
import Container from './styles';
import { IScholarshipsResponse } from '../../providers/api';
import ScholarshipDetails, { IScholarshipHandles } from '../scholarsipDetails';
interface IScholarshipsTable {
  tableTitle: string,
  scholarshipData: IScholarshipsResponse[]
  containerStyle?: React.CSSProperties,
}

const ScholarshipsTable: React.FC<IScholarshipsTable> = ({
  tableTitle,
  scholarshipData,
  containerStyle,
}: IScholarshipsTable) => {
  const scholarshipModalRef = useRef<IScholarshipHandles>(null);

  const handleDetailsModal = useCallback((data) => {
    if (scholarshipModalRef.current) {
      scholarshipModalRef.current.dataModal(data);
      scholarshipModalRef.current.openModal();
    }
  }, []);


  const columns = [
    {
      title: 'Logo',
      dataIndex: ['university', 'logo_url'],
      align: 'center' as const,
      key: 'logo',
      width: '10%',
      render: (logo: string) => {
        return <img src={logo} style={{'width': '100%'}} />
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
      render: (full_price) => {
        return `R$ ${full_price}`
      }
    },
    {
      align: 'left' as const,
      key: 'details',
      width: '10%',
      render: (data: IScholarshipsResponse) => {
        return <Button onClick={() => handleDetailsModal(data)} style={{ cursor: 'pointer' }}> 
          Detalhes 
        </Button>
      }
    },
  ];

  return (
    <>
    <h1>{tableTitle}</h1>
    <Divider/>
    <div style={{
        overflowX: 'auto',
        width: '100%',
      }}
      >
    <Container style={containerStyle}>
      <Table columns={columns} dataSource={scholarshipData}/>
    </Container>
    </div>
    <ScholarshipDetails ref={scholarshipModalRef} />
    </>
  );
};

export default ScholarshipsTable;
