import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPlaceholder from "../../assets/Avatar/user.svg";

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }

  return (
    <>
      {props.users.map((u) => (
        <div key={u.id}>
          <ul>
            <li>
              <div className={styles.userAvatar}>
                <div>
                  <img
                    src={
                      u.photos.small != null ? u.photos.small : userPlaceholder
                    }
                    alt=""
                  />
                </div>
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
                  <p>{u.name}</p>
                  <p>{u.status}</p>
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
