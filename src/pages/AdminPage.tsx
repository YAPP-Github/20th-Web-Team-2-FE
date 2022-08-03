import { Button } from '@/components/base';
import { getMeetingPaymentTargets, getDatingPaymentTargets, patchDatingPayment, patchMeetingPayment } from '@/lib/api/admin';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { AdminPaymentTargets } from '@/types/user';

type UserType = 'meeting' | 'dating';

const AdminPage = () => {
  const [userType, setUserType] = useState<UserType>('meeting');
  const [datingUsers, setDatingUsers] = useState<AdminPaymentTargets[]>([]);
  const [meetingUsers, setMeetingUsers] = useState<AdminPaymentTargets[]>([]);

  const users = userType === 'meeting' ? meetingUsers : datingUsers;

  const handlePayment = async (kakaoId: string) => {
    try {
      userType === 'meeting' ? patchMeetingPayment(kakaoId) : patchDatingPayment(kakaoId);
    } catch (e) {
      alert((e as any).message);
    }
  };

  useEffect(() => {
    const getUsersInfo = async () => {
      try {
        if (userType === 'meeting') {
          const res = await getMeetingPaymentTargets();
          setMeetingUsers(res);
          return;
        }
        const res = await getDatingPaymentTargets();
        setDatingUsers(res);
      } catch (e) {
        alert((e as any).message);
      }
    };

    getUsersInfo();
  }, [userType, handlePayment]);

  return (
    <AdminPageBlock>
      <ButtonWrapper>
        <TypeButton
          onClick={() => setUserType('meeting')}
          size="medium"
          variant={userType === 'meeting' ? 'default' : 'gray'}
          fontWeight={userType === 'dating' ? 700 : 400}
        >
          미팅
        </TypeButton>
        <TypeButton
          onClick={() => setUserType('dating')}
          size="medium"
          variant={userType === 'dating' ? 'default' : 'gray'}
          fontWeight={userType === 'dating' ? 700 : 400}
        >
          소개팅
        </TypeButton>
      </ButtonWrapper>
      <Table>
        <thead>
          <tr>
            <th>femaleId</th>
            <th>maleId</th>
            <th>payName</th>
            <th>isPaid</th>
            <th>payButton</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ femaleId, maleId, payName, isPaid }) => (
            <tr key={maleId}>
              <td>{femaleId}</td>
              <td>{maleId}</td>
              <td>{payName}</td>
              <PaidColumn paid={isPaid}>{String(isPaid)}</PaidColumn>
              <td>{isPaid ? '지불 완료' : <Button onClick={() => handlePayment(maleId)}>지불하기</Button>}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </AdminPageBlock>
  );
};

const AdminPageBlock = styled.div`
  position: relative;
  right: 100px;
  width: 500px;
`;

const Table = styled.table`
  display: table;
  table-layout: fixed;
  width: 100%;
  border: 1px solid #444444;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #444444;
    text-align: center;
    display: table-cell;
  }

  th {
    padding: 5px;
  }

  td {
    font-weight: 500;
    padding: 5px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const TypeButton = styled(Button)`
  margin: 25px 4px 4px 4px;
  width: 80px;
  height: 38px;
`;

const PaidColumn = styled.td<{ paid: boolean }>`
  color: ${({ paid }) => (paid ? '#1E90FF' : '#DC143C')};
`;

export default AdminPage;
