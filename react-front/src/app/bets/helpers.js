import { utils } from 'web3';
export async function getPromiEvent(res, event){
  return new Promise((resolve, reject) => {
    res.on(event, res => resolve(res)).on("error", err => reject(err))
  })
}

export function toWei(value){
  return utils.toHex(utils.toWei(value.toString(), 'ether'));
}

export function toHex(value){
  return utils.toHex(value.toString())
}
/*__ADD_HELPERS__*/