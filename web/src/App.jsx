const corePromiseItems = [
  'Send and receive money instantly between IFunds wallets and all Nigerian bank accounts.',
  'Link and manage multiple bank accounts from a single app.',
  'Pay bills (electricity, water, airtime, data, TV, and recurring services) quickly.',
  'Access real-time balances, transaction history, and spending insights.',
  'Receive payments via virtual accounts, QR codes, and payment links.',
  'Support merchants with invoicing, reconciliation, and payment tracking.',
]

const targetUsers = [
  {
    title: 'Retail users',
    points: [
      'Salary earners, students, freelancers, and families who need fast daily payments.',
      'Users with multiple bank accounts seeking one dashboard.',
    ],
  },
  {
    title: 'Merchants and SMEs',
    points: [
      'Online sellers, service providers, and local businesses.',
      'Need simple collections, payment proof, invoicing, and cashflow visibility.',
    ],
  },
  {
    title: 'Enterprise/API clients (future)',
    points: ['Platforms that need payout and collections APIs.'],
  },
]

const platformCapabilities = [
  {
    code: 'A',
    title: 'Transfers and Wallet',
    points: [
      'IFunds-to-IFunds instant transfers.',
      'Wallet-to-bank and bank-to-wallet transfers through Nigerian payment rails.',
      'Name enquiry and account verification before transfer.',
      'Scheduled and recurring transfers.',
    ],
  },
  {
    code: 'B',
    title: 'Bank Account Linking',
    points: [
      'Link multiple Nigerian bank accounts via secure APIs.',
      'View account aliases, status, and last sync time.',
      'Set default debit/credit account.',
      'Remove/revoke linked accounts at any time.',
    ],
  },
  {
    code: 'C',
    title: 'Bills and Value-Added Services',
    points: [
      'Electricity, water, TV subscriptions, airtime, data, and internet bundles.',
      'Beneficiary templates and quick re-purchase.',
      'Auto-pay for recurring bills with reminders.',
      'Digital receipts and dispute workflow.',
    ],
  },
  {
    code: 'D',
    title: 'Transaction Intelligence',
    points: [
      'Real-time transaction feed with filters and search.',
      'Balance timeline and inflow/outflow analysis.',
      'Category-based spending analytics.',
      'Monthly statements (PDF export + email).',
    ],
  },
  {
    code: 'E',
    title: 'Collections: Virtual Accounts, QR, and Links',
    points: [
      'Dedicated virtual account for each user.',
      'Dynamic virtual accounts for merchants/invoices.',
      'Static and dynamic QR code payments.',
      'Payment links with amount, memo, expiry, and webhook status.',
    ],
  },
  {
    code: 'F',
    title: 'Merchant and Business Tools',
    points: [
      'Merchant onboarding and KYB.',
      'Invoice creation, due-date tracking, and reminders.',
      'Team roles (owner, finance, support, viewer).',
      'Reconciliation dashboard and settlement reports.',
    ],
  },
]

const designPrinciples = [
  {
    label: 'Trust-first',
    detail: 'clean typography, high contrast, visible security indicators.',
  },
  {
    label: 'Mobile-first',
    detail: 'optimized flows for Android and iOS.',
  },
  {
    label: 'Low-friction',
    detail: 'fewer taps for high-frequency actions.',
  },
  {
    label: 'Clarity over decoration',
    detail: 'concise labels, clear status, visible next actions.',
  },
]

const visualStyle = [
  'Minimal, modern fintech aesthetic.',
  'Soft neutral surfaces + strong brand accent for CTAs.',
  'Clear spacing scale (8pt grid) and consistent iconography.',
]

const primaryNavigation = ['Home', 'Payments', 'Bills', 'Cards/Wallet', 'Account']

const keyUserJourneys = [
  'Fast onboarding (phone/email -> KYC -> create PIN -> wallet ready).',
  'Transfer flow (beneficiary -> amount -> confirm -> OTP/biometric -> success).',
  'Bill payment flow (select biller -> validate customer ID -> pay -> receipt).',
  'Merchant payment request (create invoice/link -> share -> track payment status).',
]

const securityRiskControls = [
  {
    code: 'SC',
    title: 'Security controls',
    points: [
      '2FA stack: PIN + OTP + optional biometric challenge.',
      'Device binding and trusted-device management.',
      'End-to-end encryption in transit (TLS 1.2+) and encryption at rest.',
      'Tokenized secrets and HSM-backed key management.',
      'Session risk scoring and adaptive authentication.',
    ],
  },
  {
    code: 'FA',
    title: 'Fraud and abuse prevention',
    points: [
      'Real-time rules engine (velocity, geo-anomaly, device fingerprint, beneficiary risk).',
      'ML-assisted anomaly detection for account takeover and mule activity.',
      'Transaction limits by KYC tier and behavior profile.',
      'Automated case creation for suspicious events.',
    ],
  },
  {
    code: 'NG',
    title: 'Compliance (Nigeria)',
    points: [
      'KYC/KYB aligned to CBN and local AML/CFT requirements.',
      'Tiered wallet accounts with corresponding transaction caps.',
      'PEP/sanctions screening and adverse media checks.',
      'NDPR-aligned data handling and consent controls.',
      'Complete audit logs and compliance reporting pipeline.',
    ],
  },
]

const onboardingKycFlow = [
  'Phone/email verification.',
  'BVN and/or NIN validation via licensed providers.',
  'Liveness + selfie and document verification (as required by tier).',
  'Address details and risk scoring.',
  'Tier assignment with dynamic limits.',
  'Wallet provisioning + virtual account issuance.',
]

const onboardingPerformanceTargets = [
  'Average onboarding time under 3 minutes for Tier-1 users.',
  'Real-time KYC decision for most users; manual review queue for exceptions.',
]

const highLevelArchitecture = [
  {
    title: 'Client apps',
    detail: 'iOS, Android, and admin/merchant web portals.',
  },
  {
    title: 'API Gateway',
    detail: 'auth, routing, throttling, request signing.',
  },
  {
    title: 'Core domain services',
    services: [
      'Identity & Access Service',
      'Wallet & Ledger Service',
      'Transfers Orchestration Service',
      'Bills/VTU Service',
      'Collections Service (virtual accounts, QR, links)',
      'Merchant Service (invoice, settlement, reconciliation)',
      'Notifications Service (SMS/email/push/WhatsApp)',
      'Risk & Fraud Service',
      'Reporting & Analytics Service',
    ],
  },
  {
    title: 'Integration layer',
    detail:
      'connectors for NIBSS/NIP rails, bill aggregators, KYC providers, SMS gateways.',
  },
  {
    title: 'Data layer',
    detail:
      'relational DB for transactional data, event store, cache, and analytics warehouse.',
  },
]

const architecturalPatterns = [
  'Event-driven microservices for payment lifecycle events.',
  'Idempotent APIs for financial operations.',
  'Double-entry ledger as source of truth.',
  'Saga/workflow orchestration for multi-step payments.',
  'Outbox pattern to ensure reliable event delivery.',
]

const dataCoreEntities = [
  ['User', 'Profile', 'KYCRecord'],
  ['Wallet', 'LedgerAccount', 'LedgerEntry'],
  ['BankAccountLink'],
  ['Transfer', 'BillPayment', 'PaymentLink', 'QRPayment'],
  ['Merchant', 'Invoice', 'Settlement'],
  ['RiskAlert', 'Dispute', 'AuditLog'],
]

const ledgerPrinciples = [
  'Immutable ledger entries (append-only).',
  'Every movement must balance (debit = credit).',
  'Clear reference IDs for traceability across systems.',
]

const apiStyle = [
  'REST for external client APIs; gRPC/internal async messaging for service-to-service.',
  'Versioned endpoints (/v1) and contract testing.',
  'Webhooks for merchant payment updates.',
]

const apiEndpointGroups = [
  '/v1/auth/*',
  '/v1/wallets/*',
  '/v1/transfers/*',
  '/v1/bills/*',
  '/v1/collections/*',
  '/v1/merchants/*',
  '/v1/reports/*',
]

const apiNonFunctionalRequirements = [
  'P95 response time < 300 ms for balance and history reads.',
  'Strong idempotency and replay protection on payment writes.',
  'Rate limiting by user, device, and merchant tiers.',
]

const reliabilityOperations = [
  'Active-active deployment across multiple availability zones.',
  'Zero-downtime deployments with canary releases.',
  'Real-time monitoring: success rates, latency, reconciliation drift, fraud signals.',
  'Automated recovery runbooks for provider downtime.',
  'Circuit breakers and fallback routing for rail/provider outages.',
]

const sloExamples = [
  '99.95% monthly uptime for core payment APIs.',
  '99.9% successful transfer completion (excluding external bank downtime).',
  '< 5 minutes mean time to detect critical failures.',
]

const roadmapPhases = [
  {
    phase: 'Phase 1 (MVP)',
    items: [
      'Wallet, transfers, bank linking, bill pay, virtual accounts, transaction feed, KYC.',
    ],
  },
  {
    phase: 'Phase 2',
    items: [
      'QR and payment links, merchant onboarding, invoicing, role-based access.',
    ],
  },
  {
    phase: 'Phase 3',
    items: [
      'Savings pots, micro-investments, lending pre-qualification, business analytics.',
    ],
  },
  {
    phase: 'Phase 4',
    items: [
      'International transfers/remittances and multi-currency capabilities.',
    ],
  },
]

const platformReadiness = [
  'Modular domain services and event contracts.',
  'Feature flags for staged rollouts.',
  'Data model prepared for credit scoring and cross-border compliance modules.',
]

const userMetrics = [
  'Onboarding completion rate',
  'DAU/MAU and retention',
  'Transfer success rate',
  'Bill payment repeat rate',
]

const businessMetrics = [
  'Total payment volume (TPV)',
  'Merchant activation and retention',
  'Revenue per active user/account',
]

const riskMetrics = [
  'Fraud loss rate',
  'Chargeback/dispute rate',
  'KYC false-positive/false-negative rates',
]

function App() {
  return (
    <main className="app-shell">
      <div className="hero">
        <p className="eyebrow">IFunds Platform Design</p>
        <h1>Core Promise</h1>
        <p className="subtitle">
          A secure, reliable, and mobile-first financial experience built for
          everyday payments in Nigeria.
        </p>
      </div>

      <section className="promise-grid" aria-label="IFunds core promises">
        {corePromiseItems.map((item, index) => (
          <article
            className="promise-card"
            key={item}
            style={{ '--delay': `${index * 90}ms` }}
          >
            <span className="promise-index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p>{item}</p>
          </article>
        ))}
      </section>

      <section className="target-users-section" aria-label="IFunds target users">
        <div className="section-head">
          <h2>Target Users</h2>
          <p>
            Designed for individual customers, businesses, and future API
            platforms.
          </p>
        </div>

        <div className="target-users-grid">
          {targetUsers.map((group, index) => (
            <article className="target-user-card" key={group.title}>
              <div className="target-user-card-head">
                <span className="target-tag">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{group.title}</h3>
              </div>
              <ul>
                {group.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        className="platform-capabilities-section"
        aria-label="IFunds platform capabilities"
      >
        <div className="section-head">
          <h2>Platform Capabilities</h2>
          <p>
            Core financial modules that power daily payments, collections, and
            merchant operations.
          </p>
        </div>

        <div className="capabilities-grid">
          {platformCapabilities.map((capability, index) => (
            <article
              className="capability-card"
              key={capability.code}
              style={{ '--delay': `${index * 85}ms` }}
            >
              <div className="capability-head">
                <span className="capability-code">{capability.code}</span>
                <h3>{capability.title}</h3>
              </div>
              <ul>
                {capability.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="ux-direction-section" aria-label="IFunds UX UI direction">
        <div className="section-head">
          <h2>UX/UI Design Direction</h2>
          <p>
            Product experience patterns that keep financial journeys fast,
            clear, and trust-centered.
          </p>
        </div>

        <div className="ux-grid">
          <article className="ux-card">
            <h3>Design principles</h3>
            <ul>
              {designPrinciples.map((principle) => (
                <li key={principle.label}>
                  <strong>{principle.label}:</strong> {principle.detail}
                </li>
              ))}
            </ul>
          </article>

          <article className="ux-card">
            <h3>Visual style</h3>
            <ul>
              {visualStyle.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="ux-card">
            <h3>Primary navigation (mobile)</h3>
            <div className="nav-chip-wrap">
              {primaryNavigation.map((item) => (
                <span className="nav-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="ux-card">
            <h3>Key user journeys</h3>
            <ol>
              {keyUserJourneys.map((journey) => (
                <li key={journey}>{journey}</li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section
        className="security-risk-section"
        aria-label="IFunds security compliance and risk controls"
      >
        <div className="section-head">
          <h2>Security, Compliance, and Risk Controls</h2>
          <p>
            Defense-in-depth controls to protect users, reduce fraud exposure,
            and satisfy Nigerian regulatory requirements.
          </p>
        </div>

        <div className="security-grid">
          {securityRiskControls.map((group, index) => (
            <article
              className="security-card"
              key={group.title}
              style={{ '--delay': `${index * 95}ms` }}
            >
              <div className="security-card-head">
                <span className="security-code">{group.code}</span>
                <h3>{group.title}</h3>
              </div>
              <ul>
                {group.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        className="onboarding-kyc-section"
        aria-label="IFunds onboarding and KYC flow"
      >
        <div className="section-head">
          <h2>Onboarding and KYC Flow</h2>
          <p>
            Structured identity checks designed to onboard legitimate users in
            minutes while escalating exceptions for manual review.
          </p>
        </div>

        <div className="kyc-layout">
          <article className="kyc-flow-card">
            <h3>Flow steps</h3>
            <ol className="kyc-step-list">
              {onboardingKycFlow.map((step, index) => (
                <li className="kyc-step-item" key={step}>
                  <span className="kyc-step-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </article>

          <article className="kyc-target-card">
            <h3>Performance targets</h3>
            <ul>
              {onboardingPerformanceTargets.map((target) => (
                <li key={target}>{target}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section
        className="system-architecture-section"
        aria-label="IFunds system architecture"
      >
        <div className="section-head">
          <h2>System Architecture (Scalable, API-Driven)</h2>
          <p>
            Modular architecture for resilient payment execution, strict ledger
            integrity, and reliable provider integrations.
          </p>
        </div>

        <div className="architecture-layout">
          <article className="architecture-card">
            <h3>High-level architecture</h3>
            <div className="architecture-pillars">
              {highLevelArchitecture.map((layer) => (
                <section className="architecture-pillar" key={layer.title}>
                  <h4>{layer.title}</h4>
                  {layer.detail && <p>{layer.detail}</p>}
                  {layer.services && (
                    <ul className="service-chip-list">
                      {layer.services.map((service) => (
                        <li key={service}>{service}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </article>

          <article className="architecture-patterns-card">
            <h3>Architectural patterns</h3>
            <ul>
              {architecturalPatterns.map((pattern) => (
                <li key={pattern}>{pattern}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section
        className="data-ledger-section"
        aria-label="IFunds data and ledger design"
      >
        <div className="section-head">
          <h2>Data and Ledger Design</h2>
          <p>
            Domain entities and ledger guardrails that preserve financial
            correctness and auditability.
          </p>
        </div>

        <div className="data-ledger-layout">
          <article className="entities-card">
            <h3>Core entities</h3>
            <div className="entity-group-list">
              {dataCoreEntities.map((group) => (
                <div className="entity-group" key={group.join('-')}>
                  {group.map((entity) => (
                    <span className="entity-chip" key={entity}>
                      {entity}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </article>

          <article className="ledger-principles-card">
            <h3>Ledger principles</h3>
            <ul>
              {ledgerPrinciples.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="api-strategy-section" aria-label="IFunds API strategy">
        <div className="section-head">
          <h2>API Strategy</h2>
          <p>
            Consistent API contracts for external clients and reliable
            service-to-service orchestration.
          </p>
        </div>

        <div className="api-strategy-layout">
          <article className="api-style-card">
            <h3>API style</h3>
            <ul>
              {apiStyle.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="api-endpoints-card">
            <h3>Sample endpoint groups</h3>
            <div className="endpoint-chip-wrap">
              {apiEndpointGroups.map((endpoint) => (
                <code className="endpoint-chip" key={endpoint}>
                  {endpoint}
                </code>
              ))}
            </div>
          </article>

          <article className="api-nfr-card">
            <h3>Non-functional API requirements</h3>
            <ul>
              {apiNonFunctionalRequirements.map((requirement) => (
                <li key={requirement}>{requirement}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section
        className="reliability-ops-section"
        aria-label="IFunds reliability and operations"
      >
        <div className="section-head">
          <h2>Reliability and Operations</h2>
          <p>
            Operational safeguards designed for payment continuity, rapid
            detection, and resilient incident response.
          </p>
        </div>

        <div className="ops-layout">
          <article className="ops-controls-card">
            <h3>Reliability controls</h3>
            <ul>
              {reliabilityOperations.map((control) => (
                <li key={control}>{control}</li>
              ))}
            </ul>
          </article>

          <article className="ops-slo-card">
            <h3>SLO examples</h3>
            <ul className="slo-list">
              {sloExamples.map((slo) => (
                <li key={slo}>{slo}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section
        className="roadmap-extensibility-section"
        aria-label="IFunds roadmap and extensibility"
      >
        <div className="section-head">
          <h2>Roadmap and Extensibility</h2>
          <p>
            Staged product delivery plan with a platform foundation designed for
            long-term expansion.
          </p>
        </div>

        <div className="roadmap-layout">
          <article className="roadmap-phases-card">
            <h3>Delivery phases</h3>
            <ol className="roadmap-phase-list">
              {roadmapPhases.map((phase, index) => (
                <li className="roadmap-phase-item" key={phase.phase}>
                  <span className="roadmap-phase-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4>{phase.phase}</h4>
                    <ul>
                      {phase.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </article>

          <article className="roadmap-readiness-card">
            <h3>Platform readiness for future products</h3>
            <ul>
              {platformReadiness.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="success-metrics-section" aria-label="IFunds success metrics">
        <div className="section-head">
          <h2>Success Metrics</h2>
          <p>
            North-star indicators used to track product adoption, business
            performance, and risk outcomes.
          </p>
        </div>

        <div className="metrics-grid">
          <article className="metric-card">
            <h3>User metrics</h3>
            <ul>
              {userMetrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </article>

          <article className="metric-card">
            <h3>Business metrics</h3>
            <ul>
              {businessMetrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </article>

          <article className="metric-card">
            <h3>Risk metrics</h3>
            <ul>
              {riskMetrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App
