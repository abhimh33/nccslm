import { LOAN_SERVICES, DEPOSIT_SERVICES } from '../content.js'

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-16 md:py-24"
      style={{ background: 'var(--cream-warm)' }}
    >
      <div className="shell">
        {/* ── Section header ── */}
        <div className="mb-12 text-center">
          <p className="section-label">ನಮ್ಮ ಸೇವೆಗಳು</p>
          <h2 id="services-heading" className="heading-xl mt-3">
            ಸಾಲ ಮತ್ತು ಠೇವಣಿ ಸೇವೆಗಳು
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* ── Loan services ── */}
        <div className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-white"
              style={{ background: 'var(--navy)' }}
              aria-hidden="true"
            >
              ₹
            </span>
            <h3 className="heading-lg !mt-0">{LOAN_SERVICES.title}</h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {LOAN_SERVICES.items.map((service, i) => (
              <div
                key={i}
                className="card flex items-start gap-3 p-4 transition-shadow duration-200 hover:shadow-md"
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded text-xs font-bold text-white"
                  style={{ background: 'var(--gold)' }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <p className="text-sm font-medium leading-6" style={{ color: 'var(--ink-1)' }}>
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Deposit services ── */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-white"
              style={{ background: 'var(--navy)' }}
              aria-hidden="true"
            >
              ₹
            </span>
            <h3 className="heading-lg !mt-0">{DEPOSIT_SERVICES.title}</h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {DEPOSIT_SERVICES.items.map((service, i) => (
              <div
                key={i}
                className="card flex items-start gap-3 p-4 transition-shadow duration-200 hover:shadow-md"
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded text-xs font-bold text-white"
                  style={{ background: 'var(--gold)' }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <p className="text-sm font-medium leading-6" style={{ color: 'var(--ink-1)' }}>
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
