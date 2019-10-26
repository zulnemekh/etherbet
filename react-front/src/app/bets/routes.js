import screens from './screens';

export default [
  {
    path: '/bets/detail',
    component: screens.BetDetail,
  },
  {
    path: '/bets/new',
    component: screens.CreateBet,
  },
  {
    path: '/',
    component: screens.Index,
  },
/*__ADD_ROUTES__*/
]