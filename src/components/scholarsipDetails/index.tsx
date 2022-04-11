import React, { useCallback, useImperativeHandle, useState } from 'react';
import { Table, Button, Divider, Modal } from 'antd';
import { IScholarshipsResponse } from '../../providers/api';

export interface IScholarshipHandles {
openModal: () => void;
dataModal: (data: IScholarshipsResponse) => void;
}

const ScholarshipDetails: React.ForwardRefRenderFunction<IScholarshipHandles> = (_props, ref) => {
    const [visible, setVisible] = useState<boolean>(true);
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
          <Modal
        visible={visible}
        footer={null}
        onCancel={handleCloseModal}
        width="70vw"
        centered
        >
            <h1>testando</h1>

      </Modal>
      </div>
  );
};

export default ScholarshipDetails;
