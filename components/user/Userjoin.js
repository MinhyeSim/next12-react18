import React from 'react';
import { connect } from 'react-redux';
import { increaseAsync, decreaseAsync } from '@/modules/user';
import UserJoin from '@/components/user/UserJoin';

const UserJoinPage = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <UserJoin
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(
  state => ({
    number: state.counter
  }),
  {
    increaseAsync,
    decreaseAsync
  }
)(UserJoinPage);