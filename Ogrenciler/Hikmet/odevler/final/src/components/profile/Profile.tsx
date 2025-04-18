"use client";

import { User } from "@supabase/supabase-js";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Button, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import PageInfoContainer from "../PageInfoContainer";
import ApiKeyPane from "./ApiKeyPane";
import ChangePasswordPane from "./change-password/ChangePasswordPane";
import LoginHistoryPane from "./LoginHistoryPane";
import ProfilePane from "./profile-pane/ProfilePane";
import ReferralPane from "./ReferralPane";
import TwoFAPane from "./TwoFAPane";

type ProfileTab = {
	title: string;
	icon: string;
};

type ProfileProps = {
	user: User;
};

export default function Profile({ user }: ProfileProps) {
	const t = useTranslations("Profile");
	const profileTabs = t.raw("tabs");
	const defaultTab = profileTabs[0].title.toLowerCase();
	const [activeProfileTab, setActiveProfileTab] = useState<string>(defaultTab);

	return (
		<>
			<PageInfoContainer t={t} />
			<Container className="py-5">
				<Row className="gap-5">
					<Col md={4} lg={3} className="border-end">
						<Col md={12} className="mb-4 text-center">
							<Image
								src="/ben.webp"
								alt="Profile Image"
								width={150}
								height={150}
								className="border rounded-circle object-fit-cover"
							/>
							<h3 className="mt-3">
								{user.user_metadata?.nickname || user.email}
							</h3>
							<p>{user.email}</p>
						</Col>
						<Nav className="flex-column mb-4">
							{profileTabs.map((tab: ProfileTab, index: number) => (
								<Nav.Item
									key={tab.title.toLowerCase()}
									className={index > 0 ? "mt-2" : ""}>
									<Button
										variant={
											activeProfileTab === tab.title.toLowerCase()
												? "primary"
												: ""
										}
										className="d-flex align-items-center px-3 py-2 rounded-pill w-100 fs-6"
										onClick={() =>
											setActiveProfileTab(tab.title.toLowerCase())
										}>
										<Image
											src={tab.icon}
											alt={tab.title}
											width={16}
											height={16}
											className="me-2"
										/>
										{tab.title}
									</Button>
								</Nav.Item>
							))}
						</Nav>
					</Col>

					<Col md={7} lg={8}>
						<Tab.Content>
							<ProfilePane
								t={t}
								user={user}
								activeProfileTab={activeProfileTab}
								setActiveProfileTab={setActiveProfileTab}
								profileTabs={profileTabs}
							/>

							<ReferralPane
								activeProfileTab={activeProfileTab}
								profileTabs={profileTabs}
							/>

							<ApiKeyPane
								activeProfileTab={activeProfileTab}
								profileTabs={profileTabs}
							/>

							<LoginHistoryPane
								activeProfileTab={activeProfileTab}
								profileTabs={profileTabs}
							/>

							<TwoFAPane
								activeProfileTab={activeProfileTab}
								profileTabs={profileTabs}
							/>

							<ChangePasswordPane
								activeProfileTab={activeProfileTab}
								profileTabs={profileTabs}
							/>
						</Tab.Content>
					</Col>
				</Row>
			</Container>
		</>
	);
}
