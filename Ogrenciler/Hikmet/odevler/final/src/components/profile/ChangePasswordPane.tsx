import { Button, Card, Tab } from "react-bootstrap";

export default function ChangePasswordPane({
	activeProfileTab,
	profileTabs,
}: {
	activeProfileTab: string;
	profileTabs: { title: string; icon: string }[];
}) {
	return (
		<Tab.Pane active={activeProfileTab === profileTabs[5].title.toLowerCase()}>
			<Card className="shadow-sm border-0">
				<Card.Header className="bg-white py-3">
					<h4 className="mb-0">{profileTabs[5].title}</h4>
				</Card.Header>
				<Card.Body>
					<div className="mb-3">
						<label className="form-label">Current Password</label>
						<input type="password" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">New Password</label>
						<input type="password" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Confirm New Password</label>
						<input type="password" className="form-control" />
					</div>
					<Button variant="primary">Change Password</Button>
				</Card.Body>
			</Card>
		</Tab.Pane>
	);
}
