import { Button } from '@/components/base';
import { getMeetingUsers, getDatingUsers, patchDatingPayment, patchMeetingPayment } from '@/lib/api/admin';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { type AdminUsersStatus } from '@/types/user';

type UserType = 'meeting' | 'dating';

const AdminPage = () => {
  const [userType, setUserType] = useState<UserType>('meeting');
  const [datingUsers, setDatingUsers] = useState<AdminUsersStatus[]>([]);
  const [meetingUsers, setMeetingUsers] = useState<AdminUsersStatus[]>([]);

  const users = userType === 'meeting' ? meetingUsers : datingUsers;

  const handlePayment = async (kakaoId: string) => {
    try {
      if (userType === 'meeting') {
        const res = await patchMeetingPayment(kakaoId);
        setMeetingUsers(res);
        return;
      }
      const res = await patchDatingPayment(kakaoId);
      setDatingUsers(res);
    } catch (e) {
      alert((e as any).message);
    }
  };

  useEffect(() => {
    const getUsersInfo = async () => {
      try {
        if (userType === 'meeting') {
          const res = await getMeetingUsers();
          setMeetingUsers(res);
          return;
        }
        const res = await getDatingUsers();
        setDatingUsers(res);
      } catch (e) {
        alert((e as any).message);
      }
    };

    getUsersInfo();
  }, [userType]);

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
            <th>kakaoId</th>
            <th>status</th>
            <th>지불여부</th>
            <th>지불버튼</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ kakaoId, matchStatus, paid }) => (
            <tr key={kakaoId}>
              <td>{kakaoId}</td>
              <td>{matchStatus}</td>
              <PaidColumn paid={paid}>{String(paid)}</PaidColumn>
              <td>{matchStatus === 'MATCHED' && <Button onClick={() => handlePayment(kakaoId)}>지불하기</Button>}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </AdminPageBlock>
  );
};

const AdminPageBlock = styled.div`
  max-width: 1024px;
  width: 100%;
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
