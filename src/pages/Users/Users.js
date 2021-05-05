import React from "react";
import { NavLink } from "react-router-dom";
import userPlaceholder from "../../assets/Avatar/user.svg";
import styles from "./Users.module.css";
import { usersAPI } from "../../api/api";

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
                  <NavLink to={`/profile/${u.id}`}>
                    <img
                      src={
                        u.photos.small != null
                          ? u.photos.small
                          : userPlaceholder
                      }
                      alt=""
                    />
                  </NavLink>
                </div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      usersAPI.unFollow(u.id).then((data) => {
                        if (data.resultCode === 0) {
                          props.unFollow(u.id);
                        }
                      });
                    }}
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      usersAPI.follow(u.id).then((data) => {
                        if (data.resultCode === 0) {
                          props.follow(u.id);
                        }
                      });
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
