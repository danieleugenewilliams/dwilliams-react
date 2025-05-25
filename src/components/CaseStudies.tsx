import { useState } from "react";
import CaseStudyDownloadModal from "./CaseStudyDownloadModal";

const CASE_STUDIES = [
	{
		title: "Standardizing Innovation for Long-Term Impact",
		subtitle: "JFFLabs Impact Incubation Model",
		pdfUrl: "/case-studies/jfflabs-impact-incubation-model-case-study.pdf",
		challenge:
			"JFFLabs, an innovation incubation lab focused on education and workforce development, aimed to identify opportunities with a 10+ year horizon and sought to improve consistency in scouting, idea validation, and execution processes to boost outcomes, fundraising, partnerships, and ROI.",
		solution:
			"Partnered with IncioX to assess current processes, design and launch the Impact Incubation Model—a structured stage-gate framework standardizing incubation, scaling, and impact measurement across teams.",
		results: [
			"Adopted across Insights, Incubation, and Product teams",
			"Enhanced appeal to funders with demonstrated innovation and ROI",
			"Strengthened strategic partnerships and measurement practices",
		],
	},
	{
		title: "Building a Platform for Non-Degree Credential Quality Assessment",
		subtitle: "EQOS Initiative",
		pdfUrl: "/case-studies/jff-eqos-product-prototype-and-funder-roi-case-study.pdf",
		challenge:
			"EQOS needed a scalable platform and API to assess non-degree credential quality under a $2.9M GitLab Foundation grant while coordinating JFF, BGI, and foundation expectations.",
		solution:
			"Served as technical advisor and overseer, aligning stakeholders via the Impact Incubation Model, guiding product and API development, and facilitating collaboration sessions and executive reporting.",
		results: [
			"Delivered the EQOS data model and web app/API",
			"Met all year 1 milestones and secured additional $2.1M funding",
			"Improved cross-organizational collaboration and transparency",
		],
	},
	{
		title: "Building a Hub for Opportunity",
		subtitle: "Economic Mobility for Veteran and Military Families",
		pdfUrl: "/case-studies/jfflabs-economic-mobility-for-veteran-and-military-families-case-study.pdf",
		challenge:
			"Veterans and military families face high unemployment, skill translation gaps, and underemployment for spouses, requiring streamlined access to services and support.",
		solution:
			"Collaborated with JFFLabs and IncioX to develop a comprehensive strategy and implementation plan, defining success metrics and securing Advisory Committee approval for execution.",
		results: [
			"Strategy approved and funded by JFF Advisory Committee",
			"Public launch via a virtual salon in January 2025",
			"Established a scalable hub model for veteran economic mobility",
		],
	},
	{
		title: "Empowering Young Learners with Clear Career Pathways",
		subtitle: "ASA Center for Career Navigation",
		pdfUrl: "/case-studies/jff-asa-center-for-career-navigation-platform-prototype-case-study.pdf",
		challenge:
			"Young learners lacked clarity on education and career options, needing a user-friendly navigation solution aligned with quality job outcomes.",
		solution:
			"Led the Tech Marketplace workstream, defining product vision, requirements, and accelerating the prototype delivery from 12 to 3 months for early Gen Z testing.",
		results: [
			"Prototype delivered 9 months ahead of schedule",
			"Enabled early user testing and feedback loops",
			"Initiated v1 development based on real-time insights",
		],
	},
	{
		title: "Aligning Teams for Innovation Success",
		subtitle: "JFFLabs Innovation Workshop",
		pdfUrl: "/case-studies/jfflabs-innovation-workshop-retreat-case-study.pdf",
		challenge:
			"Misaligned incentives and inconsistent processes across Insights, Incubation, and Product teams hindered JFFLabs' innovation impact.",
		solution:
			"Facilitated a virtual workshop using real pipeline deals to align teams, identify pain points, and deliver an Incubation Playbook standardizing financial management, trend identification, and deal flow processes.",
		results: [
			"Deepened understanding of team roles and processes",
			"Created actionable Incubation Playbook for daily operations",
			"Improved operational effectiveness and value delivery",
		],
	},
];

export default function CaseStudies() {
	const [modalOpen, setModalOpen] = useState(false);
	const [selected, setSelected] = useState<{ pdfUrl: string; title: string } | null>(
		null
	);

	const openModal = (pdfUrl: string, title: string) => {
		setSelected({ pdfUrl, title });
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
		setSelected(null);
	};

	return (
		<section className="bg-white dark:bg-gray-950 py-16 min-h-[70vh]">
			<div className="container mx-auto max-w-5xl px-4">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold tracking-tight text-brand-primary mb-4">
						Client Success Stories
					</h1>
					<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
						Explore how we've helped leading organizations transform their operations
						and achieve breakthrough results.
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-2">
					{CASE_STUDIES.map((cs) => (
						<div
							key={cs.title}
							className="rounded-lg border bg-white dark:bg-gray-900 p-8 flex flex-col h-full"
						>
							<h2 className="text-2xl font-bold text-brand-primary">
								{cs.title}
							</h2>
							<p className="mt-2 text-sm font-medium text-gray-500">
								{cs.subtitle}
							</p>
							<div className="mt-6 flex flex-col flex-grow space-y-6">
								<div>
									<h3 className="font-semibold">Challenge</h3>
									<p className="mt-2 text-gray-500">{cs.challenge}</p>
								</div>
								<div>
									<h3 className="font-semibold">Solution</h3>
									<p className="mt-2 text-gray-500">{cs.solution}</p>
								</div>
								<div>
									<h3 className="font-semibold">Results</h3>
									<ul className="mt-2 space-y-2 text-gray-500">
										{cs.results.map((result) => (
											<li key={result}>• {result}</li>
										))}
									</ul>
								</div>
							</div>
							<div className="mt-6">
								<button
									className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border bg-white dark:bg-gray-900 h-10 px-4 py-2 w-full border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition"
									onClick={() => openModal(cs.pdfUrl, cs.title)}
								>
									Download Case Study
								</button>
							</div>
						</div>
					))}
				</div>
				{/* Trusted By Section */}
				<section className="py-12 border-t border-b bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm mt-12">
					<div className="container max-w-4xl mx-auto">
						<p className="text-center text-sm font-medium text-gray-500 mb-8">
							Trusted by Leading Innovation, Edtech, and Nonprofit Organizations
						</p>
						<div className="flex flex-wrap items-center justify-center gap-12">
							<div className="flex-shrink-0 w-40">
								<div className="relative h-16 w-full">
									<img
										alt="Jobs for the Future (JFF) logo."
										className="object-contain opacity-80 hover:opacity-100 transition-opacity dark:opacity-100"
										src="/images/clients/jff-logo.png"
									/>
								</div>
							</div>
							<div className="flex-shrink-0 w-40">
								<div className="relative h-16 w-full">
									<img
										alt="JFFLabs logo"
										className="object-contain opacity-80 hover:opacity-100 transition-opacity dark:opacity-100"
										src="/images/clients/jfflabs-logo.png"
									/>
								</div>
							</div>
							<div className="flex-shrink-0 w-40">
								<div className="relative h-16 w-full">
									<img
										alt="American Student Assistance (ASA) logo."
										className="object-contain opacity-80 hover:opacity-100 transition-opacity dark:opacity-100"
										src="/images/clients/asa-logo.svg"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				{selected && (
					<CaseStudyDownloadModal
						open={modalOpen}
						onClose={closeModal}
						pdfUrl={selected.pdfUrl}
						caseStudyTitle={selected.title}
					/>
				)}
			</div>
		</section>
	);
}
