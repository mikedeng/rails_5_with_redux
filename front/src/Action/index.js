export const BASIC_URL = '/api'
export const ACCOUNTS = 'ACCOUNTS'

const received = (type, json) => {
  switch (type) {
    case ACCOUNTS:
      return {
        type: type,
        results: json.accounts
      } 
    default:
      return {}
  }
}

export const fetchAccounts = options => (dispatch) => {
  console.log(options)
  const type = 'ACCOUNTS'
  let url = `${BASIC_URL}/accounts`
  let node = ''
  if (options && options.node_id){
    node = `node_id=${options.node_id}`
  }
  if (options) {
    url = `${BASIC_URL}/accounts?${node}&limit=${options.limit||20}&type=${options.type||'last_actived'}&offset=${options.offset||0}`
  }
  console.log('url', url)

  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(received(type, json)))
}