import React from 'react';
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
// import { RoomConsumer } from '../Context';
import { withRoomConsumer } from '../Context';
import Loading from './Loading';

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomContainer);

// export default function RoomContainer() {
//     return (
//   <RoomConsumer>
//     {(value) => {
//       const { loading, sortedRooms, rooms } = value;

//       if (loading) {
//         return <Loading />;
//       }
//       return (
//         <div>
//           Hello From Rooms Container
//           <RoomsFilter rooms={rooms} />
//           <RoomsList rooms={sortedRooms} />
//         </div>
//       );
//     }}
//   </RoomConsumer>
// );
// }
