import { v4 as uuidv4 } from 'uuid'
import hostData from '../../data/hosts.json' assert { type: 'json' }

const createHost = (username, password, name, email, phoneNumber, profilePicture) => {
  const newHost = {
    id: uuidv4(),
    username,
    password,
    name,
    email,
    phoneNumber,
    profilePicture
  };

  hostData.hosts.push(newHost);

  return newHost;
};

export default createHost