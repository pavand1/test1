import * as React from "react";
import "./component-style.css";

export default function Searchbox() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [users, setUsers] = React.useState<Array<any>>([]);
  const [filteredUsers, setFilteredUsers] = React.useState<Array<any>>([]);

  const debounce = (callback, delay: number) => {
    let timer = null;
    return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callback();
      }, delay);
    };
  };
  const throttle = (callback, delay: number) => {
    let timer = null;
    return function () {
      if (!timer) {
        timer = setTimeout(() => {
          callback();
          timer = null;
        }, delay);
      }
    };
  };
  const debouncedFunction = debounce(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(inputRef.current?.value.toLowerCase())
      )
    );
  }, 1000);
  const throttledFunction = throttle(() => {
    console.log("throttled");
    console.log(new Date().getTime());
  }, 1000);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedFunction();
    throttledFunction();
  };
  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
    setFilteredUsers(data);
  };
  React.useEffect(() => {
    inputRef.current?.focus();
    fetchUsers();
  }, []);
  return (
    <div className="searchbox-container">
      <input
        ref={inputRef}
        className="searchbox"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={handleOnChange}
      />
      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li tabIndex={0} key={user.id}>
              {user.name}
            </li>
          ))
        ) : (
          <li>No user found</li>
        )}
      </ul>
    </div>
  );
}
