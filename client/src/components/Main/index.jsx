import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	const userData = JSON.parse(localStorage.getItem("userData")) || {
		name: "John Doe",
		dateOfBirth: "1990-01-01",
		email: "john@example.com",
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>User Information</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<div className={styles.user_info}>
		
				<table className={styles.user_table}>
					<thead>
						<tr>
							<th>Name</th>
							<th>Date of Birth</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{userData.name}</td>
							<td>{userData.dateOfBirth}</td>
							<td>{userData.email}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Main;
