import React from 'react';
import { Table } from 'antd';
import Container from './styles';
import { IScholarshipsResponse } from '../../providers/api';

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
  const columns = [
    {
      title: 'Logo',
      dataIndex: ['university', 'logo_url'],
      align: 'center' as const,
      key: 'logo',
      width: 50,
      maxWidth: 50,
      render: (logo: string) => {
        return <img src={logo} style={{'width': '100%'}} />
      },
    },
    {
      title: 'Nome do Curso',
      dataIndex: ['course', 'name'],
      align: 'center' as const,
      key: 'name',
    },
    {
      title: 'Cidade',
      dataIndex: ['campus', 'city'],
      align: 'center' as const,
      key: 'city',
    },
  ];

  return (
    <>
    <h1>{tableTitle}</h1>
    <div style={{
        overflowX: 'auto',
        width: '100%',
      }}
      >
    <Container style={containerStyle}>
      <Table columns={columns} dataSource={scholarshipData}/>
    </Container>
    </div>
    </>
  );
};

export default ScholarshipsTable;
