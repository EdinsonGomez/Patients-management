import usersDB from '@/api/users.json';

export const getUserById = async (userId) => {
  const userIdx = usersDB.findIndex(({ id }) => id === userId);

  if (userIdx === -1) return usersDB[0];

  return usersDB[userIdx];
}