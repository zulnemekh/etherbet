import screens from './screens';

export default [
  {
    path: '/bets/:id',
    component: screens.BetDetail,
  },
  {
    path: '/',
    component: screens.BetList,
  },
/*__ADD_ROUTES__*/
]