import hostsData from '../../src/data/hosts.json' assert { type: 'json' }


const getHostById = async (id) => {
  console.log(id)
  return hostsData.hosts.find((host) => host.id === id)
}

export default getHostById



