import React from "react";
import userPlaceholder from "../../assets/Avatar/user.svg";
import styles from "./Users.module.css";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <>
      <ul className={styles.pag__btn_list}>
        {pages.map((p, index) => (
          <li
            className={`${
              props.currentPage === p ? styles.pag__btn_active : ""
            } `}
            key={index}
          >
            <button onClick={() => props.onPageNumber(p)}>{p}</button>
          </li>
        ))}
      </ul>
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
