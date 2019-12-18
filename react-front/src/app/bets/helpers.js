import { utils } from 'web3';
import moment from 'moment';
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

export function convertTime(timestamp){
  return moment.unix(timestamp).toISOString()
}

export function toEther(value){
  return utils.fromWei(value, 'ether')
}

/*__ADD_HELPERS__*/