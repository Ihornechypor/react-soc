import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPlaceholder from "../../assets/Avatar/user.svg";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageNumber = (pageNum) => {
    this.props.setCurrentPage(pageNum);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

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
                this.props.currentPage === p ? styles.pag__btn_active : ""
              } `}
              key={index}
            >
              <button onClick={() => this.onPageNumber(p)}>{p}</button>
            </li>
          ))}
        </ul>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <ul>
              <li>
                <div className={styles.userAvatar}>
                  <div>
                    <img
                      src={
                        u.photos.small != null
                          ? u.photos.small
                          : userPlaceholder
                      }
                      alt=""
                    />
                  </div>
                  {u.followed ? (
                    <button
                      onClick={() => {
                        this.props.unFollow(u.id);
                      }}
                    >
                      UnFollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(u.id);
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
  }
}

export default Users;
