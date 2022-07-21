import { Button } from '@/components/base';
import { getMeetingUsers, getDatingUsers } from '@/lib/api/admin';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

type UserType = 'meeting' | 'dating';

const AdminPage = () => {
  const [userType, setUserType] = useState<UserType>('meeting');
  const [datingUsers, setDatingUsers] = useState<any[]>([]);
  const [meetingUsers, setMeetingUsers] = useState<any[]>([]);

  // const users = userType === 'meeting' ? meetingUsers : datingUsers;

  const users = [{ kakaoId: 1, matchStatus: 'waiting', isPaid: false }];

  useEffect(() => {
    const getUsersInfo = async () => {
      try {
        if (userType === 'meeting') {
          const res = await getMeetingUsers();
          res.status === 200 && setMeetingUsers(res as any);
          return;
        }
        const res = await getDatingUsers();
        res.status === 200 && setDatingUsers(res as any);
      } catch (e) {
        alert(e.message);
      }
    };

    getUsersInfo();
  }, []);

  return (
    <>
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
          {users.map(({ kakaoId, matchStatus, isPaid }) => (
            <tr key={kakaoId}>
              <td>{kakaoId}</td>
              <td>{matchStatus}</td>
              <PaidColumn isPaid={isPaid}>{String(isPaid)}</PaidColumn>
              <td>
                <Button>지불하기</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

// kakaoId, status, isPaid: boolean

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

const PaidColumn = styled.td<{ isPaid: boolean }>`
  color: ${({ isPaid }) => (isPaid ? '#1E90FF' : '#DC143C')};
`;

export default AdminPage;
