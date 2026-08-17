// Resource library categories. Items stay empty until real material exists —
// each category renders a "coming soon" state when its items array is empty.

const resources = [
  { key: 'publications', icon: 'doc', title: 'Publications', description: 'Research papers and journal submissions.', items: [] },
  { key: 'reports', icon: 'flask', title: 'Technical Reports', description: 'In-depth write-ups on prototypes and experiments.', items: [] },
  { key: 'docs', icon: 'server', title: 'Documentation', description: 'Architecture notes and platform documentation.', items: [] },
  { key: 'presentations', icon: 'chart', title: 'Presentations', description: 'Slides and talks from conferences and events.', items: [] },
];

export default resources;
