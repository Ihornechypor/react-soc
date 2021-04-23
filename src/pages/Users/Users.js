import React from "react";
import styles from "./Users.module.css";
const Users = (props) => {
  //   if (props.users.length === 0) {
  //     props.setUsers([
  //       {
  //         id: 1,
  //         fullName: "hi",
  //         satus: "I am some",
  //         location: { city: "minsk", country: "Belarus" },
  //         followed: false,
  //       },
  //       {
  //         id: 2,
  //         fullName: "h33i",
  //         satus: "I am some",
  //         location: { city: "kiev", country: "ukraine" },
  //         followed: false,
  //       },
  //       {
  //         id: 4,
  //         fullName: "dsf",
  //         satus: "I am some boss two",
  //         location: { city: "war", country: "poland" },
  //         followed: true,
  //       },
  //     ]);
  //   }

  return (
    <>
      {props.users.map((u) => (
        <div key={u.id}>
          <ul>
            <li>
              <div className={styles.userAvatar}>
                <div>avatar</div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unFollow(u.id);
                    }}
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
              <div className="user__info">
                <div>
                  <p>{u.fullname}</p>
                  <p>{u.status}</p>
                </div>
                <div>
                  <p>{u.location.city}</p>
                  <p>{u.location.country}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default Users;
