const solutions = [
  {
    slug: 'threat-detection',
    icon: 'radar',
    title: 'Intelligent Threat Detection',
    tagline: 'AI-driven detection of suspicious activity across systems and networks.',
    description:
      'Threat Detection is designed to continuously watch system and network activity for patterns that deviate from normal behaviour, surfacing potential threats before they escalate rather than relying purely on static, signature-based rules.',
    idealFor: 'Security teams that need an additional, adaptive layer on top of traditional rule-based monitoring.',
    highlights: [
      'Behavioural anomaly detection across logs and traffic',
      'Continuous monitoring rather than periodic scans',
      'Designed to complement, not replace, existing tooling',
      'Built to reduce alert fatigue through prioritisation',
    ],
    faqs: [
      { q: 'Is this a replacement for my existing SIEM or firewall?', a: 'No. It is designed as a complementary detection layer that adds behavioural analysis on top of the tools you already run.' },
      { q: 'What stage is this module at?', a: 'It is currently in active research and prototyping. We are validating detection approaches before any production release.' },
    ],
  },
  {
    slug: 'explainable-intelligence',
    icon: 'eye',
    title: 'Explainable Intelligence',
    tagline: 'Understand why a system produced a particular result, not just what it produced.',
    description:
      'Most AI-driven security tools output a verdict without reasoning. Explainable Intelligence focuses on surfacing the factors and evidence behind a decision, so analysts can verify, trust, and act on it with confidence.',
    idealFor: 'Teams that need to justify security decisions to auditors, leadership, or compliance stakeholders.',
    highlights: [
      'Human-readable reasoning behind flagged events',
      'Traceable evidence trails, not just confidence scores',
      'Designed to support analyst review, not replace it',
      'Built around explainable AI research, not black-box models',
    ],
    faqs: [
      { q: 'Does this slow down detection?', a: 'Explanation generation is designed to run alongside detection, not block it — the goal is added context, not added latency.' },
      { q: 'Is this available today?', a: 'This is a core research focus of Trinarix and is under active development.' },
    ],
  },
  {
    slug: 'risk-analysis',
    icon: 'alert',
    title: 'Risk Analysis',
    tagline: 'Identify and prioritise potential threats before they escalate.',
    description:
      'Risk Analysis aims to score and rank detected issues by potential impact and likelihood, helping teams focus limited attention on what matters most instead of triaging alerts in the order they arrive.',
    idealFor: 'Lean security teams that cannot manually triage every alert individually.',
    highlights: [
      'Impact and likelihood-based prioritisation',
      'Context-aware scoring rather than fixed severity labels',
      'Designed to integrate with existing alerting workflows',
      'Built to reduce time-to-decision on high-risk events',
    ],
    faqs: [
      { q: 'How is risk scored?', a: 'By combining signal confidence, asset sensitivity, and historical context — the exact model is still being refined through research.' },
    ],
  },
  {
    slug: 'automated-response',
    icon: 'send',
    title: 'Automated Response',
    tagline: 'Assist security teams in responding to detected threats faster.',
    description:
      'Automated Response focuses on reducing the time between detection and action — suggesting or triggering predefined response steps for well-understood threat patterns, while leaving judgment calls to human analysts.',
    idealFor: 'Teams that want faster containment without fully automating decisions away from people.',
    highlights: [
      'Human-in-the-loop by default',
      'Predefined playbooks for common threat patterns',
      'Designed to reduce mean time to response',
      'Built with override and audit controls in mind',
    ],
    faqs: [
      { q: 'Can this take action without human approval?', a: 'The current design keeps a human in the loop for anything beyond low-risk, well-understood responses.' },
    ],
  },
  {
    slug: 'analytics-dashboard',
    icon: 'chart',
    title: 'Analytics Dashboard',
    tagline: 'Visualise threats, risk levels, system health, anomalies, trends and alerts in one place.',
    description:
      'The Analytics Dashboard is the visual layer of the Trinarix platform — bringing detection, risk, and system health data together so teams can see the overall security posture at a glance instead of switching between tools.',
    idealFor: 'Teams and leadership who need a single view of security posture across systems.',
    highlights: [
      'Unified view across detection, risk and system health',
      'Trend visualisation over time, not just point-in-time snapshots',
      'Designed for both analyst and leadership audiences',
      'Built to surface what changed, not just what is true now',
    ],
    faqs: [
      { q: 'Is there a live demo available?', a: 'The homepage includes an illustrative preview of the dashboard concept. A working demo will follow as the platform matures.' },
    ],
  },
  {
    slug: 'scalable-architecture',
    icon: 'layers',
    title: 'Scalable Architecture',
    tagline: 'Built to evolve from prototype to production-grade deployment.',
    description:
      'Rather than being designed only as a proof of concept, the Trinarix platform architecture is being built with a path to production in mind — modular components, clear boundaries, and infrastructure choices that can scale with real deployments.',
    idealFor: 'Organisations evaluating Trinarix as a long-term technology partner, not just a one-off prototype.',
    highlights: [
      'Modular components with clear boundaries',
      'Cloud-native infrastructure choices',
      'API-first design for integration flexibility',
      'Security considered at the architecture level, not bolted on',
    ],
    faqs: [
      { q: 'Can this be self-hosted?', a: 'Deployment options are still being defined as the platform architecture matures.' },
    ],
  },
];

export default solutions;
