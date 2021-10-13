import React from 'react';

const MemoComp = ({ user }) => {
    console.log('---------------Memo Component---------------');
    return <div>Hello {user}</div>
}

export default React.memo(MemoComp);