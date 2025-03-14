import { login, signup } from "./action";

export default function LoginPage() {
	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-6">
					<div className="card shadow">
						<div className="card-body p-5">
							<h2 className="text-center mb-4">Welcome to NextBlog</h2>
							<form>
								<div className="mb-3">
									<label htmlFor="email" className="form-label">
										Email:
									</label>
									<input
										id="email"
										name="email"
										type="email"
										className="form-control"
										required
									/>
								</div>
								<div className="mb-4">
									<label htmlFor="password" className="form-label">
										Password:
									</label>
									<input
										id="password"
										name="password"
										type="password"
										className="form-control"
										required
									/>
								</div>
								<div className="d-grid gap-2">
									<button
										formAction={login}
										className="btn btn-primary btn-lg"
									>
										Log in
									</button>
									<button
										formAction={signup}
										className="btn btn-outline-secondary btn-lg"
									>
										Sign up
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}