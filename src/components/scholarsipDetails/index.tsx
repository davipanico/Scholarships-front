import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { Table, Button, Divider, Modal, Row, Col, Image, Typography } from 'antd';
import { IScholarshipsResponse } from '../../providers/api';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import Container from './styles';

export interface IScholarshipHandles {
openModal: () => void;
dataModal: (data: IScholarshipsResponse) => void;
}

const ScholarshipDetails: React.ForwardRefRenderFunction<IScholarshipHandles> = (_props, ref) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [scholarshipData, setScholharshipData] = useState<IScholarshipsResponse>();

    const openModal = useCallback(() => {
        setVisible(true);
      }, []);

      const dataModal = useCallback((data) => {
        setScholharshipData(data);
      }, []);

      useImperativeHandle(ref, () => ({
        openModal,
        dataModal,
      }));

    const handleCloseModal = () => {
        setVisible(false)
    };

  return (
      <div>
        <Container>
        {scholarshipData && (
          <Modal
        visible={visible}
        footer={null}
        onCancel={handleCloseModal}
        width="70vw"
        centered
        >
          <Row justify="space-around" align="middle" style={{textAlign: 'center'}}>
            <Col span={12}>
              <Image src={scholarshipData.university?.logo_url}/>
            </Col>
            <Col span={12} >
              <Typography.Text strong style={{ margin: 0 }}>{scholarshipData.course.name} - {scholarshipData.course.kind}</Typography.Text>
              <Divider/>
              <Typography.Text style={{ margin: 0 }}>
                {scholarshipData.course.level}
              </Typography.Text> 
            </Col>
          </Row>
          <Divider/>
          <Row  justify="space-around" align="middle" style={{textAlign: 'center'}}>
            <Col span={12}>
            <Typography.Text strong style={{ margin: 0 }}>{scholarshipData.university.name}</Typography.Text>
            <div/>
              <Typography.Text style={{ margin: 0 }}>
                Score: {scholarshipData.university.score}
              </Typography.Text> 
            </Col>
            <Col span={12}>
            <Typography.Text strong style={{ margin: 0 }}>{scholarshipData.campus.name}</Typography.Text>
            <div/>
              <Typography.Text  style={{ margin: 0 }}>
                {scholarshipData.campus.city}
              </Typography.Text> 
            </Col>
          </Row>
          <Divider/>
          <Row  justify="space-around" align="middle" style={{textAlign: 'center'}}>
            <Col span={24} style={{textAlign: 'center'}}>
              <Typography.Text strong style={{ margin: 0 }}>Preço:</Typography.Text>
              <Typography.Text> R$ {scholarshipData.full_price}</Typography.Text>
            </Col>
          </Row>
      </Modal>
        )}         
        </Container>
        
      </div>
  );
};

export default forwardRef(ScholarshipDetails);
